import SliderAlt from '../../components/SliderAlt/SliderAlt';
import {
  ListElementStyle,
  ListStyle,
  PageSection,
  PageStyle,
  SlideStyle,
} from './styles';
import IMG from '../../assets/images/Frame.png';

export const HomePage = () => {
  return (
    <PageStyle>
      <PageSection>
        <ListStyle>
          <ListElementStyle>
            Moda feminina
            <svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z"
                fill="black"
              />
            </svg>
          </ListElementStyle>
          <ListElementStyle>
            Moda masculina
            <svg
              width="8"
              height="13"
              viewBox="0 0 8 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.95 6.63597L0 1.68597L1.414 0.271973L7.778 6.63597L1.414 13L0 11.586L4.95 6.63597Z"
                fill="black"
              />
            </svg>
          </ListElementStyle>
          <ListElementStyle>Eletronicos</ListElementStyle>
          <ListElementStyle>Casa e Bem-Estar</ListElementStyle>
          <ListElementStyle>Medicina</ListElementStyle>
          <ListElementStyle>Esportes e Atividades</ListElementStyle>
          <ListElementStyle>Bebês e Brinquedos</ListElementStyle>
          <ListElementStyle>Saúde e Beleza</ListElementStyle>
        </ListStyle>
        <SliderAlt>
          <SlideStyle>
            <img src={IMG} />
          </SlideStyle>
          <SlideStyle>
            <img src={IMG} />
          </SlideStyle>
          <SlideStyle>
            <img src={IMG} />
          </SlideStyle>
          <SlideStyle>
            <img src={IMG} />
          </SlideStyle>
          <SlideStyle>
            <img src={IMG} />
          </SlideStyle>
        </SliderAlt>
      </PageSection>
    </PageStyle>
  );
};
