import { StyledForm, StyledFormArea } from './styles';

function FormComponent({ children, title, subTitle, onSubmit }) {
  return (
    <StyledForm onSubmit={onSubmit}>
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
      <StyledFormArea>{children}</StyledFormArea>
    </StyledForm>
  );
}

export default FormComponent;
