import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ExclusiveIcon,
  HeaderLinks,
  IconArea,
  StyledHeader,
  StyledUserArea,
  UserOptionsSection,
  NavAreaMobile,
  StyledNavbarMobile,
  StyledSectionsMobile,
  UserOptionsSectionMobile,
  CheckIcon,
  IconMenu,
  Bar1,
  Bar2,
  Bar3,
} from './styles';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

function HeaderComponent() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isActived, setIsActived] = useState(false);

  const handleMenuToggle = () => setIsActived(!isActived);

  return (
    <StyledHeader>
      <ExclusiveIcon onClick={() => navigate('/')}>Exclusive</ExclusiveIcon>

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
          {user && (
            <IconArea>
              <FontAwesomeIcon
                onClick={() => navigate('/account')}
                icon={faUser}
                size="lg"
                style={{ color: '#000000' }}
              />
            </IconArea>
          )}
        </StyledUserArea>
      </UserOptionsSection>

      <CheckIcon
        id="check-icon"
        checked={isActived}
        onChange={handleMenuToggle}
      />
      <IconMenu htmlFor="check-icon">
        <Bar1 />
        <Bar2 />
        <Bar3 />
      </IconMenu>

      <AnimatePresence>
        {isActived && (
          <motion.div
            initial={{ opacity: 0, y: '-10px' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-10px' }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            style={{
              position: 'absolute',
              top: '70px',
              right: 0,
              width: '100%',
              zIndex: '999',
            }}
          >
            <NavAreaMobile>
              <UserOptionsSectionMobile>
                <StyledUserArea>
                  <IconArea>
                    <FontAwesomeIcon
                      onClick={() => navigate('/wishlist')}
                      icon={faHeart}
                      size="lg"
                      style={{ color: '#ffffff' }}
                    />
                  </IconArea>
                  <IconArea>
                    <FontAwesomeIcon
                      onClick={() => navigate('/cart')}
                      icon={faCartShopping}
                      size="lg"
                      style={{ color: '#ffffff' }}
                    />
                  </IconArea>
                  {user && (
                    <IconArea>
                      <FontAwesomeIcon
                        onClick={() => navigate('/account')}
                        icon={faUser}
                        size="lg"
                        style={{ color: '#ffffff' }}
                      />
                    </IconArea>
                  )}
                </StyledUserArea>
              </UserOptionsSectionMobile>
              <StyledNavbarMobile>
                <StyledSectionsMobile onClick={() => navigate('/')}>
                  Inicio
                </StyledSectionsMobile>
                <StyledSectionsMobile onClick={() => navigate('/contact')}>
                  Contato
                </StyledSectionsMobile>
                <StyledSectionsMobile onClick={() => navigate('/aboutus')}>
                  Sobre
                </StyledSectionsMobile>
                {!user && (
                  <StyledSectionsMobile onClick={() => navigate('/signup')}>
                    Inscrever-se
                  </StyledSectionsMobile>
                )}
              </StyledNavbarMobile>
            </NavAreaMobile>
          </motion.div>
        )}
      </AnimatePresence>
    </StyledHeader>
  );
}

export default HeaderComponent;
