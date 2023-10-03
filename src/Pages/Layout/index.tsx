import { Outlet } from 'react-router-dom'
import { Header } from '../../Components/Header'

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}