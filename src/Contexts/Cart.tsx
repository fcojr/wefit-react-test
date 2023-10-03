import { createContext, ReactNode, useState } from 'react'

export interface CartContextProps {
  cart: Movie[]
  clearCart: () => void
  addProductToCart: (item: Movie) => void
  increaseMovieQuantity: (item: Movie) => void
  decreaseMovieQuantity: (item: Movie) => void
  removeItemFromCart: (item: Movie) => void 
}

const DEFAULT_VALUE: CartContextProps = {
  cart: [],
  clearCart: () => {},
  addProductToCart: () => {},
  increaseMovieQuantity: () => {},
  decreaseMovieQuantity: () => {},
  removeItemFromCart: () => {}
} 

const CartContext = createContext<CartContextProps>(DEFAULT_VALUE)

const CartContextProvider = ({ children }: { children: ReactNode }) => {  
  const [cart, setCart] = useState(DEFAULT_VALUE.cart)

  const clearCart = () => {
    setCart([])
  }

  const addProductToCart = (item: Movie) => {
    setCart([...cart, item])
  }

  const increaseMovieQuantity = (item: Movie) => {
    const updatedCart = cart.map((cartMovie: Movie) => {
      if (item.id === cartMovie.id) {
        return { ...cartMovie, quantity: cartMovie.quantity + 1 }
      }
      return cartMovie
   })

   setCart(updatedCart)
  }

  const decreaseMovieQuantity = (item: Movie) => {
    if(item.quantity > 1) {
      const updatedCart = cart.map((cartMovie: Movie) => {
        if (item.id === cartMovie.id) {
          return { ...cartMovie, quantity: cartMovie.quantity - 1 }
        }
        return cartMovie
     })
  
     setCart(updatedCart)
    }
  }

  const removeItemFromCart = (item: Movie) => {
    const updatedCart = cart.filter((cartMovie: Movie) => item.id !== cartMovie.id)
    setCart(updatedCart)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        clearCart,
        addProductToCart,
        increaseMovieQuantity,
        decreaseMovieQuantity,
        removeItemFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartContextProvider, DEFAULT_VALUE }

export default CartContext
