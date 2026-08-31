import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx'
import Home from './pages/Home/Home.jsx'
import MealDetails from './pages/Menu/mealdetails.jsx'
import FoodDetails from './pages/Menu/fooddetails.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Checkout from './pages/Checkout/Checkout.jsx'
import Payment from './pages/Payment/Payment.jsx'
import OrderSuccess from './pages/Orders/OrderSuccess.jsx'
import TicketDetails from './pages/ticketdetails.tsx'
import MyOrders from './pages/Orders/MyOrders.jsx'
import OrderDetails from './pages/Orders/OrderDetails.jsx'
import Wallet from './pages/Wallet/Wallet.jsx'
import AboutUs from './pages/aboutus.jsx'
import Login from './pages/Auth/Login.jsx'

function App() {
  return (
    <CartProvider>
      <AuthProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={
            <ProtectedRoute>
              <MealDetails />
            </ProtectedRoute>
          } />
          <Route path="/menu/:id" element={
            <ProtectedRoute>
              <FoodDetails />
            </ProtectedRoute>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/ticket-details" element={<TicketDetails />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/orders/:id" element={<OrderDetails />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </CartProvider>
  )
}

export default App
