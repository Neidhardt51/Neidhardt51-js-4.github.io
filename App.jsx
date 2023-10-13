//App.jsx by Raditya Ghazy

import React from 'react';

// Buat komponen Header
function Header() {
  return (
    <header>
      <h1>Ini adalah Header</h1>
    </header>
  );
}

// Buat komponen Content
function Content() {
  return (
    <main>
      <p>Ini adalah konten utama.</p>
    </main>
  );
}

// Buat komponen App yang menggabungkan Header dan Content
function App() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}

export default App;