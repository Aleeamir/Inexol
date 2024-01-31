const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // Use the port you prefer

app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
    const formData = req.body;
    
    // Log the form data to the console (in a real application, you might want to save it to a database)
    console.log('Form Data:', formData);

    // Respond with a success message
    res.json({ success: true, message: 'Form submitted successfully!' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
