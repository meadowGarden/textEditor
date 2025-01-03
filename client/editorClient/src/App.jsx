import "./App.css";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/NavBar";
import TestPage01 from "./pages/testPages/TestPage01";
import TestPage02 from "./pages/testPages/TestPage02";
import TestPage03 from "./pages/testPages/TestPage03";
import TestPage04 from "./pages/testPages/TestPage04";
import HomePage from "./pages/homePage/HomePage";
import UserListPage from "./pages/userListPage/UserListPage";
import DocumentListPage from "./pages/documentListPage/DocumentListPage";
import DocumentPage from "./pages/documentPage/DocumentPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import RegisterPage from "./pages/registerPage/RegisterPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/users" element={<UserListPage />} />
        <Route path="/documents/" element={<DocumentListPage />} />
        <Route path="/documents/:documentID" element={<DocumentPage />} />
        <Route path="/*" element={<NotFoundPage />} />

        <Route path="/test01" element={<TestPage01 />} />
        <Route path="/test02" element={<TestPage02 />} />
        <Route path="/test03" element={<TestPage03 />} />
        <Route path="/test04" element={<TestPage04 />} />
      </Routes>
    </>
  );
}

export default App;
