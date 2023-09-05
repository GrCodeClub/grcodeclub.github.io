
  // Εμφανίστε ένα παράθυρο επιβεβαίωσης με ένα κουμπί "Εγκατάσταση"
  Swal.fire({
    title: 'Εγκαταστήστε την εφαρμογή ως PWA;',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Εγκατάσταση',
    cancelButtonText: 'Άκυρο'
  }).then((result) => {
    if (result.isConfirmed) {
      // Εδώ μπορείτε να προσθέσετε τον κώδικα για την εγκατάσταση της PWA
    } else {
      alert('Η εφαρμογή δεν εγκαταστάθηκε.');
    }
  });

