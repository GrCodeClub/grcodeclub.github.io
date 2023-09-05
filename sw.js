self.addEventListener('fetch', (event) => {
  // Έλεγχος αν η συσκευή είναι κινητή
  if (event.request && event.request.headers && event.request.headers.get('User-Agent').includes('Mobile')) {
    // Εμφάνιση του μηνύματος εγκατάστασης
    event.respondWith(
      new Response(JSON.stringify({ message: 'Θέλετε να εγκαταστήσετε την εφαρμογή ως PWA;' }), {
        headers: { 'Content-Type': 'application/json' },
      })
    );
  }
});
