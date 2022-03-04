import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginRoute from './components/LoginRoute';
import HomeRoute from './components/HomeRoute'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute a="hello"/>} />
        
        <Route path="/login" element={<LoginRoute />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
