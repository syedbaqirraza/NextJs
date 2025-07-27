import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
import App from './routes/Posts.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddPost from './components/Post/AddPost.jsx';
import RouteLayout from './routes/RouteLayout.jsx';
import Posts from './routes/Posts.jsx';
const router = createBrowserRouter([
  {
    path: "/", element: <RouteLayout />, children: [
      { path: "/", element: <Posts /> },
      { path: "/create-post", element: <AddPost /> }
    ]
  },

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
