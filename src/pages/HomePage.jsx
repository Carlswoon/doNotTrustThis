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
          This website is a safely hackable Capture the Flag (CTF) playground where you can learn
          about web vulnerabilities, exploit real challenges, and test your attacker mindset.
        </p>
      </section>

      {/* Content Rows */}
      <section className="px-4 sm:px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 bg-terminal-bg">
        <div className="space-y-4 text-white">
          <div className="p-4 bg-[#1a1a2e] rounded-xl border border-glitch-purple">
            <h3 className="text-lg sm:text-xl font-bold text-neon-cyan">
              Learn the Cybersecurity Mindset
            </h3>
            <p className="text-sm mt-1 text-gray-300">
              Understand how attackers think. Learn the techniques, tools, and common mistakes that make websites vulnerable. You know what they say, the best defense has the best offense.
            </p>
          </div>
          <div className="p-4 bg-[#1a1a2e] rounded-xl border border-glitch-purple">
            <h3 className="text-lg sm:text-xl font-bold text-neon-cyan">
              Explore Real Hacking Techniques
            </h3>
            <p className="text-sm mt-1 text-gray-300">
              Learn the theory side of hacking. Understand common web exploits like XSS, SQLi, CSRF, and more!
            </p>
          </div>
          <div className="p-4 bg-[#1a1a2e] rounded-xl border border-glitch-purple">
            <h3 className="text-lg sm:text-xl font-bold text-neon-cyan">
              Gain Practical Experience
            </h3>
            <p className="text-sm mt-1 text-gray-300">
              This site is your safe playground for breaking things. Exploit real bugs, bypass logic, and mess with the site. No cops will be knocking at your door. maybe...
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
