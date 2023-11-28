import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { Search } from "./pages/search/Search";
import { Login } from "./pages/login/Login";
import { SignUp } from "./pages/signUp/SignUp";
import { PageNotFound } from "./pages/pageNotFound/PageNotFound";
import { GlobalStyled } from "./style/GlobalStyled";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const Router = () => {
  return (
    <HashRouter>
      <GlobalStyled />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
};
