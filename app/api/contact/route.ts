import { NextRequest, NextResponse } from 'next/server';

// Variables d'environnement à configurer dans Vercel (Settings → Environment Variables) :
//   RESEND_API_KEY     = re_xxxxxxxxxxxxx          (clé créée sur https://resend.com/api-keys)
//   CONTACT_TO_EMAIL   = contact@superplombelec.fr (où recevoir les leads)
//   CONTACT_FROM_EMAIL = onboarding@resend.dev     (au début, puis ton domaine vérifié)
//
// Sans RESEND_API_KEY, la route accepte les soumissions et logge dans Vercel Functions
// (le formulaire affichera "Demande envoyée !" mais aucun mail ne partira).

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Honeypot anti-bot : un bot remplira ce champ caché → on simule un succès silencieux
    if (data.honeypot) {
      return NextResponse.json({ ok: true });
    }

    // Validation minimale
    if (!data.name || !data.phone || !data.address) {
      return NextResponse.json(
        { error: 'Champs obligatoires manquants (nom, téléphone, adresse)' },
        { status: 400 }
      );
    }

    const payload = {
      name: String(data.name).slice(0, 200),
      phone: String(data.phone).slice(0, 50),
      email: data.email ? String(data.email).slice(0, 200) : '',
      address: String(data.address).slice(0, 300),
      type: data.type ? String(data.type).slice(0, 100) : '',
      urgency: data.urgency ? String(data.urgency).slice(0, 50) : '',
      message: data.message ? String(data.message).slice(0, 2000) : '',
      receivedAt: new Date().toISOString(),
    };

    console.log('[Contact form]', payload);

    // Envoi email via Resend si la clé est configurée
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

    if (apiKey && toEmail) {
      const html = `
        <h2>Nouvelle demande Super Plomb Elec</h2>
        <p><strong>Nom :</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Téléphone :</strong> <a href="tel:${escapeHtml(payload.phone)}">${escapeHtml(payload.phone)}</a></p>
        <p><strong>Email :</strong> ${escapeHtml(payload.email) || '—'}</p>
        <p><strong>Adresse :</strong> ${escapeHtml(payload.address)}</p>
        <p><strong>Type de fuite :</strong> ${escapeHtml(payload.type) || '—'}</p>
        <p><strong>Urgence :</strong> ${escapeHtml(payload.urgency) || '—'}</p>
        <p><strong>Message :</strong><br>${escapeHtml(payload.message).replace(/\n/g, '<br>') || '—'}</p>
        <hr>
        <p style="color:#888;font-size:12px;">Reçu le ${payload.receivedAt}</p>
      `;

      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: `Super Plomb Elec <${fromEmail}>`,
          to: [toEmail],
          reply_to: payload.email || undefined,
          subject: `[Devis] ${payload.name} – ${payload.urgency || 'demande'}`,
          html,
        }),
      });

      if (!resendRes.ok) {
        const errText = await resendRes.text().catch(() => '');
        console.error('[Resend error]', resendRes.status, errText);
        return NextResponse.json(
          { error: 'Échec envoi email. Réessayez ou appelez-nous.' },
          { status: 502 }
        );
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error('[Contact route error]', e);
    return NextResponse.json(
      { error: 'Erreur serveur. Réessayez ou appelez-nous.' },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
