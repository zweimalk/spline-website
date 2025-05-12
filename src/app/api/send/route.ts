import { EmailTemplate } from '@/components/Email/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nameAndSurname, phoneNumber, email, message } = await request.json();
    const { data, error } = await resend.emails.send({
      from: 'Spline Website <contact@website.spline.pl>',
      // TODO: add email to send to
      to: ['info@spline.pl'],
      subject: 'Kontakt z formularza na stronie spline.pl',
      react: await EmailTemplate({ nameAndSurname, phoneNumber, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
