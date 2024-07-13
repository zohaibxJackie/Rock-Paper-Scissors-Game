import React, { createContext, useState } from 'react';

export const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
    const initialScore = () => {
        const savedScore = localStorage.getItem('score');
        return savedScore ? JSON.parse(savedScore) : 0;
    };

    const [score, setScore] = useState(initialScore);

    const updateScore = (newScore) => {
        setScore(newScore);
        localStorage.setItem('score', JSON.stringify(newScore));
    };

    return (
        <ScoreContext.Provider value={{ score, setScore: updateScore }}>
            {children}
        </ScoreContext.Provider>
    );
};
