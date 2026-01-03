import React, { useEffect, useRef, useState } from 'react';

const ParticleNetwork = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const animationRef = useRef(null);
  const heroSectionRef = useRef(null);
  const [blackHoleActive, setBlackHoleActive] = useState(false);
  const blackHoleRef = useRef({ x: 0, y: 0, radius: 0, maxRadius: 150 });

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

    // Initialize particles - increased density with max limit
    const particleCount = Math.min(Math.floor((width * height) / 6000), 150);
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Black hole effect
      if (blackHoleActive) {
        // Draw black hole visual effect
        const bh = blackHoleRef.current;
        
        // Outer glow
        const outerGradient = ctx.createRadialGradient(bh.x, bh.y, 0, bh.x, bh.y, bh.radius * 1.5);
        outerGradient.addColorStop(0, 'rgba(138, 43, 226, 0.3)');
        outerGradient.addColorStop(0.5, 'rgba(75, 0, 130, 0.2)');
        outerGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.beginPath();
        ctx.arc(bh.x, bh.y, bh.radius * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = outerGradient;
        ctx.fill();

        // Event horizon with distortion effect
        const gradient = ctx.createRadialGradient(bh.x, bh.y, 0, bh.x, bh.y, bh.radius);
        gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
        gradient.addColorStop(0.7, 'rgba(25, 0, 51, 0.9)');
        gradient.addColorStop(0.85, 'rgba(138, 43, 226, 0.6)');
        gradient.addColorStop(1, 'rgba(0, 217, 255, 0.3)');
        
        ctx.beginPath();
        ctx.arc(bh.x, bh.y, bh.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Accretion disk rings
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.arc(bh.x, bh.y, bh.radius + (i * 15), 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(138, 43, 226, ${0.3 - i * 0.1})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        // Grow black hole
        if (bh.radius < bh.maxRadius) {
          bh.radius += 2;
        }
      }

      // Update and draw particles
      const particlesToRemove = [];
      particlesRef.current.forEach((particle, index) => {
        // Black hole gravitational effect - affects ALL particles on screen
        if (blackHoleActive) {
          const bh = blackHoleRef.current;
          const dx = bh.x - particle.x;
          const dy = bh.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Strong gravitational force that affects entire screen
          if (distance > 5) {
            const force = (bh.maxRadius * 2) / (distance * distance) * 2000;
            const angle = Math.atan2(dy, dx);
            particle.vx += Math.cos(angle) * force;
            particle.vy += Math.sin(angle) * force;
            
            // Increase velocity cap during black hole
            const maxSpeed = 15;
            const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
            if (speed > maxSpeed) {
              particle.vx = (particle.vx / speed) * maxSpeed;
              particle.vy = (particle.vy / speed) * maxSpeed;
            }
          }
          
          // Remove particle if it reaches the black hole center
          if (distance < 30) {
            particlesToRemove.push(index);
            return;
          }
        }
        
        particle.update();
        particle.draw();
      });

      // Remove absorbed particles
      if (particlesToRemove.length > 0) {
        particlesRef.current = particlesRef.current.filter((_, index) => !particlesToRemove.includes(index));
      }

      // Draw connections between particles (optimized - limit checks)
      const maxConnectionDistance = 120;
      const maxConnectionsPerParticle = 5;
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        let connections = 0;
        for (let j = i + 1; j < particlesRef.current.length && connections < maxConnectionsPerParticle; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distanceSquared = dx * dx + dy * dy;
          const maxDistSquared = maxConnectionDistance * maxConnectionDistance;

          if (distanceSquared < maxDistSquared) {
            const distance = Math.sqrt(distanceSquared);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 217, 255, ${1 - distance / maxConnectionDistance})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
            connections++;
          }
        }
      }

      // Draw lines from cursor to nearby particles (only if not black hole active)
      if (!blackHoleActive) {
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
      }

      // Auto-close black hole after 5 seconds and leave only 1 particle
      if (blackHoleActive && (particlesRef.current.length <= 1 || blackHoleRef.current.radius >= blackHoleRef.current.maxRadius + 50)) {
        setTimeout(() => {
          setBlackHoleActive(false);
          // Leave only 1 particle
          if (particlesRef.current.length > 1) {
            particlesRef.current = [particlesRef.current[0]];
          } else if (particlesRef.current.length === 0) {
            // Create 1 particle if all were absorbed
            particlesRef.current = [new Particle()];
          }
          // Re-enable scroll
          document.body.style.overflow = 'auto';
        }, 500);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      // Recalculate particle count - increased density with max limit
      const newCount = Math.min(Math.floor((width * height) / 6000), 150);
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
        
        if (isInHeroSection && !blackHoleActive) {
          // Prevent text selection when clicking in hero section
          e.preventDefault();
          
          // Cap total particles at 200 for performance
          if (particlesRef.current.length < 200) {
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
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [blackHoleActive]);

  // Expose black hole activation function to window for Hero component
  useEffect(() => {
    window.activateBlackHole = () => {
      const heroSection = document.querySelector('section.min-h-screen');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        blackHoleRef.current = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          radius: 0,
          maxRadius: 150
        };
        setBlackHoleActive(true);
        // Disable scroll during black hole
        document.body.style.overflow = 'hidden';
        
        // Auto-close after exactly 5 seconds
        setTimeout(() => {
          setBlackHoleActive(false);
          // Leave only 1 particle
          if (particlesRef.current.length > 1) {
            particlesRef.current = [particlesRef.current[0]];
          } else if (particlesRef.current.length === 0) {
            // Create 1 particle if all were absorbed
            const canvas = canvasRef.current;
            if (canvas) {
              class Particle {
                constructor() {
                  this.x = Math.random() * canvas.width;
                  this.y = Math.random() * canvas.height;
                  this.vx = (Math.random() - 0.5) * 0.5;
                  this.vy = (Math.random() - 0.5) * 0.5;
                  this.radius = Math.random() * 2 + 1;
                }
                update() {
                  const width = canvas.width;
                  const height = canvas.height;
                  this.x += this.vx;
                  this.y += this.vy;
                  if (this.x < 0 || this.x > width) this.vx *= -1;
                  if (this.y < 0 || this.y > height) this.vy *= -1;
                }
                draw() {
                  const ctx = canvas.getContext('2d');
                  ctx.beginPath();
                  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                  ctx.fillStyle = 'rgba(0, 217, 255, 0.8)';
                  ctx.fill();
                }
              }
              particlesRef.current = [new Particle()];
            }
          }
          // Re-enable scroll
          document.body.style.overflow = 'auto';
        }, 5000);
      }
    };

    return () => {
      delete window.activateBlackHole;
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