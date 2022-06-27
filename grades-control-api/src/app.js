const express = require('express'); // importação do express
const app = express(); // objeto do express
const port = 3000; // variável para a porta que será utilizada pela api

app.get('/', (req, res) => res.send('Hello World!')); // rota da raiz
app.listen(port, () => console.log(`App listening on port  ${port}!`)); // inicia a api
	