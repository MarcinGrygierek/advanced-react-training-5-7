import React, { useState } from "react"
import { useContext } from "react"

const ThemeContext = React.createContext({
    primary: 'green',
    setPrimary: (color: string) => {
        console.log('I am doing my best :(')
    }
})

const Button = () => {
    const theme = useContext(ThemeContext);
    const handleClick = () => {
        theme.setPrimary(theme.primary === 'red' ? 'blue' : 'red');
    }

    return <button onClick={handleClick}>Click to change main color</button>
}

const Card = () => {
    const theme = useContext(ThemeContext);
    return <div style={{
        padding: 25,
        borderRadius: 5,
        backgroundColor: theme.primary
    }}>
        {/* <ThemeContext.Consumer>
            {context => <div style={{padding: 50, backgroundColor: context.primary}} />}
        </ThemeContext.Consumer> */}
        <div style={{padding: 50, backgroundColor: theme.primary}} />
        <Button />
    </div>
}

const ThemeComponent = () => {
    const [primary, setPrimary] = useState('blue');
    const [secondary, setSecondary] = useState('violet');
    return (
        <>
            <ThemeContext.Provider value={{primary, setPrimary}}>
                <Card />
            </ThemeContext.Provider>
            <ThemeContext.Provider value={{primary: secondary, setPrimary: setSecondary}}>
                <Card />
            </ThemeContext.Provider>
            <Card />
        </>
    )
}

const App = () => {
    return <ThemeComponent />
}

export { App }