const express = require('express');
require('express-async-errors');
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware');
const productRoute = require('./routes/productsRouter');
const salesRoute = require('./routes/salesRouter');

const app = express();

app.use(express.json());

app.use('/products', productRoute);

app.use('/sales', salesRoute);

app.use(errorHandlerMiddleware);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;