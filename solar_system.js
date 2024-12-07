document.addEventListener('DOMContentLoaded', () => {
    const pauseBtn = document.getElementById('pauseBtn');
    const speedControl = document.getElementById('speedControl');
    const planetItems = document.querySelectorAll('.planet-item');

    // Controle de pausa
    let isPaused = false;
    pauseBtn.addEventListener('click', () => {
        isPaused = !isPaused;
        document.querySelectorAll('.orbit, .moon').forEach(element => {
            element.classList.toggle('paused');
        });
        pauseBtn.textContent = isPaused ? 'Continuar' : 'Pausar';
    });

    // Controle de velocidade
    speedControl.addEventListener('input', (e) => {
        const speed = e.target.value;
        document.querySelectorAll('.orbit, .moon').forEach(element => {
            element.style.animationDuration = `${parseFloat(element.style.animationDuration || 
                getComputedStyle(element).animationDuration) * (1 / speed)}s`;
        });
    });

    // Interação com os itens do painel
    planetItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const planetType = item.dataset.planet;
            highlightPlanet(planetType);
            item.classList.add('active');
        });

        item.addEventListener('mouseleave', () => {
            const planetType = item.dataset.planet;
            unhighlightPlanet(planetType);
            item.classList.remove('active');
        });
    });

    function highlightPlanet(planetType) {
        const element = document.querySelector(`.${planetType}`);
        if (element) {
            element.style.filter = 'brightness(1.5)';
            element.style.transform = 'scale(1.1)';
        }
    }

    function unhighlightPlanet(planetType) {
        const element = document.querySelector(`.${planetType}`);
        if (element) {
            element.style.filter = '';
            element.style.transform = '';
        }
    }
}); 