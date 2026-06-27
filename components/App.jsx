import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import Error from "./Error";
import About from "./About";
import Menu from "./Menu";
import Contact from "./contact";
import Cart from "./Cart";
import Home from "./home";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";

let Applayout=()=>{
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )

}
let route=createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/Home",
                element:<Home/>
            },
            {
                path:"/Body",
                element:<Body/>
            },
             {
                path:"/About",
                element:<About/>
            },
            {
                path:"/Contact",
                element:<Contact/>
            },
            {
                path:"/Cart",
                element:<Cart/>
            },
            {
                path:"/res/:id",
                element:<Menu/>
            }
            
        ],
        errorElement:<Error/>

    }
])

function App(){
    return <div>
        <RouterProvider router={route}></RouterProvider>
        </div>
}
export default App;