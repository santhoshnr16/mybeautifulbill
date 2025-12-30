import React, { useState, useEffect, useRef, useCallback } from "react";

export const StarBackground = () => {
  const canvasRef = useRef(null);
  const starsDataRef = useRef([]);
  const animationFrameRef = useRef(null);
  const meteorTimeouts = useRef([]);
  
  // React state for meteors and theme
  const [meteors, setMeteors] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return true;
  });

  // Effect to listen for theme changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  // --- 1. CANVAS STARS LOGIC ---
  const initStars = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    const width = window.innerWidth;
    const height = window.innerHeight;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    
    ctx.scale(dpr, dpr);

    const numberOfStars = Math.floor((width * height) / 3000);
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      const size = Math.random() * 2 + 0.5;
      newStars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: size,
        baseOpacity: Math.random() * 0.5 + 0.3,
        opacity: Math.random(),
        speed: Math.random() * 0.02 + 0.005,
        twinkleDir: Math.random() > 0.5 ? 1 : -1
      });
    }

    starsDataRef.current = newStars;
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    const width = window.innerWidth;
    const height = window.innerHeight;

    ctx.clearRect(0, 0, width, height);
    
    const stars = starsDataRef.current;
    const starColor = isDarkMode ? "255, 255, 255" : "0, 0, 0";
    
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      
      // Twinkle math
      s.opacity += s.speed * s.twinkleDir;
      if (s.opacity > s.baseOpacity + 0.2 || s.opacity < s.baseOpacity - 0.2) {
        s.twinkleDir *= -1;
      }
      
      const displayOpacity = Math.max(0, Math.min(1, s.opacity));

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${starColor}, ${displayOpacity})`;
      ctx.fill();
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  }, [isDarkMode]);

  useEffect(() => {
    initStars();
    animate();

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(initStars, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameRef.current);
      meteorTimeouts.current.forEach(t => clearTimeout(t));
      meteorTimeouts.current = [];
    };
  }, [initStars, animate]);


  // --- 2. METEOR / COMET LOGIC ---
  const triggerMeteor = (opts = {}) => {
    const id = Date.now() + Math.random();
    
    // Position
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    
    // Direction: Random angle 0 to 360
    const angle = opts.angle ?? Math.random() * 360;
    
    // Size / Tail Length
    const length = opts.length ?? (Math.random() * 150 + 100);
    const width = Math.max(2, Math.random() * 4);
    
    const duration = opts.duration ?? (Math.random() * 5000 + 1500);
    
    const title = opts.title ?? "Comet";
    const imgPath = opts.imgPath ?? null; 
    const path = opts.path ?? null;
    const temporal = opts.temporal ?? duration;

    const m = { 
      id, startX, startY, angle, length, width, duration, title, imgPath, path, temporal 
    };

    setMeteors(prev => [...prev, m]);

    const t = setTimeout(() => {
      setMeteors(prev => prev.filter(x => x.id !== id));
    }, duration + 200);
    meteorTimeouts.current.push(t);
  };

  // Global trigger
  useEffect(() => {
    window.triggerMeteor = triggerMeteor;
    return () => { delete window.triggerMeteor; };
  }, [triggerMeteor]);

  // Auto-Spawner: Generates random meteors periodically
  useEffect(() => {
    const scheduleNextMeteor = () => {
      const randomDelay = Math.random() * 2000 + 500; // Between 0.5s and 2.5s
      const timeoutId = setTimeout(() => {
        // FIX: We must return 'prev' in the setter to keep state valid
        setMeteors(prev => {
          // Only spawn if we have less than 5 on screen (performance cap)
          if (prev.length < 5) {
            triggerMeteor();
          }
          return prev; 
        });
        scheduleNextMeteor();
      }, randomDelay);
      
      meteorTimeouts.current.push(timeoutId);
    };

    scheduleNextMeteor();

    return () => {
      // Cleanup handled by main return, but we can stop logic here if needed
    };
  }, []);

  const meteorColor = isDarkMode ? "255,255,255" : "0,0,0";

  return (
    <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      <style>{`
        @keyframes cometShoot {
          0% {
            transform: translateX(0) scaleX(0.8);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            /* Move far enough to clear any screen size/direction */
            transform: translateX(200vw) scaleX(1);
            opacity: 0;
          }
        }
      `}</style>

      {/* CANVAS STARS */}
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
        }}
      />

      {/* DOM METEORS / COMETS */}
      {meteors.map((m) => (
        <div
          key={m.id}
          title={m.title}
          data-temporal={m.temporal}
          data-path={m.path}
          style={{
            position: "absolute",
            left: `${m.startX}%`,
            top: `${m.startY}%`,
            width: "0px", 
            height: "0px",
            // Container handles the rotation (Direction)
            transform: `rotate(${m.angle}deg)`,
            pointerEvents: "auto",
            overflow: "visible",
          }}
        >
          {/* Inner Element handles the movement (Speed) and the Visuals */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: `-${m.width / 2}px`, // Center vertically relative to the axis
              width: `${m.length}px`,
              height: `${m.width}px`,
              animation: `cometShoot ${m.duration}ms linear forwards`,
              mixBlendMode: "screen",
            }}
          >
            {m.imgPath ? (
              <img
                src={m.imgPath}
                alt={m.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  // Counter-rotate image so it stays upright while traveling
                  transform: `rotate(-${m.angle}deg)`, 
                  filter: "drop-shadow(0 0 8px rgba(255,255,255,0.8))",
                  borderRadius: "50%",
                }}
              />
            ) : (
              // The Tail Gradient
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 4,
                  // Gradient Tail: Transparent (rear) -> White/Black (head)
                  background: `linear-gradient(90deg, 
                    rgba(${meteorColor},0) 0%, 
                    rgba(${meteorColor},0.1) 40%, 
                    rgba(${meteorColor},1) 100%)`,
                  boxShadow: `0 0 8px rgba(${meteorColor},0.8)`,
                }}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StarBackground;