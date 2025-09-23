import { BrowserRouter, useRoutes } from "react-router-dom";
import { AuthProvider } from "./modules/auth/context/AuthContext";
import authRoutes from "./modules/auth/routesAuth";
import homeRoutes from "./modules/home/routesHome";

function AppRoutes() {
  const routes = [
    ...authRoutes,
    ...homeRoutes,
  ];
  return useRoutes(routes);
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
