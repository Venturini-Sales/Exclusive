import { Skeleton } from '@mui/material';
import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import BandComponent from './components/BlackBand/BlackBand';
import HeaderComponent from './components/Header/HeaderComponent';
import FooterComponent from './components/Footer/FooterComponent';
import { RouteList } from './routes/RouteList';
import { AuthProvider } from './contexts/auth';
import { Slide, ToastContainer } from 'react-toastify';
import ScrollToTop from './hooks/scrollToTop';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    font-family: 'Inter',Arial, Helvetica, sans-serif;
}`;

const ProductModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
`;

const ImageWrapper = styled.div`
  width: 45%;
  max-width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

function App() {
  const [showDiv, setShowDiv] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const handleEyeClick = (imageSrc) => {
    setModalImage(imageSrc);
    setShowDiv(true);
    setLoaded(false);
  };

  const handleCloseModal = () => {
    setShowDiv(false);
    setModalImage(null);
  };

  return (
    <>
      {showDiv && (
        <ProductModal onClick={handleCloseModal}>
          <ImageWrapper>
            {!loaded && (
              <Skeleton variant="rectangular" width="100%" height={400} />
            )}
            <StyledImage
              src={modalImage}
              alt="Imagem do Produto"
              onLoad={() => setLoaded(true)}
              style={{ display: loaded ? 'block' : 'none' }}
            />
          </ImageWrapper>
        </ProductModal>
      )}
      <AuthProvider>
        <GlobalStyle />
        <BandComponent />
        <HeaderComponent />
        <RouteList handleEyeClick={handleEyeClick} />
        <ScrollToTop />
        <FooterComponent />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="colored"
          transition={Slide}
        />
      </AuthProvider>
    </>
  );
}

export default App;
