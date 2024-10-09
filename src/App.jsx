import { useState } from 'react'
import './App.css'
import LeftSidebar  from './components/basic-layout/leftsidebar/LeftSidebar.jsx'
import { BasicLayout } from './components/basic-layout/BasicLayout'
import { SinglePost } from "./components/single-post/SinglePost";
import Navigation from "./components/navigation/Navigation";
import RightSideNews from "./components/RightSideNews/RightSide.jsx";
import Footer from "./components/basic-layout/right-sidebar-footer-block/Footer";

export const App = () => {
  return (
    <>
      <RightSideNews />
    <BasicLayout />
    <SinglePost />
     <Navigation />
    <RightSideNews />
    <Footer />
    <LeftSidebar />
    </>
  );
};
