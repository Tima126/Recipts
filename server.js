const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Сервер запущен по адресу http://localhost:${port}`);
});
