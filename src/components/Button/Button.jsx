import { StyledButton } from './styles';

function Button({ buttonText, onClick }) {
  return <StyledButton onClick={onClick}>{buttonText}</StyledButton>;
}

export default Button;
