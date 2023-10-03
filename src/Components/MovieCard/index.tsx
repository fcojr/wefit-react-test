import * as S from './styles'
import cartAdd from "../../Assets/cartAdd.svg"
import { formatPrice } from '../../Utils'

interface MovieCard extends Movie {
  className?: string
  onAddToCartClick: () => void
  isAdded: boolean
}

export const MovieCard = ({
  image,
  price, 
  title,
  onAddToCartClick,
  className,
  quantity,
  isAdded
}: MovieCard) => {
  return (
    <S.Card className={className}>
      <S.Img src={image} />
      <S.Title>{title}</S.Title>
      <S.Price>{formatPrice(price)}</S.Price>
      <S.CustomButton 
        type={isAdded ? 'success' : 'default'}
        onClick={onAddToCartClick}
      >
        <S.Count>
          <S.CartAddIcon src={cartAdd} /> 
          <S.Number>{quantity}</S.Number>
        </S.Count>
        {isAdded ? 'Item Adicionado' : 'Adicionar ao carrinho'}
      </S.CustomButton>
    </S.Card>
  )
}