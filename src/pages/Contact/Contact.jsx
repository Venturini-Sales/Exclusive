import React from 'react';
import {
  ContactInfoArea,
  ContactArea,
  ContactSection,
  InfoText,
  InfoTitle,
  InfoTitleArea,
  PageStyle,
  PhoneIcon,
  StyledInput,
  InputArea,
  TextArea,
  TextInputArea,
  ButtonArea,
  FormArea,
} from './styles';
import Button from '../../components/Button/Button';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export const ContactPage = () => {
  return (
    <>
      <PageStyle>
        <ContactSection>
          <ContactInfoArea>
            <div>
              <ContactArea>
                <InfoTitleArea>
                  <PhoneIcon>
                    <FontAwesomeIcon
                      icon={faPhone}
                      size="xl"
                      style={{ color: '#ffffff' }}
                    />
                  </PhoneIcon>
                  <InfoTitle>Faça uma ligação</InfoTitle>
                </InfoTitleArea>
                <InfoText>Estamos disponiveis 24 horas por dia.</InfoText>
                <InfoText style={{ userSelect: 'text' }}>
                  Telefone: +55 21 9 7891-5683
                </InfoText>
              </ContactArea>
              <ContactArea borderbottom="none">
                <InfoTitleArea>
                  <PhoneIcon>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="xl"
                      style={{ color: '#ffffff' }}
                    />
                  </PhoneIcon>
                  <InfoTitle>Envie um email</InfoTitle>
                </InfoTitleArea>
                <InfoText>
                  Preencha o formulario e iremos te contatar dentro de 24 horas.
                </InfoText>
                <InfoText style={{ userSelect: 'text' }}>
                  Email: jpventurinisales@gmail.com
                </InfoText>
              </ContactArea>
            </div>
          </ContactInfoArea>
          <FormArea>
            <InputArea>
              <StyledInput>
                <input type="text" placeholder="Seu Nome" />
              </StyledInput>
              <StyledInput>
                <input type="text" placeholder="Seu Email" />
              </StyledInput>
              <StyledInput>
                <input type="text" placeholder="Seu Telefone" />
              </StyledInput>
            </InputArea>
            <TextInputArea>
              <TextArea type="text" placeholder="Sua Mensagem"></TextArea>
            </TextInputArea>
            <ButtonArea>
              <Button buttonText={'Enviar Mensagem'} />
            </ButtonArea>
          </FormArea>
        </ContactSection>
      </PageStyle>
    </>
  );
};
