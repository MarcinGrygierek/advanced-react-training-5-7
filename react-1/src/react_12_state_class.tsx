import { Component } from "react";

interface Props {}

interface State {
    val: number;
    name: string;
}

class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            val: 0,
            name: 'Andrzej'
        }
    }

    generateNumber = () => {
        const number = Math.round(Math.random() * 1000);
        this.setState({
            val: number
        }, () => {
            console.log(this.state);
        });  
    }

    increaseNumber = () => {
       this.setState(prevState => ({
           val: prevState.val + 1
       }), () =>{
        console.log(this.state);
       });
    }

    render() {
        const {val, name} = this.state;
        return <>
            {name}
            <h1>{val}</h1>
            <button onClick={this.generateNumber}>Losuj</button>
            <button onClick={this.increaseNumber}>+1</button>
        </>
    }
}

export { App }