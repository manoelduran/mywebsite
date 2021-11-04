import mail from '@sendgrid/mail';

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
    `;
  console.log(req.body);
  try {
    const response = await mail.send({
      to: 'manoel.duran@hotmail.com',
      from: 'contact@em2168.manoelduran.com',
      subject: 'New Message!',
      text: message,
      html: message.replace(/\r\n/g, '<br>')
    });
    console.log(response);
  } catch (e) {
    console.log(e);
  }
  res.status(200).json({ status: 'Ok' });
};
