const express = require('express');

const router = express.Router();
const app = express();

app.get('/');

app.get('/:id');

module.exports = router;