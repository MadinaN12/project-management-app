import Image from 'next/image';
import TrelloImage from '../images/Trello.svg';
import { ILogoInterface } from '../types/types';
import styles from '../styles/form/Registration.module.scss';

const Logo = (props: ILogoInterface) => {
  return <Image className={styles.trelloImage} src={TrelloImage} alt="trello" {...props}></Image>;
};

export default Logo;
