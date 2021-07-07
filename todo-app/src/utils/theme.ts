export const getClassByType = (type: 'primary' | 'secondary') => {
    switch(type) {
        case 'primary': return 'main';
        case 'secondary': return 'accent'
    }
}