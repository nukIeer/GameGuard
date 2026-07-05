export interface GameDetails {
  downloads?: string | number;
  rating?: string | number;
  size?: string;
  ageRating?: string;
  androidVersion?: string;
  version?: string;
}

export interface GameMedia {
  iconUrl?: string | null;
  bannerUrl?: string | null;
  screenshots?: string[];
}

export interface GameDownloadLinks {
  playStoreUrl?: string | null;
  galaxyStoreUrl?: string | null;
  apk1?: string | null;
  apk2?: string | null;
  mirrors?: string[];
}

export interface Game {
  id: string;
  title: string;
  package: string;
  details?: GameDetails;
  description?: string;
  whatsNew?: string;
  media?: GameMedia;
  downloadLinks?: GameDownloadLinks;
}

export interface GameListResponse {
  games: Game[];
}

