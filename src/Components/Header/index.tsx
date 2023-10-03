import * as S from './styles'
import { Cart } from '../Cart'
import { Container } from '../Container'

export const Header = () => {
  return (
    <S.Header>
      <Container>
        <S.Content>
          <S.Logo>WeMovies</S.Logo>
          <Cart />
        </S.Content>
      </Container>
    </S.Header>
  )
}