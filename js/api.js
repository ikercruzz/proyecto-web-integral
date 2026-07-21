// Lógica para rastreo y consulta de envíos
document.addEventListener('DOMContentLoaded', () => {
    const btnBuscar = document.getElementById('btnBuscarEnvio');
    const trackingInput = document.getElementById('trackingInput');
    const resultMsg = document.getElementById('trackingResult');

    if (btnBuscar && trackingInput && resultMsg) {
        btnBuscar.addEventListener('click', () => {
            const codigo = trackingInput.value.trim();

            if (codigo === '') {
                resultMsg.style.display = 'block';
                resultMsg.style.color = '#e03232';
                resultMsg.innerText = '⚠️ Por favor ingresa un número de guía válido.';
                return;
            }

            // Simulación de respuesta de rastreo
            resultMsg.style.display = 'block';
            resultMsg.style.color = 'var(--text-color)';
            resultMsg.innerHTML = `📦 Estado de guía <strong>${codigo}</strong>: En tránsito. Llegada estimada en 2 días hábiles.`;
        });
    }
});