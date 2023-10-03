import cartIcon from '../../Assets/cart.svg'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'
import CartContext from '../../Contexts/Cart'
import { useContext } from 'react'

export const Cart = () => {

  const { cart } = useContext(CartContext)

  const navigate = useNavigate()
  return (
    <S.Cart>
      <S.TextWrapper>
        <S.Link
          onClick={() => navigate("/cart")}
        >
          Meu Carrinho
        </S.Link>
        <S.ItemsCount>
          {cart.length} {cart.length === 1 ? 'item' : 'itens'}
        </S.ItemsCount>
      </S.TextWrapper>
      <S.Icon 
        onClick={() => navigate("/cart")}
        src={cartIcon}
      />
    </S.Cart>
  )
}