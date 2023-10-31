const express = require('express');
const serverless = require('serverless-http');

const router = express.Router();
const app = express();
router.get('/test', (req, res) => {
    res.json({
        'hello': 'hi'
    });
});

app.use('/.netlify/functions/app', router);

module.exports.handler = serverless(app);
