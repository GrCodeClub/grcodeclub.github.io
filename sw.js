if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
      console.log('Ο υπηρεσία εργάτης καταχωρήθηκε με επιτυχία!', registration);
    })
    .catch(function(error) {
      console.error('Σφάλμα καταχώρησης του υπηρεσία εργάτη:', error);
    });
}
