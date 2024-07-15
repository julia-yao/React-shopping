import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'
import './index.scss'

//pages
import Home from './pages/Home'
import Products from './pages/Products'
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact'
import NotFound from './pages/NotFound'
import Meal from './pages/products/Meal'
import MealDetails from './pages/products/MealDetails'
import MealError from './pages/products/MealError'
import CartList from './pages/cart/CartList'
import Checkout from './pages/checkout/Checkout'
import Order from './pages/checkout/Order'


//layout
import RootLayout from './layout/RootLayout'
import HelpLayout from './layout/HelpLayout'



const router = 
createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/products' element={<Products />} errorElement={<MealError />}>
        <Route 
          index 
          element={<Meal />} 
        />
        <Route
          path=':id'
          element={<MealDetails />}
        />
      </Route>

      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />} />
      </Route>

      <Route path="cart" element={<CartList />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="order" element={<Order />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
    
  );
}

export default App
