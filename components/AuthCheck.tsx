import { useRouter } from 'next/router';
import { AuthProps } from '../types/types';
import { getToken } from '../utils';

export const AuthCheck = (props: AuthProps) => {
  const router = useRouter();
  const token = getToken();
  if (typeof window !== 'undefined' && token === null) router.push('/');

  return props.children;
};
