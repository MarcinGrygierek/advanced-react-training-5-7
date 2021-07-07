import { withApi } from './hoc/with-api';
import{Comment} from './types/comment';

interface Props {
    items: Comment[]
}

const Comments = ({items}: Props) => {
    return <ul>
        {items.map(el => <li key={el.title}>{el.title}, {el.text}</li>)}
    </ul>
}

const CommentsWithApi = withApi(Comments, 'comments');

export { CommentsWithApi };