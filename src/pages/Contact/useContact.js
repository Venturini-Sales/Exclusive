import { useState } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const useContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [cellphone, setCellphone] = useState('');

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const regex = /^[0-9()+-\s]*$/;

    if (regex.test(value)) {
      setCellphone(value);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || message === '' || cellphone === '') {
      toast.warning('Preencha todos os campos');
      return;
    }

    const templateParams = {
      from_name: name,
      message,
      email,
      cellphone,
    };

    emailjs
      .send(
        'service_30h19fz',
        'template_9ia9kdx',
        templateParams,
        'YWSfj3h8senTL6N1j'
      )
      .then(
        (response) => {
          toast.success('Email Enviado');
          console.log(response.status, response.text);
          setName('');
          setEmail('');
          setMessage('');
          setCellphone('');
        },
        (err) => {
          toast.error('Algo deu errado');
          console.log('ERROR: ', err);
        }
      );
  };

  return {
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    cellphone,
    setCellphone,
    handlePhoneChange,
    sendEmail,
  };
};

export default useContact;
