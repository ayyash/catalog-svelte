export const authGuard = ({ meta, route }) => {
  const isAuthenticated = true;
  if (meta.protected && !isAuthenticated) {
      return '/login'; // Redirect to the login route if not authenticated
  }
};
