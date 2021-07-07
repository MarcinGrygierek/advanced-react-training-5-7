import { useEffect, useState } from "react";

function withApi<T>(WrappedComponent: React.FC<any>, path: string) { 
    return function({...props}) {
        const [items, setItems] = useState<any>([]);

        useEffect(() => {
            setTimeout(() => {
                switch(path) {
                    case 'comments': {
                        setItems([
                            {
                                title: 'Komentarz 1',
                                text: 'Tekst komentarza 1'
                            }, {
                                title: 'Komentarz 2',
                                text: 'Tekst komentarza 2'
                            }]); 
                        break;
                    }
                    case 'movies': {
                        setItems([
                            {
                                title: 'Film 1',
                                description: 'Opis filmu 1'
                            }, {
                                title: 'Film 2',
                                description: 'Opis filmu 2'
                            }])
                        break;
                    }
                }
            }, Math.random() * 4000 + 1000)
        })
        
        if(items.length === 0) return <p>Trwa ładowanie danych z {path}</p>

        return <WrappedComponent items={items} {...props} />
    }
}

export { withApi }