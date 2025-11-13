document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const whatsappNumber = '55???????????'; // Substitua pelo número real de WhatsApp
            const formattedMessage = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`);
            window.location.href = `https://wa.me/${whatsappNumber}?text=${formattedMessage}`;
        });
        // Objeto com conteúdos por ano (exemplo; adicione mais conforme necessário)
    