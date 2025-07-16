import logo from '../assets/logo-icon.png';
import banner from '../assets/banner home page.png';

export default function HomePage() {
  return (
    <div>
      <img src={banner} alt="Home Banner" className="w-full" />
      <img src={logo} alt="Logo" className="w-16 h-16" />
    </div>
  );
}
