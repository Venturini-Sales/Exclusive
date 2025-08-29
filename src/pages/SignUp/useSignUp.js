import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const useSignUp = () => {
  const navigate = useNavigate();
  const { signup, quickLogin } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    const res = signup(name, email, password);
    if (res) {
      setError(res);
    } else {
      navigate('/login');
    }
  };

  const handleQuickLogin = () => {
    quickLogin();
    navigate('/');
  };

  const handleGoToLogin = () => {
    navigate('/login');
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleSignup,
    handleQuickLogin,
    handleGoToLogin,
  };
};

export default useSignUp;
