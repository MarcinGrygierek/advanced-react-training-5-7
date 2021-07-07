import { useCallback } from "react";
import Foo from "./Foo";

interface Props {
    value: number
}

const Parent = ({value}: Props) => {
    const handleItemClick = useCallback((e: any) => {
        console.log('You clicked on element', e.target);
    }, [value]);

    return <Foo handleClick={handleItemClick} />
}

const App = () => {
return <Parent value={19} />
}

export { App }