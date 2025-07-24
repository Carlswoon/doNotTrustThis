import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HiddenFlag() {
  const navigate = useNavigate();

  useEffect(() => {
    const allowed = sessionStorage.getItem("xss");
    if (allowed !== "true") {
      navigate("/404"); // or show a fake “access denied” page
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold text-glitch-pink">🎉 You found the flag!</h1>
    </div>
  );
}
