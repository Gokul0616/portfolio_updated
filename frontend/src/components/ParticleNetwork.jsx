import React, { useEffect, useRef } from 'react';

const ParticleNetwork = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const animationRef = useRef(null);
  const heroSectionRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 217, 255, 0.8)';
        ctx.fill();
      }
    }

    // Initialize particles - increased density
    const particleCount = Math.floor((width * height) / 6000);
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections between particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 217, 255, ${1 - distance / 120})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw lines from cursor to nearby particles
      particlesRef.current.forEach((particle) => {
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 217, 255, ${1 - distance / 150})`;
          ctx.lineWidth = 1.5;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.stroke();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      // Recalculate particle count - increased density
      const newCount = Math.floor((width * height) / 6000);
      if (newCount > particlesRef.current.length) {
        for (let i = particlesRef.current.length; i < newCount; i++) {
          particlesRef.current.push(new Particle());
        }
      } else if (newCount < particlesRef.current.length) {
        particlesRef.current = particlesRef.current.slice(0, newCount);
      }
    };

    // Handle mouse move
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY + window.scrollY
      };
    };

    // Handle click to add particles only in hero section
    const handleClick = (e) => {
      // Get hero section element
      const heroSection = document.querySelector('section.min-h-screen');
      
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const clickX = e.clientX;
        const clickY = e.clientY;
        
        // Check if click is within hero section bounds
        const isInHeroSection = 
          clickX >= rect.left && 
          clickX <= rect.right && 
          clickY >= rect.top && 
          clickY <= rect.bottom;
        
        if (isInHeroSection) {
          // Prevent text selection when clicking in hero section
          e.preventDefault();
          
          // Add 3-5 new particles around the click position
          const numParticles = Math.floor(Math.random() * 3) + 3;
          for (let i = 0; i < numParticles; i++) {
            const particle = new Particle();
            // Position particles around the click with some randomness
            const offsetX = (Math.random() - 0.5) * 50;
            const offsetY = (Math.random() - 0.5) * 50;
            particle.x = e.clientX + offsetX;
            particle.y = e.clientY + window.scrollY + offsetY;
            particlesRef.current.push(particle);
          }
        }
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: '#0a0a0a' }}
    />
  );
};

export default ParticleNetwork;