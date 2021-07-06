interface Props {
    as: 'div' | 'li';
    children: React.ReactNode;
    title: string;
    main?: boolean;
}

export const Card = ({as, children, title, main}: Props) => {
    const className = "card mt-3";

    const content = <div className='card-body'>
        {main ? <h1 className='card-title'>{title}</h1> : <h2 className='card-title'>{title}</h2>}
        {children}
    </div>

    if(as === 'div') {
        return <div className={className}>
            {content}
        </div>
    }
    return <li className={className}>
        {content}
    </li>
}
