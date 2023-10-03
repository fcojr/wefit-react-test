import { useState, useEffect } from "react"
import { Loading } from "../../Components/Loading"
import { Container } from "../../Components/Container"

import CartContext from '../../Contexts/Cart'
import { useContext } from 'react'

import * as S from './styles'

export const Home = () => {

  const [movies, setMovies] = useState<Movie[]>([])
  const { cart, addProductToCart, increaseMovieQuantity } = useContext(CartContext)

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((rejected) => { throw new Error(rejected) })
  }, [])

  const onAddToCartClick = (item: Movie) => {
    if(!cart.some((cartMovie: Movie) => item.id === cartMovie.id)) {
      addProductToCart({
        ...item, quantity: 1
      })
    } else {
      increaseMovieQuantity(item)
    }
  }

  const getMovieQuantityInCart = (item: Movie) => {
    return cart.find((cartMovie: Movie) => item.id === cartMovie.id)?.quantity || 0
  }

  return (
    <Container>
      <S.MoviesList>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <S.Movie
              key={movie.id}
              onAddToCartClick={() => onAddToCartClick(movie)}
              { ...movie }
              quantity={getMovieQuantityInCart(movie)}
              isAdded={getMovieQuantityInCart(movie) > 0}
            />
          ))
        ) : (
          <Loading />
        )}
      </S.MoviesList>
    </Container>
  )
}