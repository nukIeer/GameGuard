import { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Search, Star } from 'lucide-react';
import { fetchGames } from '../api';
import { Game } from '../types';

import { AdPlaceholder } from '../components/AdPlaceholder';

export default function Home() {
  const { t } = useTranslation();
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'top' | 'new' | 'small'>('all');

  useEffect(() => {
    fetchGames().then(data => {
      setGames(data);
      setLoading(false);
    });
  }, []);

  const filteredGames = useMemo(() => {
    let result = games;
    
    // search
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(g => 
        g.title.toLowerCase().includes(q) || 
        (g.description && g.description.toLowerCase().includes(q))
      );
    }
    
    // sorting (mock logic for the filters)
    if (filter === 'top') {
      result = [...result].sort((a, b) => Number(b.details?.rating || 0) - Number(a.details?.rating || 0));
    } else if (filter === 'small') {
      result = [...result].sort((a, b) => {
        const sizeA = parseInt(a.details?.size || '999');
        const sizeB = parseInt(b.details?.size || '999');
        return sizeA - sizeB;
      });
    }

    return result;
  }, [games, search, filter]);

  if (loading) {
    return (
      <div className="pb-10">
        <div className="p-4 flex flex-col gap-3">
          {[1, 2, 3, 4, 5, 6, 7].map(i => (
            <div key={i} className="animate-pulse bg-bg-surface border border-border-subtle rounded-xl p-3 flex gap-4 items-center">
              <div className="w-14 h-14 bg-bg-elevated rounded-2xl shrink-0"></div>
              <div className="flex-1 py-1">
                <div className="h-4 bg-bg-elevated rounded-md w-3/4 mb-2"></div>
                <div className="h-3 bg-bg-elevated rounded-md w-1/3"></div>
              </div>
              <div className="w-16 h-8 bg-bg-elevated rounded-full shrink-0"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const featured = games.length > 0 ? games[0] : null;

  return (
    <div className="pb-10">
      {/* Search Bar */}
      <div className="p-4 bg-bg-base/40 backdrop-blur-md sticky top-[64px] z-40 border-b border-white/[0.05]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-faint" />
          <input 
            type="text" 
            placeholder={t('header.searchPlaceholder')} 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-bg-surface/50 border border-white/[0.1] rounded-full py-2.5 pl-10 pr-4 text-text-primary focus:outline-none focus:border-accent-green/50 focus:bg-bg-surface/80 transition-all placeholder:text-text-faint shadow-inner"
          />
        </div>
      </div>

      {/* Featured Hero */}
      {!search && featured && filter === 'all' && (
        <>
          <div className="p-4">
            <Link to={`/game/${featured.id}`} className="block relative rounded-[20px] overflow-hidden group">
              <div className="aspect-[2/1] sm:aspect-[21/9] w-full bg-bg-elevated relative">
                {featured.media?.bannerUrl ? (
                  <img 
                    src={featured.media.bannerUrl} 
                    alt={featured.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-bg-elevated to-bg-surface"></div>
                )}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg-base/90 via-bg-base/40 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <div>
                  <h2 className="text-3xl font-black text-white mb-1 drop-shadow-md">{featured.title}</h2>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center text-accent-green font-bold text-sm bg-bg-base/50 px-2 py-0.5 rounded-full backdrop-blur-sm">
                      <Star className="w-3.5 h-3.5 mr-1 fill-accent-green" />
                      {featured.details?.rating || '0.0'}
                    </div>
                    <span className="text-text-silver text-xs drop-shadow-md font-semibold">
                      {featured.details?.size}
                    </span>
                  </div>
                </div>
                
                <button className="bg-accent-green text-bg-base font-black px-5 py-2.5 rounded-full shadow-lg hover:bg-accent-green-pressed transition-colors">
                  {t('home.download')}
                </button>
              </div>
            </Link>
          </div>
          <div className="px-4"><AdPlaceholder /></div>
        </>
      )}

      {/* Filter Pills */}
      <div className="flex overflow-x-auto gap-2 px-4 py-4 scrollbar-hide">
        {['all', 'top', 'new', 'small'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as any)}
            className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-bold transition-colors ${
              filter === f 
                ? 'bg-text-primary text-bg-base' 
                : 'bg-bg-elevated text-text-secondary hover:text-text-primary'
            }`}
          >
            {t(`home.filters.${f}`)}
          </button>
        ))}
      </div>

      {/* Ranked List */}
      <div className="px-4 flex flex-col gap-1">
        {filteredGames.length === 0 ? (
          <div className="text-center text-text-faint py-10">No games found</div>
        ) : (
          filteredGames.map((game, index) => (
            <Link 
              key={game.id} 
              to={`/game/${game.id}`}
              className="flex items-center gap-4 py-3 border-b border-white/[0.03] group hover:bg-white/[0.03] hover:shadow-[0_0_20px_rgba(20,200,80,0.05)] rounded-2xl px-3 -mx-3 transition-all duration-300"
            >
              {/* Rank */}
              <div className={`w-6 text-center font-black ${index < 3 ? 'text-accent-green' : 'text-text-faint'}`}>
                {index + 1}
              </div>
              
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-bg-elevated shrink-0 overflow-hidden relative shadow-sm border border-border-subtle">
                {game.media?.iconUrl ? (
                  <img src={game.media.iconUrl} alt={game.title} className="w-full h-full object-cover" loading="lazy" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-bg-elevated to-bg-surface"></div>
                )}
              </div>
              
              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="font-bold text-text-primary truncate">{game.title}</h3>
                  {index < 3 && filter === 'top' && (
                    <span className="text-[9px] font-black border border-accent-green text-accent-green px-1 rounded uppercase tracking-wider">
                      {t('home.topBadge')}
                    </span>
                  )}
                </div>
                <div className="flex items-center text-xs text-text-secondary font-medium">
                  <Star className="w-3.5 h-3.5 text-accent-green fill-accent-green mr-1" />
                  <span className="text-text-primary font-bold mr-2">{game.details?.rating || '0.0'}</span>
                  <span>{game.details?.size}</span>
                </div>
              </div>
              
              {/* Download Button */}
              <button className="bg-bg-elevated border border-border-strong text-accent-green group-hover:bg-accent-green group-hover:text-bg-base font-bold text-xs px-4 py-1.5 rounded-full transition-colors shrink-0">
                {t('home.download')}
              </button>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
