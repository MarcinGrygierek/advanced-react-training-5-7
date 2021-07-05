const App = () => {
    const items = [
        {
            id: 1,
            name: 'Marcin'
        },
        {
            id: 2,
            name: 'Marian'
        },
        {
            id: 3,
            name: 'Marta'
        },
    ]
return <>
   <ul>
       {
           items.map(el => <li key={el.id}>{el.name}</li>)
       }
   </ul>
</>
}


export default App;