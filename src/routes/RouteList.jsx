import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home/Home';
import { SignUpPage } from '../pages/SignUp/SignUp';
import { LogInPage } from '../pages/LogIn/LogIn';
import { NotFound } from '../pages/NotFound/NotFound';
import { ProductsPage } from '../pages/Products/Products';
import { AboutUsPage } from '../pages/AboutUs/AboutUs';

export const RouteList = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/login" element={<LogInPage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/aboutus" element={<AboutUsPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
};
