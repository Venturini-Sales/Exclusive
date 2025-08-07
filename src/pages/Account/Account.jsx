import React, { useState, useEffect } from 'react';
import {
  AccountInfoTitle,
  AccountPasswordArea,
  ButtonsArea,
  CancelButton,
  ContentSections,
  ContentTitle,
  InputArea,
  InputTotalArea,
  PageContent,
  PageStyle,
  PasswordAreaTitle,
  Section,
  Sections,
  SectionsTitle,
  StyledInput,
  SubSections,
} from './styles';
import Button from '../../components/Button/Button';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export const Account = () => {
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
      alert('Perfil atualizado com sucesso!');
    }
  };

  const handlePasswordChange = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert('Preencha todos os campos de senha.');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('Nova senha e confirmação não coincidem.');
      return;
    }

    const usersStorage = JSON.parse(localStorage.getItem('users_db')) || [];
    const userIndex = usersStorage.findIndex(
      (u) => u.email === user.email && u.password === currentPassword,
    );

    if (userIndex === -1) {
      alert('Senha atual incorreta.');
      return;
    }

    usersStorage[userIndex].password = newPassword;
    localStorage.setItem('users_db', JSON.stringify(usersStorage));
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    alert('Senha atualizada com sucesso!');
  };

  return (
    <PageStyle>
      <PageContent>
        <ContentTitle>
          Bem-vindo!{' '}
          <span>
            {user?.name} {user?.surname}!
          </span>
        </ContentTitle>
        <ContentSections>
          <Sections>
            <SectionsTitle>Gerenciamento de Conta</SectionsTitle>
            <SubSections>
              <li>
                <p onClick={handleLogout}>Sair</p>
              </li>
            </SubSections>
          </Sections>
          <Sections>
            <SectionsTitle>Gerenciamento de Compras</SectionsTitle>
            <SubSections>
              <li onClick={() => navigate('/cart')}>
                <p>Carrinho de Compras</p>
              </li>
              <li onClick={() => navigate('/wishlist')}>
                <p>Lista de Desejos</p>
              </li>
            </SubSections>
          </Sections>
        </ContentSections>
        <Section>
          <AccountInfoTitle>Edite Seu Perfil</AccountInfoTitle>
          <InputArea>
            <InputTotalArea>
              <p>Nome</p>
              <StyledInput>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder={user?.name}
                />
              </StyledInput>
            </InputTotalArea>

            <InputTotalArea>
              <p>Sobrenome</p>
              <StyledInput>
                <input
                  type="text"
                  onChange={(e) => setSurname(e.target.value)}
                  placeholder={user?.surname}
                />
              </StyledInput>
            </InputTotalArea>

            <InputTotalArea>
              <p>Email</p>
              <StyledInput cursortype="not-allowed">
                <input type="text" placeholder={user?.email} readOnly />
              </StyledInput>
            </InputTotalArea>
          </InputArea>
          <AccountPasswordArea>
            <PasswordAreaTitle>Alterar Senha</PasswordAreaTitle>

            <InputTotalArea>
              <StyledInput>
                <input
                  type="password"
                  placeholder="Senha Atual"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </StyledInput>
            </InputTotalArea>

            <InputTotalArea>
              <StyledInput>
                <input
                  type="password"
                  placeholder="Nova Senha"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </StyledInput>
            </InputTotalArea>

            <InputTotalArea>
              <StyledInput>
                <input
                  type="password"
                  placeholder="Confirmar Nova Senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </StyledInput>
            </InputTotalArea>

            <ButtonsArea>
              <CancelButton
                onClick={() => {
                  setCurrentPassword('');
                  setNewPassword('');
                  setConfirmPassword('');
                }}
              >
                Cancelar
              </CancelButton>
              <Button buttonText="Salvar" onClick={handleSave} />
            </ButtonsArea>
          </AccountPasswordArea>
        </Section>
      </PageContent>
    </PageStyle>
  );
};
