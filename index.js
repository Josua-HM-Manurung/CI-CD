const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Halo! Ini deployment via Jenkins CI/CD - Versi 1');
});

app.listen(PORT, () => {
  console.log(`Server jalan di port ${PORT}`);
});