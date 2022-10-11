import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Statistic from './components/Statistic/Statistic';
import AllQuiz from './components/AllQuiz/AllQuiz';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/home',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home>
      },
      {
        path: '/statistic',
        element: <Statistic></Statistic>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/home/:homeId',
        loader: async ({ params }) => {
          // console.log(params);
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.homeId}`);
        },
        element: <AllQuiz></AllQuiz>
      }
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
