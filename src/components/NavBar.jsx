import { Link } from 'react-router-dom';
import useFlagTracker from '../hooks/useFlagTracker';

export default function NavBar() {
  const { count, total } = useFlagTracker();

  return (
    <nav className="flex flex-wrap items-center justify-between px-4 md:px-6 py-4 bg-terminal-bg shadow-md border-b border-glitch-purple">
      <div className="flex items-center gap-3">
        <Link to="/">
          <img src="/logo-icon.png" alt="Logo" className="h-10 w-10 object-contain" />
        </Link>
      </div>
      <div className="flex gap-4 md:gap-6 text-base md:text-lg font-semibold text-neon-cyan mt-4 md:mt-0">
        <Link to="/learn" className="hover:text-glitch-pink transition-colors duration-200">Learn</Link>
        <Link to="/hacks" className="hover:text-glitch-pink transition-colors duration-200">Hacks</Link>
        <span>{count}/{total} flags</span>
      </div>
    </nav>
  );
}
