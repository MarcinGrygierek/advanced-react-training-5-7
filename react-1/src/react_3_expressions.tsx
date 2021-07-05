const App = () => {
    const res = 10 + 20;
    return <div 
    id="hello" 
    className={`lorem-${res}`} 
    data-id={res}
    style={{
        backgroundColor: 'red',
        padding: 20
    }}
    >Hello world</div>
}
export default App;
