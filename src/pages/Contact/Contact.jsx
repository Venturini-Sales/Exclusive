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
  HiddenLabel,
} from './styles';
import Button from '../../components/Button/Button';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import useContact from './useContact';

export const ContactPage = () => {
  const {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    cellphone,
    handlePhoneChange,
    sendEmail,
  } = useContact();

  return (
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
              <InfoText>Estamos disponíveis 24 horas por dia.</InfoText>
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
                Preencha o formulário e iremos te contatar dentro de 24 horas.
              </InfoText>
              <InfoText style={{ userSelect: 'text' }}>
                Email: jpventurinisales@gmail.com
              </InfoText>
            </ContactArea>
          </div>
        </ContactInfoArea>

        <FormArea onSubmit={sendEmail}>
          <InputArea>
            <StyledInput>
              <HiddenLabel htmlFor="name">Nome</HiddenLabel>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Seu Nome"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </StyledInput>
            <StyledInput>
              <HiddenLabel htmlFor="email">Email</HiddenLabel>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Seu Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </StyledInput>
            <StyledInput>
              <HiddenLabel htmlFor="cellphone">Telefone</HiddenLabel>
              <input
                id="cellphone"
                type="text"
                name="cellphone"
                placeholder="Seu Telefone"
                onChange={handlePhoneChange}
                value={cellphone}
              />
            </StyledInput>
          </InputArea>

          <TextInputArea>
            <HiddenLabel htmlFor="message">Mensagem</HiddenLabel>
            <TextArea
              id="message"
              type="text"
              name="message"
              placeholder="Sua Mensagem"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </TextInputArea>

          <ButtonArea>
            <Button type="submit" buttonText={'Enviar Mensagem'} />
          </ButtonArea>
        </FormArea>
      </ContactSection>
    </PageStyle>
  );
};
