import { useContext } from "react";
import { Route, Navigate, Routes } from "react-router-dom";

import AuthContext from "./store/auth-context";
import Layout from "./components/Layout/Layout";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Routes>
        {authCtx.isLoggedIn && (
          <>
            <Route path="*" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/add-recipe" element={<SearchPage />} />
          </>
        )}
        {!authCtx.isLoggedIn && (
          <>
            <Route path="*" element={<Navigate replace to="/auth" />} />
            <Route path="/auth" element={<AuthPage />} />
          </>
        )}
      </Routes>
    </Layout>
  );
}

export default App;
