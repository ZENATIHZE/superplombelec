import { NextRequest, NextResponse } from 'next/server';

// Route API simple — à connecter à votre service email préféré.
// Options recommandées : Resend (resend.com), SendGrid, Postmark, ou Brevo (Sendinblue, gratuit jusqu'à 300 emails/jour).
//
// Variables d'environnement à configurer (.env.local) :
//   RESEND_API_KEY=...
//   CONTACT_TO_EMAIL=contact@superplombelec.fr
//
// Exemple avec Resend (à décommenter une fois la clé API renseignée) :
//   import { Resend } from 'resend';
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   await resend.emails.send({ from: '...', to: '...', subject: '...', html: '...' });

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Validation minimale anti-spam
    if (!data.name || !data.phone || !data.address) {
      return NextResponse.json({ error: 'Champs obligatoires manquants' }, { status: 400 });
    }
    if (data.honeypot) {
      // Champ piège : un bot le remplira
      return NextResponse.json({ ok: true });
    }

    // TODO: brancher l'envoi d'email réel ici (Resend, Brevo...)
    // Pour l'instant, on log et on retourne OK pour permettre le test.
    console.log('[Contact form]', {
      name: data.name,
      phone: data.phone,
      email: data.email,
      address: data.address,
      type: data.type,
      urgency: data.urgency,
      message: data.message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }
}
