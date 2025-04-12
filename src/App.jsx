import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from "./layout/app-layout"
import LandingPage from "./pages/landing"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/onboarding',
        element: <Onboarding />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
