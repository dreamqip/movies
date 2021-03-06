import type {GetStaticProps, InferGetStaticPropsType, NextPage} from 'next';
import axios from "axios";
import dynamic from "next/dynamic";
import {Suspense} from "react";
import Spinner from "@/components/Spinner";
import Hero from "@/components/IndexPage/Hero";
import {Device} from "@/components/Device";

const DiscoverSection = dynamic(() => import("@/components/IndexPage/Explore"), {
    suspense: true
});
const WatchSection = dynamic(() => import("@/components/IndexPage/Watch"), {
    suspense: true
});
const ShowCarousel = dynamic(() => import('@/components/ShowCarousel/ShowCarousel'), {
    suspense: true
});

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({popular, topRated, upcoming, now_playing}) => {
    return (
        <>
            <Hero/>
            <Device desktop>
                <Suspense fallback={<div className="flex items-center justify-center text-4xl">Loading...</div>}>
                    <DiscoverSection/>
                </Suspense>
            </Device>
            <Suspense fallback={<div className="flex items-center justify-center text-4xl">Loading...</div>}>
                <WatchSection/>
            </Suspense>
            <Suspense fallback={<Spinner/>}>
                <ShowCarousel title="Now In Theaters" series={now_playing}/>
                <ShowCarousel title="Upcoming movies" series={upcoming}/>
                <ShowCarousel title="Popular now" series={popular}/>
                <ShowCarousel title="Top Rated" series={topRated}/>
            </Suspense>
        </>
    )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
    const popularMovies = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    )
    const topRated = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    )
    const upcoming = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`
    )
    const playing = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`
    )

    return {
        props: {
            topRated: topRated.data,
            popular: popularMovies.data,
            upcoming: upcoming.data,
            now_playing: playing.data,
        }
    }
}
