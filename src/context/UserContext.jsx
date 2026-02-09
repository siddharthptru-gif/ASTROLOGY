import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(() => {
    const savedProfile = localStorage.getItem('palm_reader_user');
    return savedProfile ? JSON.parse(savedProfile) : {
      name: '',
      dob: '',
      timeOfBirth: '',
      gender: '',
      zodiacSign: '',
      palmImages: {
        left: null,
        right: null
      },
      hasCompletedProfile: false
    };
  });

  // Persist user profile changes
  useEffect(() => {
    localStorage.setItem('palm_reader_user', JSON.stringify(userProfile));
  }, [userProfile]);

  const updateUserProfile = (data) => {
    setUserProfile(prev => ({
      ...prev,
      ...data,
      hasCompletedProfile: true // Mark as complete once updated
    }));
  };

  const savePalmImage = (hand, imageUrl) => {
    setUserProfile(prev => ({
      ...prev,
      palmImages: {
        ...prev.palmImages,
        [hand]: imageUrl
      }
    }));
  };

  const clearUserData = () => {
    localStorage.removeItem('palm_reader_user');
    setUserProfile({
      name: '',
      dob: '',
      timeOfBirth: '',
      gender: '',
      zodiacSign: '',
      palmImages: { left: null, right: null },
      hasCompletedProfile: false
    });
  };

  return (
    <UserContext.Provider 
      value={{ 
        userProfile, 
        updateUserProfile, 
        savePalmImage, 
        clearUserData 
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
