import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const GameDetail = lazy(() => import('./pages/GameDetail'));
const Favorites = lazy(() => import('./pages/Favorites'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ShieldApp = lazy(() => import('./pages/ShieldApp'));
const Search = lazy(() => import('./pages/Search'));
const Privacy = lazy(() => import('./pages/legal/Privacy'));
const Terms = lazy(() => import('./pages/legal/Terms'));
const Kvkk = lazy(() => import('./pages/legal/Kvkk'));
const Dmca = lazy(() => import('./pages/legal/Dmca'));
const About = lazy(() => import('./pages/legal/About'));

export default function App() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-text-primary">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="game/:slug" element={<GameDetail />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="search" element={<Search />} />
          <Route path="shield" element={<ShieldApp />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="kvkk" element={<Kvkk />} />
          <Route path="dmca" element={<Dmca />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
