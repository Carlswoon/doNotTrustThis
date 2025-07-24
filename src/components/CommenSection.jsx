import { useEffect, useState } from "react";

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  const [commentCount, setCommentCount] = useState(0);

  // <img src="x" onerror="sessionStorage.setItem('xss','true'); window.location='/hidden-flag'" />
  const handleSubmit = (e) => {
  e.preventDefault();

  setComments((prev) => [...prev, input]);
  setInput("");

  const newCount = commentCount + 1;
  setCommentCount(newCount);

  // Don't annoy them if they've already won
  const xssPayload = `<img src="x" onerror="sessionStorage.setItem('xss','true'); window.location='/hidden-flag'" />`;

  if (input.trim() === xssPayload) {
    setComments((prev) => [...prev, input]);
    setInput("");
    setCommentCount((prev) => prev + 1);
    return; // Don't trigger alerts
  }
  // Hints -> fibonacci sequence
  if (newCount === 1) {
    alert("Nice comment you've got there. . . WAIT. ARE YOU TRYING TO BREAK THIS SITE?! I'd like to see you try 😈");
  }
  if (newCount === 2) {
    alert("Still nothing? Huh. You're funny");
  }
  if (newCount === 3) {
    alert("mhm you are commenting quite a bit. Tryna do a soliloquy?");
  }
  if (newCount === 5) {
    alert("MUAHAHA the hidden route /hidden-flag will never be exposed - oh oops...");
  }
  if (newCount === 8) {
    alert("Ok now I'm starting to feel sorry for you... While you are here, ever heard of <img onerror>? Asking for a friend. >8P");
  }
  if (newCount === 13) {
    alert("<img src=“x“ onerror=“sessionStorage.setItem('xss','true'); window.location='/hidden-flag'“ />");
  }
  if (newCount > 13) {
    if (newCount === 21) {
      alert("okay buddy. chill. ur not aura farming by spamming alerts. just take the payload and leave me alone PLEASE TWT");
    } else {
      alert("THAT WAS THE ANSWER EARLIER DUMMY! HERE IT IS IF YOU FORGOT.<img src=“x“ onerror=“sessionStorage.setItem('xss','true'); window.location='/hidden-flag'“/>");
    }
  }
};


  return (
    <div className="mt-10 space-y-4 text-gray-200">
      <h3 className="text-xl font-bold text-glitch-purple">Leave a Comment</h3>
      <form onSubmit={handleSubmit} className="space-y-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={4}
          className="w-full px-4 py-2 bg-terminal-bg border border-glitch-pink rounded-lg text-white"
          placeholder="Write your thoughts or something else? The choice is yours :)"
        />
        <button
          type="submit"
          className="bg-neon-cyan text-black font-semibold px-4 py-2 rounded shadow hover:scale-105 transition"
        >
          Post
        </button>
      </form>

      <div className="space-y-2 mt-4">
        {comments.map((c, idx) => (
          <div
            key={idx}
            className="border border-glitch-purple p-2 rounded"
            dangerouslySetInnerHTML={{ __html: c }}
          />
        ))}
      </div>
    </div>
  );
}
