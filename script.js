document.addEventListener('DOMContentLoaded', () => {
    const triggerBtn = document.getElementById('trigger-action');
    const buildVersion = document.getElementById('build-version');

    // Add a simple animation effect on button click
    triggerBtn.addEventListener('click', () => {
        triggerBtn.innerHTML = 'Checking...';
        triggerBtn.disabled = true;

        setTimeout(() => {
            triggerBtn.innerHTML = 'Build Stable';
            triggerBtn.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)';
            triggerBtn.style.boxShadow = '0 4px 15px rgba(34, 197, 94, 0.3)';
            
            // Randomize build ID slightly for effect
            const randomId = Math.floor(Math.random() * 1000);
            buildVersion.innerText = `v1.0.0-${randomId}`;
            
            console.log('CI/CD Status Verified: OK');
        }, 1500);
    });

    // Console log for CI monitoring
    console.log('CI/CD Portal Initialized at:', new Date().toISOString());
});
