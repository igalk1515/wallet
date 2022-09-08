import './App.css'
import { Routes, Route } from 'react-router-dom'
import Fourm from './component/fourm'
import Statistic from './component/statistic'

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Fourm />} />
      <Route path="statistic" element={<Statistic />} />
    </Routes>
  )
}

export default App
