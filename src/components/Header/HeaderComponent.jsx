import { useNavigate } from 'react-router-dom';
import {
  ExclusiveIcon,
  HeaderLinks,
  IconArea,
  StyledHeader,
  StyledUserArea,
  UserOptionsSection,
} from './styles';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';

function HeaderComponent() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <StyledHeader>
      <ExclusiveIcon
        onClick={() => navigate('/')}
        style={{ cursor: 'pointer' }}
      >
        Exclusive
      </ExclusiveIcon>

      <HeaderLinks>
        <ul>
          <li onClick={() => navigate('/')}>Inicio</li>
          <li onClick={() => navigate('/contact')}>Contato</li>
          <li onClick={() => navigate('/aboutus')}>Sobre</li>
          <li onClick={() => navigate(user ? '/account' : '/signup')}>
            {user ? '' : 'Inscrever-se'}
          </li>
        </ul>
      </HeaderLinks>

      <UserOptionsSection>
        {user ? (
          <StyledUserArea>
            <IconArea>
              <FontAwesomeIcon
                onClick={() => navigate('/wishlist')}
                icon={faHeart}
                size="lg"
                style={{ color: '#000000' }}
              />
            </IconArea>
            <IconArea>
              <FontAwesomeIcon
                onClick={() => navigate('/cart')}
                icon={faCartShopping}
                size="lg"
                style={{ color: '#000000' }}
              />
            </IconArea>
            <IconArea>
              <FontAwesomeIcon
                onClick={() => navigate('/account')}
                icon={faUser}
                size="lg"
                style={{ color: '#000000' }}
              />
            </IconArea>
          </StyledUserArea>
        ) : (
          <StyledUserArea>
            <IconArea>
              <FontAwesomeIcon
                onClick={() => navigate('/wishlist')}
                icon={faHeart}
                size="lg"
                style={{ color: '#000000' }}
              />
            </IconArea>
            <IconArea>
              <FontAwesomeIcon
                onClick={() => navigate('/cart')}
                icon={faCartShopping}
                size="lg"
                style={{ color: '#000000' }}
              />
            </IconArea>
          </StyledUserArea>
        )}
      </UserOptionsSection>
    </StyledHeader>
  );
}

export default HeaderComponent;
