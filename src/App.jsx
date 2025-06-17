import './App.css'

function App() {

  const list = [1, 2, 3];

  return (
    <ul>
      {list.map(item => <li key={item}>{item}</li>)}
    </ul>
  )
}

export default App
