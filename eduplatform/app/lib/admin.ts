export const ADMIN_CREDENTIALS = {
  email: 'admin@eduit.ln',
  password: 'admin123',
};

export function isAdminCredentialsValid(email: string, password: string) {
  return (
    email.trim().toLowerCase() === ADMIN_CREDENTIALS.email &&
    password === ADMIN_CREDENTIALS.password
  );
}
