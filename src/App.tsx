import Home from "./Pages/Home/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Users from "./Pages/users/Users";
import Products from "./Pages/products/Products";


function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    )
  };
  
  const router = createBrowserRouter([
    {
      path:"/", element:<Layout/>,
      children:[
        {
          path:"/", element:<Home />
        },
        {
          path:"/users", element:<Users />
        },
        {
          path:"/products", element:<Products />
        }
        

      ]
      
    

    }
      
    ]);
    
    
  return (
    <RouterProvider router={router} />
  )
}

export default App
