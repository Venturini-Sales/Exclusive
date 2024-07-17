import { Routes, Route } from 'react-router-dom';
import { SignUpPage } from '../pages/SignUp/SignUp';
import { LogInPage } from '../pages/LogIn/LogIn';

export const RouteList = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route path="/login" element={<LogInPage />}></Route>
    </Routes>
  );
};
