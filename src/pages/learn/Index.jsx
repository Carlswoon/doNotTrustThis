import { Link } from 'react-router-dom'

export default function LearnIndex() {
  const topics = [
    {
      title: 'What is Cybersecurity?',
      path: 'what-is-cybersecurity',
      icon: '🛡️',
    },
    {
      title: 'History of Cybersecurity',
      path: 'history-of-cybersecurity',
      icon: '📜',
    },
    {
      title: 'Inside the Mind of a Hacker',
      path: 'inside-the-mind-of-a-hacker',
      icon: '🧠',
    },
    {
      title: 'Become the Next Victim',
      path: 'become-a-victim',
      icon: '😵‍💫',
    },
  ]

  return (
    <div className="min-h-screen bg-terminal-bg text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-glitch-purple mb-4">Learn Cybersecurity</h1>
        <p className="text-neon-cyan text-lg mb-10">
          Explore fundamental concepts, real-world attacks, and the mindset of both hackers and victims.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {topics.map((topic, idx) => (
            <Link
              to={`/learn/${topic.path}`}
              key={idx}
              className="flex items-center gap-4 p-5 bg-[#1a1a2e] border border-glitch-purple rounded-xl hover:bg-glitch-purple/30 transition"
            >
              <span className="text-3xl">{topic.icon}</span>
              <span className="text-neon-cyan text-lg font-semibold">{topic.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
