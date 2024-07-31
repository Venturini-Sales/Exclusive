import { Card, CardText } from './Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CategoryCard = ({ text, iconChildren }) => {
  return (
    <Card>
      <FontAwesomeIcon
        className='icon'
        size="2xl"
        icon={iconChildren}
      />
      <CardText>{text}</CardText>
    </Card>
  );
};

export default CategoryCard;
