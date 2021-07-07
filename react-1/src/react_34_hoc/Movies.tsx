import { withApi } from './hoc/with-api';
import{Movie} from './types/movie';

interface Props {
    items: Movie[]
}

const Movies = ({items}: Props) => {
    return <ul>
        {items.map(el => <li key={el.title}>{el.title}, {el.description}</li>)}
    </ul>
}

const MoviesWithApi = withApi(Movies, 'movies');

export { MoviesWithApi };