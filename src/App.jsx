import Layout from "./components/Layout"
import Home from "./pages/Home"
import MovieDetails from "./components/ui/MovieDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home />},
      { path: ':imdbID', element: <MovieDetails /> },
    ],
  },
])

const App = () => <RouterProvider router={router} />

export default App;
