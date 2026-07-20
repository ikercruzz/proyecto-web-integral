document.addEventListener('DOMContentLoaded', () => {
    // === LÓGICA DE MODO CLARO / OSCURO ===
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeText = document.getElementById('themeText');
    const currentTheme = localStorage.getItem('theme');

    // Función para actualizar la interfaz del botón
    const updateButtonUI = (isLight) => {
        if (isLight) {
            themeToggleBtn.innerHTML = `☀️ <span id="themeText">Modo Oscuro</span>`;
        } else {
            themeToggleBtn.innerHTML = `🌙 <span id="themeText">Modo Claro</span>`;
        }
    };

    // Aplicar el tema guardado al cargar la página
    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        if (themeToggleBtn) updateButtonUI(true);
    }

    // Evento de clic para alternar temas
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');

            // Guardar preferencia y actualizar UI
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            updateButtonUI(isLight);
        });
    }

    // === LÓGICA DE LOGIN ===
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const errorMsg = document.getElementById('errorMsg');

            if (email !== "" && password !== "") {
                localStorage.setItem('snkrs_user', email);
                window.location.href = "index.html";
            } else {
                if (errorMsg) errorMsg.style.display = "block";
            }
        });
    }
});