import { useEffect } from "react";

export default function Truth() {
  useEffect(() => {
    document.body.classList.add("flicker-once");
    setTimeout(() => {
      document.body.classList.remove("flicker-once");
    }, 600);
  }, []);

  return (
    <div className="min-h-screen bg-terminal-bg text-white px-6 py-16 space-y-6">
      <h1 className="text-4xl md:text-6xl font-bold text-glitch-purple text-center animate-pulse">
        This is the truth.
      </h1>

      <p className="mt-8 text-lg md:text-2xl text-neon-cyan text-center max-w-3xl mx-auto leading-relaxed">
        Everything you saw... every flag you found... every page you trusted — was a lie.
      </p>

      <p className="mt-4 text-glitch-pink text-center max-w-3xl mx-auto text-base md:text-lg">
        You followed instructions. You viewed source code. You fell for fake UI. You even ran code you didn’t understand.
      </p>

      <p className="mt-6 text-center text-neon-cyan text-xl font-semibold">
        The truth is simple:
      </p>

      <h2 className="mt-4 text-3xl font-bold text-glitch-purple text-center">
        <div className="relative inline-block text-3xl font-bold text-glitch-purple">
          <span className="relative z-10">Never trust the interface.</span>
          <span className="absolute left-0 top-0 w-full h-full text-glitch-pink opacity-30 animate-glitch z-0 select-none pointer-events-none">
            Never trust the interface.
          </span>
       </div>
      </h2>
    </div>
  );
}
