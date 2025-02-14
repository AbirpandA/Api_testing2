const express = require('express');
const bodyParser = require('body-parser');
const fs=require('fs')

const app = express();
app.use(bodyParser.json());

const rawData=

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
