const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const intentName = req.body.queryResult.intent.displayName;
    let response;

    if (intentName === 'Find House') {
        response = { fulfillmentText: 'Sure, I can help you find a house. Please provide your preferences.' };
    } else if (intentName === 'Contact Support') {
        response = { fulfillmentText: 'You can reach our support at support@houserental.com.' };
    } else {
        response = { fulfillmentText: 'I am not sure how to respond to that.' };
    }

    res.json(response);
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
