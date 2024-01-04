import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Country from './assets/Components/Country'
import CountryInfo from './assets/Components/CountryInfo'
import Home from './assets/Components/Home'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element />
          <Route index element={<Home/>} />
          <Route path='/country' element={<Country/>} />
          <Route path='/info/:countryName' element={<CountryInfo/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
