import {ICast} from "./ICast";

interface IGenres {
    id: number;
    name: string;
}

export interface IMovie extends ICast{
    poster_path: string | null;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string | null;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
    genres: IGenres[];
    budget: number;
    revenue: number;
    runtime: number;
    status: string;
    production_companies: any;
}
