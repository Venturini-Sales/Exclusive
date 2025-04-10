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
  SectionsTitle,
  StyledInput,
  SubSections,
} from './styles';
import Button from '../../components/Button/Button';

export const Account = () => {
  return (
    <PageStyle>
      <PageContent>
        <ContentTitle>
          Bem-vindo! <span>John Doe da Silva!</span>
        </ContentTitle>
        <ContentSections>
          <Sections>
            <SectionsTitle>Gerenciamento de Conta</SectionsTitle>
            <SubSections>
              <li>
                <a href="">Meu Perfil</a>
              </li>
            </SubSections>
          </Sections>
          <Sections>
            <SectionsTitle>Gerenciamento de Compras</SectionsTitle>
            <SubSections>
              <li>
                <a href="">Carrinho de Compras</a>
              </li>
              <li>
                <a href="">Lista de Desejos</a>
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
                <input type="text" placeholder="John Doe" />
              </StyledInput>
            </InputTotalArea>

            <InputTotalArea>
              <p>Sobrenome</p>
              <StyledInput>
                <input type="text" placeholder="Da Silva" />
              </StyledInput>
            </InputTotalArea>

            <InputTotalArea>
              <p>Email</p>
              <StyledInput cursortype="not-allowed">
                <input type="text" placeholder="teste@testando.com" readOnly />
              </StyledInput>
            </InputTotalArea>

            <InputTotalArea>
              <p>Endereço</p>
              <StyledInput>
                <input type="text" placeholder="Rua Fulano de Tal, 123, RJ" />
              </StyledInput>
            </InputTotalArea>
          </InputArea>
          <AccountPasswordArea>
            <PasswordAreaTitle>Alterar Senha</PasswordAreaTitle>

            <InputTotalArea>
              <StyledInput>
                <input type="text" placeholder="Senha Atual" />
              </StyledInput>
            </InputTotalArea>

            <InputTotalArea>
              <StyledInput>
                <input type="text" placeholder="Nova Senha" />
              </StyledInput>
            </InputTotalArea>

            <InputTotalArea>
              <StyledInput>
                <input type="text" placeholder="Confirmar Nova Senha" />
              </StyledInput>
            </InputTotalArea>

            <ButtonsArea>
              <CancelButton>Cancelar</CancelButton>
              <Button buttonText="Salvar" />
            </ButtonsArea>
          </AccountPasswordArea>
        </Section>
      </PageContent>
    </PageStyle>
  );
};
