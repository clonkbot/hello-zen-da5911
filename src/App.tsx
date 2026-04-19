import { useEffect, useState } from 'react';

function App() {
  const [mounted, setMounted] = useState(false);
  const [showWorld, setShowWorld] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setShowWorld(true), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-[100dvh] bg-[#f7f3ed] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle animated background gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 30% 20%, #e8d5c4 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, #d4c4b0 0%, transparent 50%)',
          animation: 'breathe 8s ease-in-out infinite',
        }}
      />

      {/* Floating accent character */}
      <div
        className="absolute text-[#c9a88c] text-6xl md:text-8xl font-serif select-none pointer-events-none"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          animation: mounted ? 'float 12s ease-in-out infinite' : 'none',
          top: '15%',
          right: '10%',
          opacity: mounted ? 0.4 : 0,
          transition: 'opacity 2s ease-out',
        }}
      >
        *
      </div>

      {/* Main content */}
      <main className="relative z-10 text-center px-6">
        {/* Hello */}
        <h1
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight text-[#2a2a28]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            letterSpacing: '-0.02em',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          Hello
        </h1>

        {/* World */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#6b6259] mt-2 md:mt-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontStyle: 'italic',
            letterSpacing: '0.1em',
            opacity: showWorld ? 1 : 0,
            transform: showWorld ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          World
        </h2>

        {/* Decorative line */}
        <div
          className="mx-auto mt-8 md:mt-12 h-px bg-[#c9a88c]"
          style={{
            width: showWorld ? '120px' : '0px',
            transition: 'width 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
          }}
        />

        {/* Subtle tagline */}
        <p
          className="mt-6 md:mt-8 text-xs md:text-sm tracking-[0.3em] uppercase text-[#9a8f82]"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            opacity: showWorld ? 0.7 : 0,
            transition: 'opacity 1s ease-out 1s',
          }}
        >
          A simple beginning
        </p>
      </main>

      {/* Second floating element */}
      <div
        className="absolute text-[#d4c4b0] text-4xl md:text-6xl select-none pointer-events-none"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          animation: mounted ? 'floatAlt 15s ease-in-out infinite' : 'none',
          bottom: '20%',
          left: '8%',
          opacity: mounted ? 0.25 : 0,
          transition: 'opacity 3s ease-out 0.5s',
        }}
      >
        ~
      </div>

      {/* Footer */}
      <footer
        className="absolute bottom-4 md:bottom-6 left-0 right-0 text-center"
        style={{
          opacity: showWorld ? 0.5 : 0,
          transition: 'opacity 1s ease-out 1.5s',
        }}
      >
        <p
          className="text-[10px] md:text-xs tracking-wide text-[#a09689]"
          style={{
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Requested by @web-user · Built by @clonkbot
        </p>
      </footer>

      {/* Keyframe animations */}
      <style>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.4; }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(-15px, 20px) rotate(5deg);
          }
          50% {
            transform: translate(10px, -10px) rotate(-3deg);
          }
          75% {
            transform: translate(-5px, 15px) rotate(2deg);
          }
        }

        @keyframes floatAlt {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(20px, -15px) rotate(-5deg);
          }
          66% {
            transform: translate(-10px, 10px) rotate(3deg);
          }
        }
      `}</style>
    </div>
  );
}

export default App;
