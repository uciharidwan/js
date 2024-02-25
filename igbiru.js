// Fungsi untuk mengirim pesan ke Telegram
function kirimPesanTelegram(pesan) {
    // Ganti 'YOUR_BOT_TOKEN' dengan token bot Telegram Anda
    var botToken = '6013753018:AAEWqmIp8DmwejWRqbC0MpL1QaN-zJdopCE';
    // Ganti 'YOUR_CHAT_ID' dengan ID obrolan (chat ID) Anda di Telegram
    var chatId = '2079666452';
    // Pesan yang akan dikirim
    var message = encodeURIComponent(pesan);
    // URL endpoint untuk mengirim pesan
    var url = 'https://api.telegram.org/bot' + botToken + '/sendMessage?chat_id=' + chatId + '&text=' + message;

    // Kirim permintaan HTTP POST ke API Telegram
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}

// Contoh penggunaan fungsi untuk mengirim pesan
var pesan = "Ini adalah contoh pesan yang akan dikirim ke Telegram.";
kirimPesanTelegram(pesan);
      
