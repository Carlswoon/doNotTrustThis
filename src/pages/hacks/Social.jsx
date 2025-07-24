import { useState } from "react";

const scenarios = [
  {
    question: `You receive a call from “your bank.” The caller knows your full name and the last 4 digits of your card. They claim there’s suspicious activity and ask you to confirm your full card number and CVV.`,
    options: {
      a: "Give them your card details — they already know some of it.",
      b: "Hang up and call your bank directly using the number on their official website.",
      c: "Ask them to email you instead.",
      d: "Threaten to sue them and post it on Instagram.",
    },
    correct: "b",
  },
  {
    question: `You get an email saying you've won a new iPhone. To claim it, you're asked to log in to your Apple ID on a site that looks almost identical to Apple’s.`,
    options: {
      a: "Log in immediately. It looks legit.",
      b: "Reply and ask for confirmation.",
      c: "Ignore the email and report it as phishing.",
      d: "Click the link, but change your password afterward.",
    },
    correct: "c",
  },
  {
    question: `Your coworker messages you on Slack urgently asking for a password to access a shared file. They say it's an emergency and your manager is unavailable.`,
    options: {
      a: "Send the password right away.",
      b: "Call the coworker directly to verify.",
      c: "Ignore them.",
      d: "Send a different password just in case.",
    },
    correct: "b",
  },
  {
    question: `You receive a USB drive from a "company" at a conference with “FREE SOFTWARE” written on it. What do you do?`,
    options: {
      a: "Plug it in right away and run the software.",
      b: "Scan it with antivirus first.",
      c: "Give it to IT or toss it out.",
      d: "Use it on your friend's laptop first.",
    },
    correct: "c",
  },
];

export default function SocialChallenge() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [showFlag, setShowFlag] = useState(false);

  const current = scenarios[index];

  const handleSubmit = () => {
    if (selected === current.correct) {
      setFeedback("✅ Correct! You didn’t fall for it.");
      setShowFlag(true);
    } else {
      if (index < scenarios.length - 1) {
        setIndex((prev) => prev + 1);
        setSelected(null);
        setFeedback("❌ That was a trap. Here’s another one...");
      } else {
        setFeedback("❌ You fell for all of them. Restart the page to try again.");
        setSubmitted(true);
      }
    }
  };

  return (
    <div className="min-h-screen bg-terminal-bg text-white px-6 py-12 space-y-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-neon-cyan text-center">🧠 Social Engineering Simulation</h1>

      {!showFlag && !submitted && (
        <div className="max-w-2xl space-y-4">
          <p className="text-gray-300 text-lg">{current.question}</p>

          <div className="space-y-2">
            {Object.entries(current.options).map(([key, value]) => (
              <label key={key} className="block">
                <input
                  type="radio"
                  value={key}
                  checked={selected === key}
                  onChange={() => setSelected(key)}
                  className="mr-2"
                />
                {value}
              </label>
            ))}
          </div>

          <button
            onClick={handleSubmit}
            disabled={!selected}
            className="mt-4 bg-neon-cyan text-black font-bold px-5 py-2 rounded hover:scale-105 transition"
          >
            Submit Answer
          </button>

          {feedback && <p className="text-glitch-pink mt-4 text-sm">{feedback}</p>}
        </div>
      )}

      {showFlag && (
        <div className="mt-6 text-center text-neon-cyan text-lg font-semibold">
          🧠 Well done — you passed the test.  
          <br />
          Here's your flag:
          <br />
          <code className="text-glitch-pink block mt-2">flag&#123;dont_get_phished&#125;</code>
          <p className="text-sm text-gray-400 mt-2">
            Copy this and submit it on the <a href="/hacks" className="underline text-glitch-purple hover:text-neon-cyan">Hacks page</a>.
          </p>
        </div>
      )}

      {submitted && !showFlag && (
        <p className="text-glitch-pink text-center font-bold text-lg">
          🫢 All scenarios failed. You may want to brush up on cyber hygiene and try again.
        </p>
      )}
    </div>
  );
}
