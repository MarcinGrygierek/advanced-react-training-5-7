import { useParams } from "react-router-dom";

const Dynamic = () => {
    const { id } = useParams<{id: string}>();
  
    return <h1>Value: {id}</h1>
}

export default Dynamic;