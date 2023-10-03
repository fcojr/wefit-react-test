import { ReactElement, ReactNode } from 'react'
import * as S from './styles'

interface IContainerProps {
  children: ReactNode
  className?: string
}

export const Container = ({
  children,
  className 
}: IContainerProps) => {
  return (
    <S.Container className={className}>
      {children}
    </S.Container>
  )
}