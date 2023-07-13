import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Mainpage from './components/Mainpage.js'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/:name" element={<Mainpage />} />
      </Routes>
    </Router>
  )
}

export default App
