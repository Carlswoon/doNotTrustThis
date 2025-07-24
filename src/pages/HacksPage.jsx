import { useState } from 'react';
import useFlagTracker from '../hooks/useFlagTracker';
import confetti from 'canvas-confetti'
import { useEffect } from 'react';

const flagMap = {
  'flag{dont_get_phished}': 'social',
  'flag{curiosity_rewards_you}': 'inspect',
  'flag{open_your_eyes}': 'geo',
  'flag{trust_no_input}': 'xss',
};

export default function HacksPage() {
  const { foundFlags, submitFlag, hasFlag, count, total, resetFlags } = useFlagTracker();
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    const flagId = flagMap[input.trim()];
    if (!flagId) {
      setFeedback('❌ Invalid flag.');
      return;
    }
    if (hasFlag(flagId)) {
      setFeedback('⚠️ You already submitted this flag.');
      return;
    }
    submitFlag(flagId);
    setFeedback('✅ Flag accepted!');
    setInput('');
  };

  useEffect(() => {
    if (count === total) {
      confetti({
        particleCount: 450,
        spread: 700,
        angle: 90,
        origin: { y: 0.2 },
        startVelocity: 70,
        scalar: 1.5,
        ticks: 200,
      });
    }
  }, [count, total]);

  return (
    <div className="min-h-screen bg-terminal-bg text-white px-6 py-12 space-y-10">
      <h1 className="text-4xl font-bold text-neon-cyan text-center">🧠 Hack Challenges</h1>

      {/* Challenges Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            title: '🕵️ Social Engineering Scenario',
            desc: 'Decide what to do when a suspicious caller wants your bank info.',
            route: '/hacks/social'
          },
          {
            title: '🔍 Totally Normal Page',
            desc: 'No secrets here... definitely no flags hidden in the HTML.',
            route: '/hacks/inspect'
          },
          {
            title: '🌍 GeoGuessr Flag Hunt',
            desc: 'Can you figure out where this image was taken?',
            route: '/hacks/geo'
          }
        ].map((c, i) => (
          <a key={i} href={c.route} className="block border border-glitch-pink p-6 rounded-xl hover:scale-105 transition shadow-[0_0_20px_var(--color-glitch-pink)]">
            <h2 className="text-xl font-bold text-glitch-purple mb-2">{c.title}</h2>
            <p className="text-gray-300">{c.desc}</p>
          </a>
        ))}
      </div>

      {/* Single Flag Submission Field */}
      <div className="max-w-xl mx-auto mt-10 text-center space-y-4">
        <h3 className="text-xl font-bold text-neon-cyan">Submit your flags here 👇</h3>
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your flag here..."
            className="w-full sm:w-auto px-4 py-2 rounded border border-glitch-purple bg-terminal-bg text-white"
          />
          <button
            onClick={handleSubmit}
            className="bg-neon-cyan text-black font-bold px-4 py-2 rounded hover:scale-105 transition shadow shadow-neon-cyan transition-all duration-200 hover:border-white hover:shadow-[0_0_20px_var(--tw-shadow-color)] hover:scale-105"
          >
            Submit
          </button>
        </div>
        {feedback && <p className="text-glitch-pink text-sm">{feedback}</p>}
      </div>
      <p className="text-center text-neon-cyan text-2xl">Flags Found: {count} / {total}</p>
        
      <div className="text-center mt-6">
        <button
          onClick={() => {
            if (window.confirm("oh... r u sure u wanna reset your progress? MUAHAHAAA")) {
              resetFlags();
            }
          }}
          className="mt-6 inline-block text-center px-6 py-3 text-black bg-neon-cyan border border-transparent rounded-lg shadow shadow-neon-cyan transition-all duration-200 hover:border-white hover:shadow-[0_0_20px_var(--tw-shadow-color)] hover:scale-105"
        >
          Reset All Flags
        </button>
      </div>


      {count === total && (
        <div className="text-center mt-10">
          <p className="text-neon-cyan text-lg">🎉 All flags submitted! You may now proceed to the final page:</p>
          <a
            href="/the-truth"
            className="mt-2 inline-block px-6 py-2 bg-glitch-pink text-black font-bold rounded hover:scale-105 transition"
          >
            The truth awaits...
          </a>
        </div>
      )}

    </div>
  );
}
