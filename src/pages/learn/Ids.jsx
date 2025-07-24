import GoBackButton from "../../components/GoBackButton";

export default function Firewall() {
  return (
    <div className="min-h-screen bg-terminal-bg text-white px-6 py-10">
      <h1 className="text-3xl font-bold text-neon-cyan mb-4">What is IDS?</h1>
      <p className="text-lg text-gray-300 mb-10">
        Ids is a security system (hardware or software) that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It acts as a barrier between a trusted internal network and untrusted external networks, such as the internet.
      </p>
      <GoBackButton></GoBackButton>
    </div>
  )
}