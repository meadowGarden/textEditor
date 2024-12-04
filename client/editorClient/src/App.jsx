import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DocumentPage from "./pages/DocumentPage";
import NotFoundPage from "./pages/NotFoundPage";
import DocumentListPage from "./pages/DocumentListPage";
import "bootstrap/dist/css/bootstrap.min.css";
import TestPage from "./pages/TestPage";
import NavBar from "./components/navbar/NavBar";
import UserListPage from "./pages/userListPage/UserListPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UserListPage />} />
        <Route path="/documents/" element={<DocumentListPage />} />
        <Route path="/documents/:documentID" element={<DocumentPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
