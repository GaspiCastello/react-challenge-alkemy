import { Route, Navigate, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/add-recipe" element={<SearchPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
