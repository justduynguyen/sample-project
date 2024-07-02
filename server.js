const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const filePath = path.join('/data', 'data.txt');
  const content = `Data generated at ${new Date().toISOString()}\n`;
  fs.appendFileSync(filePath, content);
  res.send(`Data written to ${filePath}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
