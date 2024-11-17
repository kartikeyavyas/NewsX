import { useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import Newsbord from './Components/Newsbord.jsx'


const App = () => {

  const [category,setCategory] = useState("general");
  return (
    <div>
        <Navbar setCategory={setCategory}/>
        <Newsbord category={category}/>   
    </div>
  )
}

export default App
