import { ReactNode } from 'react'
import * as S from './styles'

interface ButtonProps {
  type: 'default' | 'success'
  children: ReactNode
  onClick: () => void
  className?: string
}

export const Button = ({
  type,
  children,
  onClick,
  className
}: ButtonProps) => {
  return (
    <S.Button 
      className={className}
      type={type}
      onClick={onClick}
    >
      {children}
    </S.Button>
  )
}

export type { ButtonProps }