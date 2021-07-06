interface SignatureProps {
    text: string
}

const Signature = ({text}: SignatureProps) => {
    return <div>
        <em>{text}</em>
    </div>
}

interface Props {
    children: React.ReactNode,
    text: React.ReactNode
}

const Figure: React.FC<Props> = ({children, text}: Props)  => {
    return <figure>
                {children}
                <figcaption>
                    {text}
                </figcaption>
        </figure>
}

const App = () => {
    return <Figure text={<Signature text='Lorem ipsum' />}>
        <h1>Lorem</h1>
        <p>ipsum</p>
    </Figure>
}

export { App }