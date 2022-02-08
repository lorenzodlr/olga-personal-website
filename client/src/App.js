import './App.css'
import { 
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Booking from './components/Booking'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/inquiry' element={<Booking />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
