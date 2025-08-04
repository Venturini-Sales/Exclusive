import { useNavigate } from 'react-router-dom';
import { StyledHeader, StyledInput } from './styles';
import useAuth from '../../hooks/useAuth';

function HeaderComponent() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <StyledHeader>
      <div onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        Exclusive
      </div>

      <div>
        <ul>
          <li onClick={() => navigate('/')}>Inicio</li>
          <li onClick={() => navigate('/contact')}>Contato</li>
          <li onClick={() => navigate('/aboutus')}>Sobre</li>
          <li onClick={() => navigate(user ? '/account' : '/signup')}>
            {user ? 'Conta' : 'Inscrever-se'}
          </li>
        </ul>
      </div>

      <div>
        <StyledInput>
          <input type="text" placeholder="O que você está buscando?" />
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 17L13.2223 13.2156M15.3158 8.15789C15.3158 10.0563 14.5617 11.8769 13.2193 13.2193C11.8769 14.5617 10.0563 15.3158 8.15789 15.3158C6.2595 15.3158 4.43886 14.5617 3.0965 13.2193C1.75413 11.8769 1 10.0563 1 8.15789C1 6.2595 1.75413 4.43886 3.0965 3.0965C4.43886 1.75413 6.2595 1 8.15789 1C10.0563 1 11.8769 1.75413 13.2193 3.0965C14.5617 4.43886 15.3158 6.2595 15.3158 8.15789V8.15789Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </StyledInput>
      </div>
    </StyledHeader>
  );
}

export default HeaderComponent;
