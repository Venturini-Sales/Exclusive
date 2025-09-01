import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';

const useAccount = () => {
  const { user, signout, updateSurname, updateName } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setSurname(user.surname || '');
    }
  }, [user]);

  const handleLogout = () => {
    signout();
    navigate('/');
  };

  const handleSave = () => {
    if (name !== user.name) {
      updateName(name);
    }

    if (surname !== user.surname) {
      updateSurname(surname);
    }

    if (currentPassword || newPassword || confirmPassword) {
      handlePasswordChange();
    } else {
      toast.success('Perfil atualizado com sucesso!');
    }
  };

  const handlePasswordChange = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.warning('Preencha todos os campos de senha.');
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error('Nova senha e confirmação não coincidem.');
      return;
    }

    const usersStorage = JSON.parse(localStorage.getItem('users_db')) || [];
    const userIndex = usersStorage.findIndex(
      (u) => u.email === user.email && u.password === currentPassword,
    );

    if (userIndex === -1) {
      toast.error('Senha atual incorreta.');
      return;
    }

    usersStorage[userIndex].password = newPassword;
    localStorage.setItem('users_db', JSON.stringify(usersStorage));

    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    toast.success('Senha atualizada com sucesso!');
  };

  return {
    user,
    name,
    surname,
    currentPassword,
    newPassword,
    confirmPassword,
    setName,
    setSurname,
    setCurrentPassword,
    setNewPassword,
    setConfirmPassword,
    handleLogout,
    handleSave,
    navigate,
  };
};

export default useAccount;
