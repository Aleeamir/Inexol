// const express = require('express');
const bodyParser = require('body-parser');
const emailjs = require('emailjs-com');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, phone, message } = req.body;

  const templateParams = {
    from_name: name,
    to_email: 'yourgmail@gmail.com', // Replace with your Gmail address
    subject: 'New Contact Form Submission',
    message_html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
    `,
  };

  emailjs.send('gmail', 'template_id', templateParams, 'user_id')
    .then(response => {
      console.log('Email sent successfully:', response);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    })
    .catch(error => {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, message: 'Error sending email' });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
