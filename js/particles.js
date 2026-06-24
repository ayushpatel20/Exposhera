/* ==========================================================================
   EXPOSHERA SECURITY - FUTURISTIC DASHBOARD GRID CANVAS ANIMATION
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
            this.size = Math.random() * 2 + 1.5;
            this.speedX = Math.random() * 0.4 - 0.2;
            this.speedY = Math.random() * 0.4 - 0.2;
            this.pulse = Math.random() * Math.PI;
            this.isSpecial = Math.random() < 0.15; // 15% of particles represent tracking nodes
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Boundary collision
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

            if (this.isSpecial) {
                this.pulse += 0.05;
            }
        }

        draw() {
            // Draw core particle
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.isSpecial ? 'rgba(6, 182, 212, 0.7)' : 'rgba(30, 41, 59, 0.4)';
            ctx.fill();

            // High-tech dashboard scanning effects
            if (this.isSpecial) {
                // Expanding glowing pulse
                const pulseRadius = this.size * 3 + Math.sin(this.pulse) * 5;
                ctx.beginPath();
                ctx.arc(this.x, this.y, Math.max(1, pulseRadius), 0, Math.PI * 2);
                ctx.strokeStyle = 'rgba(6, 182, 212, 0.2)';
                ctx.lineWidth = 0.8;
                ctx.stroke();

                // Target hair lines
                ctx.beginPath();
                ctx.moveTo(this.x - 7, this.y); ctx.lineTo(this.x + 7, this.y);
                ctx.moveTo(this.x, this.y - 7); ctx.lineTo(this.x, this.y + 7);
                ctx.strokeStyle = 'rgba(6, 182, 212, 0.15)';
                ctx.lineWidth = 0.5;
                ctx.stroke();

                // Draw live coordinate text label
                ctx.font = '6px monospace';
                ctx.fillStyle = 'rgba(6, 182, 212, 0.35)';
                const posX = Math.floor(this.x);
                const posY = Math.floor(this.y);
                ctx.fillText(`TRK_${posX}:${posY}`, this.x + 10, this.y - 3);
            }
        }
    }

    const initParticles = () => {
        particles = [];
        if (window.innerWidth < 768) {
            particleCount = 18;
        } else {
            particleCount = 40;
        }
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    };

    const drawDashboardGrid = () => {
        const gridSpacing = 70;
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.025)';
        ctx.lineWidth = 0.5;

        // Draw Vertical Grid Lines
        for (let x = 0; x < canvas.width; x += gridSpacing) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }

        // Draw Horizontal Grid Lines
        for (let y = 0; y < canvas.height; y += gridSpacing) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }
    };

    const drawConnections = () => {
        const maxDist = 130;
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < maxDist) {
                    const alpha = (1 - dist / maxDist) * 0.18;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }
        }
    };

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        drawDashboardGrid();

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        drawConnections();
        requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();
});

