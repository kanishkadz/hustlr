import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from "./layout/app-layout"
import LandingPage from "./pages/landing"
import Onboarding from "./pages/onboarding"
import JobListing from "./pages/job-listing"
import JobPage from "./pages/job"
import PostJob from "./pages/post-job"
import SaveJobs from "./pages/saved-job"

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
      },
      {
        path: '/jobs',
        element: <JobListing />
      },
      {
        path: '/job/:id',
        element: <JobPage />
      },
      {
        path: '/post-job',
        element: <PostJob />
      },
      {
        path: '/saved-job',
        element: <SaveJobs />
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
