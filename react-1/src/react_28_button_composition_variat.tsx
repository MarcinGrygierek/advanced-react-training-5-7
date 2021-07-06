interface Props {
    text: string;
    size: 'small' | 'normal' | 'big';
    type: 'primary' | 'secondary' | 'success' | 'danger';
    onClick: () => void;
}

const Button = ({text, size, type, onClick}: Props) => {
    const getPadding = () => {
        switch(size) {
            case 'small': return 5;
            case 'normal': return 10;
            case 'big': return 25
        }
    }

    const getFontSize = () => {
        switch(size) {
            case 'small': return 12;
            case 'normal': return 14;
            case 'big': return 18
        }
    }

    const getBackground = () => {
        switch(type) {
            case 'primary': return '#9212fa';
            case 'secondary': return '#bbb';
            case 'success': return '#44ff12';
            case 'danger': return '#ff0012';
        }
    }

    return <button
        style={{
            padding: getPadding(),
            fontSize: getFontSize(),
            fontFamily: 'Tahoma',
            color: '#fff',
            backgroundColor: getBackground(),
            border: 'none',
            borderRadius: 5
        }}
        onClick={onClick}
    >
        {text}
    </button>
}

interface DangerProps {
    text: string;
    onClick: () => void;
}

const ButtonDanger = ({text, onClick}: DangerProps) => {
    return <Button text={text} onClick={onClick} type='danger' size='normal' />
}

const App = () => {
    return <>
        <Button text='Click me' size='big' type='primary' onClick={() => console.log('test')} />
        <ButtonDanger text='Uważaj' onClick={() => console.log('Produkcja wybuchła')} />
    </>
}

export { App }