import { Component } from "react";

interface Props {
    name: string;
}

class LifeCycleTester extends Component<Props> {
    constructor(props: Props) {
        super(props);
        console.log('Constructor');
    }

    componentDidMount() {
        console.log('Mounted');
    }

    componentDidUpdate() {
        const { name } = this.props;
        console.log('Updated', name);
    }

    componentWillUnmount() {
        console.log('Will be removed')
    }

    render() {
        console.log('Render');
        const { name } = this.props;
        return <h1>{name}</h1>
    }
}

const App = () => {
    return <LifeCycleTester name='Adrian'/>
}

export { App }