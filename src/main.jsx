import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.jsx'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)