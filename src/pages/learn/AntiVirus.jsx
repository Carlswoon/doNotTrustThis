import GoBackButton from "../../components/GoBackButton"

export default function AntiVirus() {
  return (
    <div className="min-h-screen bg-terminal-bg text-white px-6 py-10">
      <h1 className="text-3xl font-bold text-neon-cyan mb-4">What is Antivirus?</h1>
      <p className="text-lg text-gray-300 mb-10">
        AntiVirus is a software designed to detect, prevent, and remove malware, including viruses, worms, and trojan horses. It scans files and programs on your computer for known threats and can also monitor system behavior to identify suspicious activity.
      </p>
      <GoBackButton />
    </div>
  )
}