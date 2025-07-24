import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HiddenFlag() {
  const navigate = useNavigate();

  useEffect(() => {
    const allowed = sessionStorage.getItem("xss");
    if (allowed !== "true") {
      navigate("/404");
    }
  });

  return (
    <div className="min-h-screen bg-terminal-bg flex flex-col items-center justify-center px-4 py-12 space-y-8">
      {/* 🎥 Hacker wizard video */}
      <video
        src="/flag.mp4" // update to your actual video file name
        autoPlay
        loop
        muted
        className="w-full max-w-xl rounded-2xl shadow-[0_0_30px_var(--color-glitch-pink)]"
      />

      {/* 🎯 Flag text */}
      <h1 className="text-3xl text-glitch-pink font-bold text-center">
        🎉 You found the flag! <br />
        <code className="block mt-2 text-neon-cyan text-xl">flag&#123;trust_no_input&#125;</code>
      </h1>
    </div>
  );
}
