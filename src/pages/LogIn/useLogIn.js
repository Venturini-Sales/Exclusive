import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const useLogIn = () => {
  const navigate = useNavigate();
  const { signin } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const res = signin(email, password);
    if (res) {
      setError(res);
    } else {
      navigate('/');
    }
  };

  const goToSignUp = () => {
    navigate('/signup');
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleLogin,
    goToSignUp,
  };
};

export default useLogIn;
