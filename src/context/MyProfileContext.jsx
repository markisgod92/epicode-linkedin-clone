import { createContext, useEffect, useState } from "react";

const endpoint = "https://striveschool-api.herokuapp.com/api/profile/me";
const antoApiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzA2YzQ0ZGI3MzZmYjAwMTU4ZjAwZjUiLCJpYXQiOjE3Mjg0OTkwNzMsImV4cCI6MTcyOTcwODY3M30._O5UH9bS5xD9YASILty-hi_N34QeO7R8OMvXcgD_uaw";

export const MyProfileContext = createContext();

export const MyProfileProvider = ({ children }) => {
  const [myProfile, setMyProfile] = useState(null);
  const [myProfileError, setMyProfileError] = useState(false);
  const [myProfileLoading, setMyProfileLoading] = useState(false);

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

  useEffect(() => {
    getMyProfileFromApi()
  }, [])

  return (
    <MyProfileContext.Provider value={{ myProfile, myProfileError, setMyProfileError, myProfileLoading, setMyProfileLoading}}>
      {children}
    </MyProfileContext.Provider>
  );
};
