import {FC} from 'react';
import MoviesList from "../MoviesList/MoviesList";
import {useFetch} from "../../hooks/useFetch";

interface Props {
    id: any;
}

const Similar: FC<Props> = ({id}) => {
    const {details} = useFetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=1`)

    return (
        <div>
            <MoviesList movies={details} title={'Similar'} />
        </div>
    );
};

export default Similar;
