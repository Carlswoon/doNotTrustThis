export default function InspectCTF() {
  return (
    <div className="min-h-screen bg-terminal-bg text-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold text-neon-cyan mb-4">🔍 Totally Normal Page</h1>
      <p className="text-glitch-pink max-w-xl text-lg">
        There is absolutely nothing suspicious here.
      </p>

      {/* 🕵️ Hidden HTML comment with flag */}
      <div dangerouslySetInnerHTML={{ __html: `<!-- flag{curiosity_rewards_you} -->` }} />

      {/* Red herrings (optional) */}
      <div className="mt-12 text-sm text-gray-500">
        <p>System status: All clear ✅</p>
        <p>Trust level: 100%</p>
        <p>Flags detected: 0 😇</p>
      </div>
    </div>
  );
}
