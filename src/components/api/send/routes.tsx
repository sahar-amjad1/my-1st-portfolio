//import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'sahar <sahar-amjad1>',
      to: ['sahar-amjad1'],
      subject: 'Hello world',
      react:<><p> Email <body>
        
      </body></p> </>
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
