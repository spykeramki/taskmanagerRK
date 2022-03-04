import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginRoute from './components/LoginRoute';
import HomeRoute from './components/HomeRoute'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginRoute />} />
        <Route path="/" element={<HomeRoute/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
