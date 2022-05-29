import Link from 'next/link';
import { IAdditionalMenu } from '../../types/registrationTypes';
import styles from '../../styles/form/Form.module.scss';

const AdditionalMenu = ({ isLogin, children }: IAdditionalMenu) => {
  return (
    <ul className={styles.formLinks}>
      <li className={styles.formLinkText}>{children}</li>
      <li className={styles.formLinkText}>
        {isLogin ? <Link href={'/signup'}>Sign up</Link> : <Link href={'/login'}>Log in</Link>}
      </li>
    </ul>
  );
};

export default AdditionalMenu;
