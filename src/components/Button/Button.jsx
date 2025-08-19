import { StyledButton } from './styles';

function Button({ buttonText, onClick, type }) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {buttonText}
    </StyledButton>
  );
}

export default Button;
