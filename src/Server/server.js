const cors = require('cors');
const express = require('express');
const upload = require('./upload');

const app = express();

const router = express.Router();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
  };

app.use(cors(corsOptions));

router.post('/upload', upload);

app.use('/api', router);

app.listen(8000, () => {
  console.log('Server started!')
});


