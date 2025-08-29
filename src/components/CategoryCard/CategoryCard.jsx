import { Card, CardText } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CategoryCard = ({ text, iconChildren, onClick }) => {
  return (
    <Card onClick={onClick}>
      <FontAwesomeIcon className="icon" size="2xl" icon={iconChildren} />
      <CardText>{text}</CardText>
    </Card>
  );
};

export default CategoryCard;
