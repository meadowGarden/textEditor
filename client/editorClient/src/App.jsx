import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DocumentPage from "./pages/DocumentPage";
import NotFoundPage from "./pages/NotFoundPage";
import DocumentListPage from "./pages/DocumentListPage";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/NavBar";
import UserListPage from "./pages/userListPage/UserListPage";
import TestPage01 from "./pages/testPages/TestPage01";
import TestPage02 from "./pages/testPages/TestPage02";
import TestPage03 from "./pages/testPages/TestPage03";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UserListPage />} />
        <Route path="/documents/" element={<DocumentListPage />} />
        <Route path="/documents/:documentID" element={<DocumentPage />} />
        <Route path="/*" element={<NotFoundPage />} />

        <Route path="/test01" element={<TestPage01 />} />
        <Route path="/test02" element={<TestPage02 />} />
        <Route path="/test03" element={<TestPage03 />} />
      </Routes>
    </>
  );
}

export default App;
