const express = require('express');
const cors = require('cors');
const app = express();

require('./config/mongoose');
app.use(cors());
app.use(express.json());
app.use(require('./config/routes'))

app.listen(8000, () => {
    console.log('listening on 8000');
})