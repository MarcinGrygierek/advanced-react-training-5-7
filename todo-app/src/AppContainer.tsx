interface Props {
    children: React.ReactNode;
}

export const AppContainer = ({children}: Props) => {
    return (
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-8">
                {children}
            </div>
        </div>
    </div>
    )
}