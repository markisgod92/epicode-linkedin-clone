import "./App.css";
import { BasicLayout } from "./components/basic-layout/BasicLayout";
import Footer from "./components/basic-layout/right-sidebar-footer-block/Footer";
import Navigation from "./components/navigation/Navigation";
import RightSideNews from "./components/RightSideNews/RightSide.jsx";
import { SinglePost } from "./components/single-post/SinglePost";

export const App = () => {
  return (
    <>
      <RightSideNews />
      <BasicLayout />
      <SinglePost />
      <Navigation />
      <RightSideNews />
      <Footer />
    </>
  );
};
