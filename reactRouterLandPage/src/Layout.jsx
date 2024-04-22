import Headers from './components/Headers/Headers'
import { Outlet } from 'react-router-dom'

export default function Layout() {

  return (
    <>
      <Headers />
      <Outlet />
    </>
  )
}

