import './App.css'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'

function App() {
  
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/favorites' element={<Favorites />}></Route>
        </Routes>
      </main>

    </>
  )
}

export default App
