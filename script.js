// Ambil elemen tombol dan menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Saat tombol diklik, ubah tampilan menu
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Ambil semua input & select dalam form
const inputs = document.querySelectorAll('#formUser input, #formUser select');

  // Tambahkan event listener untuk Enter
  inputs.forEach((input, index) => {
  input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
      e.preventDefault(); // cegah submit
      const nextInput = inputs[index + 1];
      if (nextInput) {
          nextInput.focus(); // pindah ke input berikutnya
      } else {
          document.querySelector('button[type="submit"]').focus();
      }
      }
  });
  });