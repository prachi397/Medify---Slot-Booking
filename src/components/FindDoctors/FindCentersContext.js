import React, { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const FindCentersContext = createContext();

export const FindCentersProvider = ({ children }) => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [doctorsData, setDoctorsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const location = useLocation(); // Get the current route

  useEffect(() => {
    // Reset data when navigating away from FindDoctors page
    if (location.pathname !== "/find-doctors") {
      setSelectedState("");
      setSelectedCity("");
      setDoctorsData([]);
      setIsLoading(false);
    }
  }, [location.pathname]); // Re-run whenever the route changes

  return (
    <FindCentersContext.Provider
      value={{
        selectedState,
        setSelectedState,
        selectedCity,
        setSelectedCity,
        doctorsData,
        setDoctorsData,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </FindCentersContext.Provider>
  );
};
