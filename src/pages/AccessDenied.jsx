export default function AccessDenied() {
  return (
    <div className="min-h-screen bg-terminal-bg flex items-center justify-center px-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-glitch-pink animate-pulse">
          🛑 Access Denied
        </h1>

        <p className="text-neon-cyan text-lg md:text-xl">
          You were not supposed to find this page...
        </p>

        <a
          href="/"
          className="inline-block mt-4 px-6 py-2 bg-neon-cyan text-black font-bold rounded-lg shadow shadow-neon-cyan hover:scale-105 transition-all"
        >
          Return to Safety
        </a>
      </div>
    </div>
  );
}
