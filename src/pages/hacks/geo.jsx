import { useState } from "react";

export default function GeoChallenge() {
  const [guess, setGuess] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    const normalized = guess.trim().toLowerCase();
    if (["iloilo", "iloilo city", "garin farm"].includes(normalized)) {
      setFeedback("✅ Correct! Here's your flag:");
      setSubmitted(true);
    } else {
      setFeedback("❌ Incorrect. Try again!");
    }
  };

  return (
    <div className="min-h-screen bg-terminal-bg text-white px-6 py-12 flex flex-col items-center space-y-8">
      <h1 className="text-3xl font-bold text-neon-cyan text-center">Where was this photo taken?</h1>

      <img
        src="https://vismin.ph/wp-content/uploads/2020/03/Garmin-Farm-Iloilo-11.jpg"
        alt="Geo CTF Image"
        className="w-full max-w-lg rounded-lg shadow-[0_0_30px_var(--color-glitch-pink)]"
      />

      <p className="text-center text-glitch-pink">
        Type the name of the location or city you think this was taken in.
      </p>

      {!submitted && (
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <input
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="e.g. America"
            className="px-4 py-2 rounded border border-glitch-purple bg-terminal-bg text-white w-64"
          />
          <button
            onClick={handleSubmit}
            className="bg-neon-cyan text-black font-bold px-4 py-2 rounded hover:scale-105 transition"
          >
            Submit Guess
          </button>
        </div>
      )}

      {feedback && <p className="text-sm text-glitch-pink mt-2">{feedback}</p>}

      {submitted && (
        <div className="mt-4 text-neon-cyan text-lg font-semibold text-center">
          🎉 Flag unlocked!  
          <br />
          <code className="text-glitch-pink mt-2 block">flag&#123;open_your_eyes&#125;</code>
          <p className="text-sm text-gray-400 mt-2">
            Copy this and submit it on the <a href="/hacks" className="underline text-glitch-purple hover:text-neon-cyan">Hacks page</a>.
          </p>
        </div>
      )}
    </div>
  );
}
