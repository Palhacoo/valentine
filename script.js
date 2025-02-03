// Fungsi untuk menangani klik "Yes"
function accepted() {
    alert('You said Yes! Happy Valentine\'s Day!');
}

// Fungsi untuk membuat tombol "No" bergerak saat mouse melintas
function moveButton(button) {
    const randomX = Math.floor(Math.random() * 200) - 100; // Gerakan acak sumbu X
    const randomY = Math.floor(Math.random() * 200) - 100; // Gerakan acak sumbu Y
    button.style.transform = `translate(${randomX}px, ${randomY}px)`;
}
