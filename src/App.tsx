import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from './Pages/Home'
import { Layout } from './Pages/Layout';
import { Cart } from './Pages/Cart';
import { CartContextProvider } from './Contexts/Cart'

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App;
