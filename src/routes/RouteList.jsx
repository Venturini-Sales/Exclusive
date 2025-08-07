import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home/Home';
import { SignUpPage } from '../pages/SignUp/SignUp';
import { LogInPage } from '../pages/LogIn/LogIn';
import { NotFound } from '../pages/NotFound/NotFound';
import { ProductsPage } from '../pages/Products/Products';
import { AboutUsPage } from '../pages/AboutUs/AboutUs';
import { ContactPage } from '../pages/Contact/Contact';
import { Account } from '../pages/Account/Account';
import { PaymentPage } from '../pages/PaymentPage/PaymentPage';
import { CartPage } from '../pages/Cart/Cart';
import { WishlistPage } from '../pages/Wishlist/Wishlist';
import { CategoryPage } from '../pages/CategoryArea/CategoryArea';
import useAuth from '../hooks/useAuth';

const Private = ({ Item }) => {
  const { signed } = useAuth();
  return signed ? <Item /> : <SignUpPage />;
};

const PermReverse = ({ Item }) => {
  const { signed } = useAuth();
  return signed ? <Account /> : <Item />;
};

export const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<PermReverse Item={SignUpPage} />}></Route>
      <Route path="/login" element={<PermReverse Item={LogInPage} />}></Route>
      <Route path="/products" element={<ProductsPage />}></Route>
      <Route path="/aboutus" element={<AboutUsPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
      <Route path="/account" element={<Private Item={Account} />}></Route>
      <Route path="/payment" element={<PaymentPage />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/productscategory" element={<CategoryPage />}></Route>
      <Route path="/product/:id" element={<ProductsPage />}></Route>
      <Route path="/wishlist" element={<Private Item={WishlistPage} />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};
