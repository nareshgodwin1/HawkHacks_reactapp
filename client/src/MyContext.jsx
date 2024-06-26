import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [userId, setUserId] = useState('');


  return (
    <MyContext.Provider value={{ userId, setUserId }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };






const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState({
    one: ['', ''],
    two: ['', ''],
    three: ['', ''],
  })

  return (
    <FeedbackContext.Provider value={{ feedback, setFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export { FeedbackContext, FeedbackProvider };





const PointsContext = createContext();

const PointsProvider = ({ children }) => {
  const [userPoints, setUserPoints] = useState(0);

  return (
    <PointsContext.Provider value={{ userPoints, setUserPoints }}>
      {children}
    </PointsContext.Provider>
  );
};

export { PointsContext, PointsProvider };