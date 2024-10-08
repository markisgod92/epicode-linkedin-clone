import { useState } from 'react'
import './App.css'
import { BasicLayout } from './components/basic-layout/BasicLayout'
import { SinglePost } from "./components/single-post/SinglePost";
import Navigation from "./components/navigation/Navigation";

export const App = () => {
  return (
    <>
    <BasicLayout />
    <SinglePost />
     <Navigation />
    </>
  );
};
