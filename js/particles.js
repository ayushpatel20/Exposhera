/* ==========================================================================
   EXPOSHERA SECURITY - BACKGROUND WAVE/NODE PARTICLES ANIMATION
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let particleCount = 45;

    const resizeCanvas = () => {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
        initParticles();
    };

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1; // particle dot size
            this.speedX = Math.random() * 0.4 - 0.2; // movement velocity x
            this.speedY = Math.random() * 0.4 - 0.2; // movement velocity y
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Boundary collision check
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(230, 126, 34, 0.4)'; // soft orange
            ctx.fill();
        }
    }

    const initParticles = () => {
        particles = [];
        // Adjust particle density based on screen width
        if (window.innerWidth < 768) {
            particleCount = 20;
        } else {
            particleCount = 45;
        }
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    };

    const drawConnections = () => {
        const maxDist = 120; // maximum node connection distance
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < maxDist) {
                    const alpha = (1 - dist / maxDist) * 0.15; // fade line as distance grows
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(10, 132, 255, ${alpha})`; // soft blue link line
                    ctx.lineWidth = 0.8;
                    ctx.stroke();
                }
            }
        }
    };

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            p.update();
            p.draw();
        });

        drawConnections();
        requestAnimationFrame(animate);
    };

    // Listen to resize and setup initial canvas
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
});
