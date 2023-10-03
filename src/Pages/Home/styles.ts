import styled, { css } from 'styled-components'
import { MovieCard } from '../../Components/MovieCard'

export const MoviesList = styled('div')(
  () => css`
    margin-top: 25px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;

    @media(max-width: 700px) {
      grid-template-columns: 1fr;
      margin: 0 10px;
      padding-bottom: 20px;
    }
  `
)

export const Movie = styled(MovieCard)(
  () => css`
    flex: 0 0 33%;
  `
)