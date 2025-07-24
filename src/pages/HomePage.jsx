import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-terminal-bg text-white">

      {/* Banner */}
      <section className="relative">
        <img
          src="/banner-home-page.png"
          alt="Banner"
          className="w-full min-h-[300px] md:min-h-[500px] lg:min-h-[700px] object-cover"
        />
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 text-center bg-terminal-bg">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-glitch-purple">
          About this Website
        </h2>
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-neon-cyan">
          Welcome to a website that lies to you on purpose. Maybe? Who knows? This isn't your typical cybersecurity guide. It's an interactive hackable Capture The Flag (CTF) that will help you think like an attacker.
        </p>
      </section>

      {/* Content Rows */}
      <section className="px-4 sm:px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 bg-terminal-bg">
        <div className="space-y-4 text-white">
          <div className="p-4 bg-[#1a1a2e] rounded-xl border border-glitch-purple">
            <h3 className="text-lg sm:text-xl font-bold text-neon-cyan">
              Think Like an Attacker
            </h3>
            <p className="text-sm mt-1 text-gray-300">
              From social engineering to web exploits, discover how hackers manipulate trust, break logic, and exploit vulnerabilities. Develop an attacker mindset because understanding threats is the first step to defending against them.
            </p>
          </div>
          <div className="p-4 bg-[#1a1a2e] rounded-xl border border-glitch-purple">
            <h3 className="text-lg sm:text-xl font-bold text-neon-cyan">
              Break Things. On Purpose.
            </h3>
            <p className="text-sm mt-1 text-gray-300">
              Whether it’s XSS or bypassing hidden logic, this site lets you get hands-on experience with real (but safe) vulnerabilities. Test your skills — no permission slips required. Just don't doxx me please.
            </p>
          </div>
          <div className="p-4 bg-[#1a1a2e] rounded-xl border border-glitch-purple">
            <h3 className="text-lg sm:text-xl font-bold text-neon-cyan">
              Challenge What You See
            </h3>
            <p className="text-sm mt-1 text-gray-300">
             Some pages lie. Some flags are red herrings. Can you tell what’s real? Not everything is as it seems, and sometimes the only way forward is to <span className="text-glitch-pink font-semibold">break the rules.</span>
            </p>
          </div>
          <Link to="/learn" className="mt-6 inline-block w-full text-center px-6 py-3 text-black bg-neon-cyan border border-transparent rounded-lg shadow shadow-neon-cyan transition-all duration-200 hover:border-white hover:shadow-[0_0_20px_var(--tw-shadow-color)] hover:scale-105">
            Learn
          </Link>
        </div>
        <div className="h-[300px] sm:h-[400px] md:h-[450px] flex items-center justify-center">
          <img
            src="/hacker.png"
            alt="Hacking illustration"
            className="h-full w-full object-contain rounded-xl shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}
