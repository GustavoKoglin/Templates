const colors = ['#ff6f61', '#3498db', '#28a745', '#ffcc00', '#dc3545']; // Cores a serem alternadas
let currentColorIndex = 0;

function changeColor() {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    document.getElementById('error-code').style.color = colors[currentColorIndex];
}

document.getElementById('home-button').addEventListener('click', function() {
    window.location.href = '/'; // Redireciona para a página inicial
});

// Alterar a cor a cada 3 segundos (duração da animação)
setInterval(changeColor, 3000);