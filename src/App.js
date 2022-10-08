import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Comp/About/About';
import Grandpa from './Comp/Grandpa/Grandpa';
import Home from './Comp/Home/Home';
import Orders from './Comp/Orders/Orders';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/',
          loader:()=>fetch('data.json'),
          element:<Home></Home>
        },
        {
          path:'orders',
          element:<Orders></Orders>
        },
        {
          path:'grandpa',
          element:<Grandpa></Grandpa>
        },
        {
          path:'about',
          element:<About></About>
        }
      ]
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
