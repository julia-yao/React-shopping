import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

//pages
import Home from './pages/Home'
import Products from './pages/Products'
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact'
import NotFound from './pages/NotFound'
import Meal,{ mealLoader } from './pages/products/Meal'
import MealDetails, { mealDetailsLoader } from './pages/products/MealDetails'
import MealError from './pages/products/MealError'
import CartList from './pages/cms/CartList'


//layout
import RootLayout from './layout/RootLayout'
import HelpLayout from './layout/HelpLayout'







const router = 
createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='products' element={<Products />} errorElement={<MealError />}>
        <Route 
          index 
          element={<Meal />} 
          loader={mealLoader}
        />
        <Route
          path=':id'
          element={<MealDetails />}
          loader={mealDetailsLoader}
        />
      </Route>

      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />} />
        <Route path='contact' element={<Contact />}/>
        
      </Route>

      <Route path="cart" element={<CartList />} />
      

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
