import { createBrowserRouter } from "react-router-dom"
import AppLayout from "./layout/app-layout"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      }
    ]
  }
])

function App() {
  return (
    <>
      
    </>
  )
}

export default App
