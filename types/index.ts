export interface ILatestEpisodeAnimes {
  id: string;
  name: string;
  poster: string;
  rank?: number;
  type?: string;
  episodes: {
    sub: number;
    dub: number;
  };
}

export interface ISpotlightAnimes {
  id: string;
  name: string;
  jname: string;
  poster: string;
  description: string;
  rank: number;
  otherInfo: string[];
  episodes: {
    sub: number;
    dub: number;
  };
}

export interface ITopAiringAnime {
  id: string;
  name: string;
  jname: string;
  poster: string;
}
export interface ITrendingAnime {
  id: string;
  name: string;
  poster: string;
  rank: number;
}

export interface ITopUpcomingAnime {
  id: string;
  name: string;
  poster: string;
  duration: string;
  type: string;
  rating: string;
  episodes: {
    sub: number;
    dub: number;
  };
}
export interface IAnimeData {
  genres: string[];
  latestEpisodeAnimes: ILatestEpisodeAnimes[];
  spotlightAnimes: ISpotlightAnimes[];
  top10Animes: {
    today: ILatestEpisodeAnimes[];

    month: ILatestEpisodeAnimes[];
    week: ILatestEpisodeAnimes[];
  };
  topAiringAnimes: ITopAiringAnime[];
  topUpcomingAnimes: ITopUpcomingAnime[];
  trendingAnimes: ITrendingAnime[];
  mostPopularAnimes: ILatestEpisodeAnimes[];
  mostFavoriteAnimes: ILatestEpisodeAnimes[];
  latestCompletedAnimes: ILatestEpisodeAnimes[];
}
