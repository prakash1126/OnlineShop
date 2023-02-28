import { BrowserRouter, Routes, Route } from "react-router-dom";
//publicly available pages
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import RegisterPage from "./pages/RegisterPage";
//user pages
import UserCartDetails from "./pages/user/UserCartDetails";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import ProtectedRoute from "./pages/components/ProtectedRoute";
//admin page
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminOrderDetailsPage from "./pages/admin/AdminOrderDetailsPage";
import AdminEditUsersPage from "./pages/admin/AdminEditUsersPage";
import AdminEditProductsPage from "./pages/admin/AdminEditProductsPage";
import AdminCreateProductsPage from "./pages/admin/AdminCreateProductsPage";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage";
import AdminChatPage from "./pages/admin/AdminChatPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
//components
import HeaderComponent from "./pages/components/HeaderComponent";
import FooterComponenet from "./pages/components/FooterComponenet";
import RouteWithChatComponent from "./pages/components/user/RouteWithChatComponent";

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route element={<RouteWithChatComponent />}>
          {/* //publicly available routes */}

          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/Cart" element={<CartPage />} />
          <Route
            exact
            path="/productDetails"
            element={<ProductDetailsPage />}
          />
          <Route
            exact
            path="/productDetails/:id"
            element={<ProductDetailsPage />}
          />
          <Route exact path="/productList" element={<ProductListPage />} />
        </Route>
        {/* user Protected Routes */}
        <Route element={<ProtectedRoute admin={false} />}>
          <Route exact path="/user" element={<UserProfilePage />} />
          <Route exact path="/user/myOrders" element={<UserOrdersPage />} />
          <Route
            exact
            path="/user/myOrdersDetails"
            element={<UserOrderDetailsPage />}
          />
          <Route exact path="/user/cartDetails" element={<UserCartDetails />} />
        </Route>
        {/* admin Protected Routes */}
        <Route element={<ProtectedRoute admin={true} />}>
          <Route exact path="/admin/users" element={<AdminUsersPage />} />
          <Route exact path="/admin/products" element={<AdminProductsPage />} />
          <Route exact path="/admin/orders" element={<AdminOrdersPage />} />
          <Route
            exact
            path="/admin/orderDetails"
            element={<AdminOrderDetailsPage />}
          />
          <Route
            exact
            path="/admin/editUser"
            element={<AdminEditUsersPage />}
          />
          <Route
            exact
            path="/admin/editProduct"
            element={<AdminEditProductsPage />}
          />
          <Route
            exact
            path="/admin/createProduct"
            element={<AdminCreateProductsPage />}
          />
          <Route
            exact
            path="/admin/analytics"
            element={<AdminAnalyticsPage />}
          />
          <Route exact path="/admin/chats" element={<AdminChatPage />} />
        </Route>
      </Routes>
      <FooterComponenet />
      {/* <Route exact path='/home' component={HomePage}/> in pervision version of react-router-dom */}
    </BrowserRouter>
  );
}

export default App;
