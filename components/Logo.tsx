import Image from 'next/image';
import TrelloImage from '../images/Trello.svg';

const Logo = () => {
  return <Image src={TrelloImage} alt="trello" width={126} height={36}></Image>;
};

export default Logo;
