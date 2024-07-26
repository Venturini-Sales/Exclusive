import {
  RedRectangle,
  SubTitle,
  SubTitleArea,
  Title,
  TitleArea,
} from './styles';

const SectionTitle = ({ titleText, subTitleText }) => {
  return (
    <TitleArea>
      <SubTitleArea>
        <RedRectangle></RedRectangle>
        <SubTitle>{subTitleText}</SubTitle>
      </SubTitleArea>
      <Title>{titleText}</Title>
    </TitleArea>
  );
};

export default SectionTitle;
