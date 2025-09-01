import React from 'react';
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
  SectionsArea,
  SectionsTitle,
  StyledInput,
  SubSections,
} from './styles';
import Button from '../../components/Button/Button';
import useAccount from './useAccount';

export const Account = () => {
  const {
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
  } = useAccount();

  return (
    <PageStyle>
      <PageContent>
        <ContentTitle>
          Bem-vindo!{' '}
          <span>
            {user?.name} {user?.surname}!
          </span>
        </ContentTitle>
        <SectionsArea>
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
                    value={name}
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
                    value={surname}
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
        </SectionsArea>
      </PageContent>
    </PageStyle>
  );
};
