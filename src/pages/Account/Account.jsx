import React from 'react';
import {
  AccountInfoTitle,
  AccountPasswordArea,
  ContentSections,
  ContentTitle,
  InputArea,
  InputTotalArea,
  PageContent,
  PageStyle,
  PasswordAreaTitle,
  Section,
  StyledInput,
} from './styles';

export const Account = () => {
  return (
    <PageStyle>
      <PageContent>
        <ContentTitle>
          Bem-vindo! <span>John Doe da Silva!</span>
        </ContentTitle>
        <ContentSections></ContentSections>
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
          </AccountPasswordArea>
        </Section>
      </PageContent>
    </PageStyle>
  );
};
