import { createContext, useEffect, useState } from "react";

const endpoint = "https://striveschool-api.herokuapp.com/api/profile/me";
const endpointUsers = "https://striveschool-api.herokuapp.com/api/profile";
const antoApiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzA2YzQ0ZGI3MzZmYjAwMTU4ZjAwZjUiLCJpYXQiOjE3Mjg0OTkwNzMsImV4cCI6MTcyOTcwODY3M30._O5UH9bS5xD9YASILty-hi_N34QeO7R8OMvXcgD_uaw";

export const MyProfileContext = createContext();

export const MyProfileProvider = ({ children }) => {
  const [myProfile, setMyProfile] = useState(null);
  const [myProfileError, setMyProfileError] = useState(false);
  const [myProfileLoading, setMyProfileLoading] = useState(false);
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  console.log(posts)

  const getMyProfileFromApi = async () => {
    try {
      setMyProfileLoading(true);
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${antoApiKey}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setMyProfile(data);
    } catch (error) {
      console.log(error);
      setMyProfileError(error.message)
    }
    finally {
        setMyProfileLoading(false)
    }
  };

  /* const getProfiles = async () => {
    try {
      const response = await fetch(endpointUsers, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${antoApiKey}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setUsers(data)
    } catch (error) {
      console.log(error);
    }
  }

  const getPosts = async () => {
    try {
      const response = await fetch('https://dummyjson.com/posts')
      const data = await response.json()
      setPosts(data.posts)
    } catch (error) {
      console.error(error)
    }
  } */

  /* const getCompletePosts = async () => {
    let results = []

    const profilesResponse = await fetch(endpointUsers, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${antoApiKey}`,
        "Content-Type": "application/json",
      },
    });

    const postsResponse = await fetch('https://dummyjson.com/posts')

    try {
      const [profilesData, postsData] = Promise.all([profilesResponse, postsResponse])
      
      const test1 = await profilesData.json()
      const test2 = await postsData.json()
      const merged = {
        test1, 
        test2
      }

      console.log(merged)
      
      postsData.map((post, i) => {
        results.push({
          user: profilesData[i],
          post: post
        })
      })

      setPosts(results)
    } catch (e) {
      console.error(e)
    }
  } */

  const getComplete = async () => {
    let merged = []

    const profilesResponse = await fetch(endpointUsers, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${antoApiKey}`,
        "Content-Type": "application/json",
      },
    });

    const postsResponse = await fetch('https://dummyjson.com/posts')

    const [profilesData, postsData] = await Promise.all([profilesResponse, postsResponse])

    const profiles = await profilesData.json()
    const postsFetched = await postsData.json()

    postsFetched.posts.map((post, i) => {
      merged.push({
        user: profiles[i],
        post: post
      })
    })

    setPosts(merged)
  }



  useEffect(() => {
    getMyProfileFromApi()
    getComplete()
  }, [])

  return (
    <MyProfileContext.Provider value={{ myProfile, myProfileError, setMyProfileError, myProfileLoading, setMyProfileLoading, posts, users}}>
      {children}
    </MyProfileContext.Provider>
  );
};
