import Contact from "../pages/frontend/Contact";
import Home from "../pages/frontend/home";
import Product from "../pages/frontend/Product";
import ProductBrand from "../pages/frontend/ProductBrand";
import ProductCategory from "../pages/frontend/ProductCategory";
import ProductDetail from "../pages/frontend/ProductDetail";

const RouterSite=[
    {index:true,element:<Home/>,},
    {path:"Lien-he",element:<Contact/>},
    {path:"San-pham",element:<Product/>},
    {path:"Danh-muc/:slug",element:<ProductBrand/>},
    {path:"Thuong-hieu/:slug",element:<ProductCategory/>},
    {path:"San-pham/:slug",element:<ProductDetail/>},

];
export default RouterSite;