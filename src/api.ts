import { Game, GameListResponse } from './types';

const JSON_URL = 'https://cdn.jsdelivr.net/gh/nukIeer/gameshieldcdn@master/games.json';

export async function fetchGames(): Promise<Game[]> {
  try {
    const res = await fetch(JSON_URL);
    if (!res.ok) throw new Error('Failed to fetch games feed');
    const data: GameListResponse = await res.json();
    return data.games || [];
  } catch (error) {
    console.error('Error fetching games:', error);
    return [];
  }
}
