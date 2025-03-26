import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home/Home';
import { SignUpPage } from '../pages/SignUp/SignUp';
import { LogInPage } from '../pages/LogIn/LogIn';
import { NotFound } from '../pages/NotFound/NotFound';
import { ProductsPage } from '../pages/Products/Products';
import { AboutUsPage } from '../pages/AboutUs/AboutUs';
import { ContactPage } from '../pages/Contact/Contact';
import { Account } from '../pages/Account/Account';

export const RouteList = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/login" element={<LogInPage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/aboutus" element={<AboutUsPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
};
