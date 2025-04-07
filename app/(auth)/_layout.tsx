import { Redirect } from 'expo-router';

export default function AuthLayout() {
  return <Redirect href="/login/login" />;
}
