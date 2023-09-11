import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './pages/login/Login.jsx';
import { Home } from './pages/home/Home.jsx';
import { NotFound } from './pages/notFound/NotFound.jsx';
import { Produtos } from './pages/produtos/Produtos.jsx';
import { Categoria } from './pages/categoria/Categoria.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/categoria" element={<Categoria />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
