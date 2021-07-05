import { Component } from "react"

interface Props {
    name: string;
    age: number;
    salutation?: string;
}

class Hello extends Component<Props> {
    render() {
        const {salutation, name, age} = this.props;
        return <h1>{salutation} {name}, lat {age}</h1>
    }
  
}

const App = () => {
    return <Hello name='Marcin' age={25} />
}

export { App };