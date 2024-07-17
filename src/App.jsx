import BandComponent from './components/BlackBand/BlackBand';
import HeaderComponent from './components/Header/HeaderComponent';
import FooterComponent from './components/Footer/FooterComponent';
import { createGlobalStyle } from 'styled-components';
import { RouteList } from './routes/RouteList';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    font-family: 'Inter',Arial, Helvetica, sans-serif;
}`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BandComponent />
      <HeaderComponent />
      <RouteList />
      <FooterComponent />
    </>
  );
}

export default App;
