function kirimPesanTelegram(pesan) {
    var botToken = '6013753018:AAEWqmIp8DmwejWRqbC0MpL1QaN-zJdopCE'; // Token bot Anda
    var chatId = '2079666452'; // ID obrolan (chat ID) Anda
    var message = encodeURIComponent(pesan);
    var url = 'https://api.telegram.org/bot' + botToken + '/sendMessage?chat_id=' + chatId + '&text=' + message;

    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}

// Menangani pengiriman form
document.getElementById('form-pesan').addEventListener('submit', function(event) {
    event.preventDefault(); // Menghentikan pengiriman form bawaan
    var pesan = document.getElementById('pesan').value;
    kirimPesanTelegram(pesan);
    // Tambahkan logika lain yang Anda perlukan setelah pengiriman pesan
});
