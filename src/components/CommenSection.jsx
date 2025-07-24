import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // XSS trigger: if the comment includes script redirect, navigate
    if (input.includes("navigateToFlag")) {
      navigate("/hidden-flag");
    }

    setComments((prev) => [...prev, input]);
    setInput("");
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
