import { useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/survey",
    element: (
      <>
        <Navbar />
        <Survey />
      </>
    ),
  },
  {
    path: "/results",
    element: (
      <>
        <Navbar />
        <Results />
      </>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <Navbar />
        <ErrorPage />
      </>
    ),
  }
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
