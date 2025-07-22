export default function GoBackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="group inline-flex items-center px-5 py-2.5 rounded-lg border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-terminal-bg transition duration-300 ease-in-out shadow-[0_0_10px_#00FFF7] hover:shadow-[0_0_20px_#00FFF7]"
    >
      <span className="mr-2">←</span>
      <span className="font-semibold tracking-wide">Go Back</span>
    </button>
  );
}
