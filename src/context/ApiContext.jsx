import { createContext } from "react";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;

  const PROFILES_URL = "https://striveschool-api.herokuapp.com/api/profile/";
  /*
    lista profili utente, 
    +userId per profilo specifico, 
    put x aggiornamento profilo utente (EXTRA)
    /:userId/experiences per lista di esperienze - anche post per creare nuova esperienza (solo su personale)
    /:userId/experience/:expId ritorna una specifica esperienza, put per modificare, delete
    /:userId/picture sostituisce immagine del profilo
    /:userId/experience/:expId/picture aggiunge immagine ad experience
    */
  const SELF_PROFILE_URL =
    "https://striveschool-api.herokuapp.com/api/profile/me"; //mio profilo

  /* modello esperienza:
    {
        "role": "CTO",
        "company": "Strive School",
        "startDate": "2019-06-16",
        "endDate": "2019-06-16",    --null se ancora in corso
        "description": "Doing stuff",
        "area": "Berlin"
    }
    */

  return <ApiContext.Provider value={{}}>{children}</ApiContext.Provider>;
};
