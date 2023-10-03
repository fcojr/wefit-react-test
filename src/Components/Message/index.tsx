import * as S from './styles'
import { Button } from '../Button'
import ErrorMessage from '../../Assets/errorMessage.svg'
import SuccessMessage from '../../Assets/successMessage.svg'

interface IMessageProps {
  text: string
  buttonText?: string
  onButtonClick?: () => void
  type: 'error' | 'success'
}

export const Message = ({
  text,
  buttonText,
  onButtonClick,
  type
}: IMessageProps) => {

  const handleType = (type: 'error' | 'success') => {
    const images = {
      'error': ErrorMessage,
      'success': SuccessMessage
    }

    return images[type]
  }

  return (
    <S.MessageWrapper>
      <S.Text>{text}</S.Text>
      <img src={handleType(type)} />
      {(buttonText && onButtonClick) && 
        <Button
          type='default'
          onClick={() => onButtonClick()}
        >
          {buttonText}
        </Button>
      }
    </S.MessageWrapper>
  )
}