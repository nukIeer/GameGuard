import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { fetchGames } from '../api';
import { Game } from '../types';

export default function Favorites() {
  const [favorites, setFavorites] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem('favorites') || '[]');
    fetchGames().then(data => {
      setFavorites(data.filter(g => savedIds.includes(g.id)));
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-text-secondary">Yükleniyor...</div>;
  }

  return (
    <div className="p-4 pb-10">
      <h1 className="text-2xl font-black text-text-primary mb-6">Favorilerim</h1>
      {favorites.length === 0 ? (
        <div className="text-center text-text-faint py-10">Henüz favori oyun eklemediniz.</div>
      ) : (
        <div className="flex flex-col gap-1">
          {favorites.map((game) => (
            <Link 
              key={game.id} 
              to={`/game/${game.id}`}
              className="flex items-center gap-4 py-3 border-b border-border-subtle group hover:bg-bg-surface/50 rounded-xl px-2 -mx-2 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-bg-elevated shrink-0 overflow-hidden relative shadow-sm border border-border-subtle">
                {game.media?.iconUrl ? (
                  <img src={game.media.iconUrl} alt={game.title} className="w-full h-full object-cover" loading="lazy" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-bg-elevated to-bg-surface"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-text-primary truncate">{game.title}</h3>
                <div className="flex items-center text-xs text-text-secondary font-medium mt-1">
                  <Star className="w-3.5 h-3.5 text-accent-green fill-accent-green mr-1" />
                  <span className="text-text-primary font-bold mr-2">{game.details?.rating || '0.0'}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
