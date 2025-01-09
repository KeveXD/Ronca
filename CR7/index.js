// Az Express csomag importálása
const express = require('express');
const path = require('path');

// Az Express alkalmazás létrehozása
const app = express();

// Port, amin a szerver futni fog
const PORT = 3000;

// Statikus fájlok kiszolgálása (pl. CSS, JS, képek), ha azok a projekt gyökérkönyvtárában vannak
app.use(express.static(path.join(__dirname)));

// Alapértelmezett útvonal, amely a home.html fájlt szolgáltatja
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html')); // Mivel nem a public mappában van
});


// A szerver indítása a megadott porton
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});