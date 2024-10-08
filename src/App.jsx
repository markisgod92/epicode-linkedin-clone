import { useState } from 'react'
import './App.css'
import { BasicLayout } from './components/basic-layout/BasicLayout'
import { SinglePost } from "./components/single-post/SinglePost";
import Navigation from "./components/navigation/Navigation";
import RightSideNews from "./components/RightSideNews/RightSide.jsx";

export const App = () => {
  return (
    <>
      <RightSideNews />
    <BasicLayout />
    <SinglePost />
     <Navigation />
    <RightSideNews />
    </>
  );
};
