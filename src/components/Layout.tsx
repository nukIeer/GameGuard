import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { BottomNav } from './BottomNav';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans pb-16 sm:pb-0 overflow-x-hidden relative bg-[#0a0a0a]">
      {/* Background ambient blur effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-50 flex items-center justify-center">
        <div className="absolute top-[-10%] left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-accent-green/20 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-blue-500/15 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] left-[20%] w-[200px] h-[200px] bg-purple-500/10 rounded-full blur-[80px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
      </div>

      <Header />
      <main className="flex-1 max-w-lg mx-auto w-full border-x border-white/[0.03] bg-bg-base/40 backdrop-blur-3xl relative z-10 min-h-screen shadow-[0_0_50px_rgba(0,0,0,0.3)]">
        <Outlet />
      </main>
      <Footer />
      <BottomNav />
      <ScrollToTop />
    </div>
  );
}
