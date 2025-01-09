// Az Express csomag importálása
const express = require('express');
const path = require('path');
const helmet = require('helmet'); // Biztonsági fejlesztések

// Az Express alkalmazás létrehozása
const app = express();

// Biztonsági fejlesztések használata
app.use(helmet());

// Port, amin a szerver futni fog (Heroku környezetre optimalizált)
const PORT = process.env.PORT || 3000;

// Statikus fájlok kiszolgálása
app.use(express.static(path.join(__dirname, 'public')));

// Alapértelmezett útvonal, amely a home.html fájlt szolgáltatja
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// A szerver indítása a megadott porton
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
