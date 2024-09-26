import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout, CifradoCesar, CifradoEscitala, Home, Documentacion, Footer } from './pages';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/CifradoCesar' element={<CifradoCesar />} />
          <Route path='/CifradoEscitala' element={<CifradoEscitala />} />
          <Route path='/Documentacion' element={<Documentacion />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;