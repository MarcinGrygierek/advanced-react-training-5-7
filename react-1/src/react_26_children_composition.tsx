interface Props {
    children: React.ReactNode
}

const Container: React.FC<Props> = ({children}: Props)  => {
    return <div className="container">
        <section>
            {children}
        </section>
    </div>
}

const App = () => {
    return <Container>
        <h1>Lorem</h1>
        <p>ipsum</p>
    </Container>
}

export { App }