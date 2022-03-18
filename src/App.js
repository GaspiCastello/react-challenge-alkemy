import { useContext } from "react";
import { Route, Navigate, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Routes>
        {authCtx.isLoggedIn && (
          <>
            <Route path="*" element={<Navigate replace to="/home" />} />
            <Route path="/home" element={<HomePage />} />
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
