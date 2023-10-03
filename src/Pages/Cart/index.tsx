import * as S from './styles'
import CartContext from '../../Contexts/Cart'
import { useContext, useState } from 'react'
import { Message } from '../../Components/Message'
import { useNavigate } from 'react-router-dom'
import { formatPrice } from '../../Utils'

import trash from '../../Assets/trash.svg'

export const Cart = () => {

  const [isOrderFinished, setIsOrderFinished] = useState<boolean>(false)

  const { cart, clearCart, increaseMovieQuantity, decreaseMovieQuantity, removeItemFromCart } = useContext(CartContext)
  const navigate = useNavigate()

  const getTotalPrice = () => {
    var sum = 0;
    cart.forEach((item: Movie) => {
      sum += item.price * item.quantity
    })

    return formatPrice(sum)
  }

  const finishOrder = () => {
    clearCart()
    setIsOrderFinished(true)
  }

  return (
    <S.CartContainer className={cart.length > 0 ? 'items' : 'no-items'}>
      {cart.length > 0 ? (
        <>
          {cart.map((movie: Movie) => (
            <S.CartMovieCard key={movie.id}>
              <S.Column>
                <S.ColumnTitle className="d-none">Produto</S.ColumnTitle>
                <S.ProductInfo>
                  <S.Image
                    src={movie.image}
                  />
                  <S.Details>
                    <S.Title>{movie.title}</S.Title>
                    <S.Price>{formatPrice(movie.price)}</S.Price>
                    <S.Quantity
                      className="mobile"
                    >
                      <S.QuantityButton onClick={() => decreaseMovieQuantity(movie)}>
                        <span>-</span>
                      </S.QuantityButton>
                      <S.MovieCount>{movie.quantity}</S.MovieCount>
                      <S.QuantityButton onClick={() => increaseMovieQuantity(movie)}>
                        <span>+</span>
                      </S.QuantityButton>
                    </S.Quantity>
                  </S.Details>
                </S.ProductInfo>
              </S.Column>
              <S.Column className="d-none">
                <S.ColumnTitle>QTD</S.ColumnTitle>
                <S.Quantity>
                  <S.QuantityButton onClick={() => decreaseMovieQuantity(movie)}>
                    <span>-</span>
                  </S.QuantityButton>
                  <S.MovieCount>{movie.quantity}</S.MovieCount>
                  <S.QuantityButton onClick={() => increaseMovieQuantity(movie)}>
                    <span>+</span>
                  </S.QuantityButton>
                </S.Quantity>
              </S.Column>
              <S.Column className='subtotal'>
                <S.ColumnTitle>Subtotal</S.ColumnTitle>
                  <S.SubTotal>
                    <S.Price>{formatPrice(movie.price * movie.quantity)}</S.Price>
                  </S.SubTotal>
              </S.Column>
              <S.TrashIcon
                src={trash}
                onClick={() => removeItemFromCart(movie)}
              />
            </S.CartMovieCard>
          )
        )}
          <S.Footer>
            <S.CustomButton
              type="default"
              onClick={() => {finishOrder()}}
            >
              Finalizar Pedido
            </S.CustomButton>
            <S.FinalPrice>
              <S.ColumnTitle>Total</S.ColumnTitle>
              <S.Total>{getTotalPrice()}</S.Total>
            </S.FinalPrice>
          </S.Footer>
        </>
      ) : (
        <Message 
          type={isOrderFinished ? "success" : "error"}
          text={isOrderFinished ? "Compra realizada com sucesso" : "Parece que não há nada por aqui :("}
          buttonText="Voltar"
          onButtonClick={() => navigate("/")}
        />
      )}

    </S.CartContainer>
  )
}