import { Link } from 'react-router-dom';
import { Gamepad2 } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <Gamepad2 className="w-24 h-24 text-accent-green mb-6" />
      <h1 className="text-5xl font-black text-text-primary mb-2">404</h1>
      <p className="text-text-secondary mb-8 font-medium">Aradığınız sayfa bulunamadı veya taşınmış olabilir.</p>
      <Link to="/" className="bg-accent-green text-bg-base font-black px-8 py-3 rounded-full hover:bg-accent-green-pressed transition-colors">
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
