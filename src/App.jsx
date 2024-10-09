import { useState } from "react";
import "./App.css";
import { BasicLayout } from "./components/basic-layout/BasicLayout";
import { SinglePost } from "./components/single-post/SinglePost";
import Navigation from "./components/navigation/Navigation";
import RightSideNews from "./components/RightSideNews/RightSide.jsx";
import Footer from "./components/basic-layout/right-sidebar-footer-block/Footer";
import PostModalButton from "./components/create-post-modal/PostModalButton";

export const App = () => {



  return (
    <>
      <RightSideNews />
    <BasicLayout />
    <SinglePost />
     <Navigation />
     <PostModalButton/>
    <RightSideNews />
    <Footer />
    </>
  );
};
