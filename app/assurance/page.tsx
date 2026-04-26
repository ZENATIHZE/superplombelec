// Page assurance retirée - redirection 301 vers /actualites
import { redirect } from 'next/navigation';

export default function AssuranceRedirect() {
  redirect('/actualites');
}
