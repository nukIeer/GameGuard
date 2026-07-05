import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search as SearchIcon, X } from 'lucide-react';
import { fetchGames } from '../api';
import { Game } from '../types';
import { useTranslation } from 'react-i18next';

export default function Search() {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGames().then(data => {
      setGames(data);
      setLoading(false);
    });
  }, []);

  const filteredGames = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    return games.filter(
      (game) =>
        game.title.toLowerCase().includes(lowerQuery) ||
        game.package.toLowerCase().includes(lowerQuery) ||
        (game.description && game.description.toLowerCase().includes(lowerQuery))
    );
  }, [query, games]);

  return (
    <div className="max-w-lg mx-auto p-4 animate-fade-in pb-24">
      <div className="sticky top-[72px] z-10 bg-bg-base/90 backdrop-blur-md pb-4 pt-2">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-text-muted" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-10 py-3 border border-border-subtle rounded-xl leading-5 bg-bg-surface text-text-primary placeholder-text-muted focus:outline-none focus:ring-1 focus:ring-accent-green focus:border-accent-green sm:text-sm transition-colors"
            placeholder={t('search.placeholder', 'Oyun ara...')}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-text-muted hover:text-text-primary transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      <div className="mt-2">
        {loading ? (
          <div className="text-center text-text-muted py-16 animate-in fade-in zoom-in-95">
             <div className="w-8 h-8 border-2 border-accent-green border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        ) : query.trim() === '' ? (
          <div className="text-center text-text-muted py-16 animate-in fade-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-bg-surface flex items-center justify-center mx-auto mb-4">
              <SearchIcon className="w-8 h-8 text-text-secondary" />
            </div>
            <p className="font-bold text-text-primary">{t('search.start', 'Aramaya Başlayın')}</p>
            <p className="text-sm mt-1">{t('search.startDesc', 'Oyun adı, kategori veya geliştirici arayın')}</p>
          </div>
        ) : filteredGames.length > 0 ? (
          <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4">
            {filteredGames.map((game) => (
              <Link
                key={game.id}
                to={`/game/${game.id}`}
                className="flex items-center gap-3 bg-bg-surface p-3 rounded-xl hover:bg-border-subtle transition-colors group"
              >
                <img
                  src={game.media?.iconUrl || ''}
                  alt={game.title}
                  className="w-14 h-14 rounded-lg object-cover shadow-sm group-hover:scale-105 transition-transform"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-text-primary font-bold text-sm truncate">{game.title}</h3>
                  <p className="text-text-secondary text-xs truncate">{game.package}</p>
                  <div className="flex gap-1 mt-1">
                      <span className="text-[9px] px-1.5 py-0.5 bg-bg-elevated text-text-muted rounded font-medium">
                        {game.details?.size || 'N/A'}
                      </span>
                      <span className="text-[9px] px-1.5 py-0.5 bg-bg-elevated text-text-muted rounded font-medium flex items-center">
                        ★ {game.details?.rating || '0.0'}
                      </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center text-text-muted py-16 animate-in fade-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-bg-surface flex items-center justify-center mx-auto mb-4">
              <SearchIcon className="w-8 h-8 text-text-secondary opacity-50" />
            </div>
            <p className="font-bold text-text-primary">{t('search.noResults', 'Sonuç Bulunamadı')}</p>
            <p className="text-sm mt-1">{t('search.noResultsDesc', 'Farklı anahtar kelimeler deneyin')}</p>
          </div>
        )}
      </div>
    </div>
  );
}
