import { Outlet } from "react-router-dom"
import './Root.css'
import Navbar from "../components/Navbar/Navbar"

const Root = () => {
  return (
    <div className="font-WorkSans container mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default Root