import type {FC} from 'react';
import {IMovies} from "../../types/IMovies";
import MovieCard from "./MovieCard";
import Glider from 'react-glider'
import Pane from '../Pane'
import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/react/solid";
import {useEffect, useRef, useState} from "react";
import {Empty} from "antd";

interface MoviesListProps {
    movies: IMovies;
    title: string;
}

const MoviesList: FC<MoviesListProps> = ({movies, title}) => {
    const prev = useRef<HTMLButtonElement>(null)
    const next = useRef<HTMLButtonElement>(null)
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        setIsInitialized(Boolean(prev.current && next.current));
    }, [prev, next]);

    if (movies && movies.results.length == 0) return <Empty description="No recommendations"/>

    return (
        <div className="py-10">
            <h2 className="text-center dark:text-white font-bold text-3xl md:text-6xl">{title}</h2>
            <div className="">
                {isInitialized && movies && (
                    <Glider
                        draggable
                        dragVelocity={1}
                        slidesToShow={2}
                        hasArrows
                        arrows={{
                            prev: prev.current,
                            next: next.current
                        }}
                        slidesToScroll={2}
                        responsive={[
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 4,
                                    slidesToScroll: 4,
                                }
                            }
                        ]}
                    >
                        {movies?.results.map((movie) => {
                            return (
                                <Pane key={movie.id}>
                                    <MovieCard movie={movie}/>
                                </Pane>
                            )
                        })}
                    </Glider>
                )}
                <div className="relative left-10">
                    <button
                        ref={next}
                        type="button"
                        className="glider-prev left-6"
                        aria-label="Next"
                    >
                        <ArrowRightIcon className="w-10 h-10"/>
                    </button>
                    <button
                        ref={prev}
                        type="button"
                        className="glider-prev"
                        aria-label="Previous"
                    >
                        <ArrowLeftIcon className="w-10 h-10"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MoviesList;