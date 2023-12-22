import data from './data'
import './App.css'
import Navbar from './Components/Navbar'
import Card from './Components/Card'

function App() {

  const Cards = data.map(item => <Card 
  {...item}
  key={item.id} />)


  return (
    <>
    <Navbar />
    <div className='cards-feed'>
      {Cards}
    </div>
    

      
    </>
  )
}

export default App
