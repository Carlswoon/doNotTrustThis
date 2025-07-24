import GoBackButton from "../../components/goBackButton";

export default function MFA() {
  return (
    <div className="min-h-screen bg-terminal-bg text-white px-6 py-10">
      <h1 className="text-3xl font-bold text-neon-cyan mb-4">What is MFA?</h1>
      <p className="text-lg text-gray-300 mb-10">
        Multifactored authentication (MFA) is a security measure that requires users to provide two or more verification factors to gain access to a resource, such as an application or online account. This adds an extra layer of security beyond just a username and password, making it harder for unauthorized users to gain access.
      </p>
      <GoBackButton></GoBackButton>
    </div>
  )
}