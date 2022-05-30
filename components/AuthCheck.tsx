import { useRouter } from 'next/router';
// import { AuthProps } from '../types/types';
import { getToken } from '../utils';

export const AuthCheck = () => {
  const router = useRouter();
  const token = getToken();
  if (typeof window !== 'undefined' && token === null) router.push('/boards');

  // return props?.children || <pre></pre>;
};
