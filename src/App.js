import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

//pages
import Home from './pages/Home'
import Products from './pages/Products'
import Help from './pages/Help'

//layout
import RootLayout from './layout/RootLayout'


const router = 
createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"  element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='products' element={<Products />} />
      <Route path='help' element={<Help />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
    
  );
}

export default App
