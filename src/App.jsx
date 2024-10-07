import { Outlet } from "react-router-dom"
import Header from "./components/Header"

function App() {

  return (
    <>
      <Header />
      <div className="bg-purple-700">
        <Outlet />
      </div>
    </>
  )
}

export default App
