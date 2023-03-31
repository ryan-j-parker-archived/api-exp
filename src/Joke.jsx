/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import './Joke.css';

function Joke() {
  const [joke, setJoke] = useState(null);
  const [showPunchline, setShowPunchline] = useState(false);
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    fetchJoke();
  }, []);

  useEffect(() => {
    if (!showPunchline) {
      const timer = setInterval(() => {
        setDotCount((prevDotCount) => (prevDotCount + 1) % 6);
      }, 500);
      return () => clearInterval(timer);
    }
  }, [showPunchline]);

  const fetchJoke = async () => {
    try {
      const response = await fetch(
        'https://official-joke-api.appspot.com/random_joke'
      );
      const joke = await response.json();
      setJoke(joke);
      console.log(joke);
      setShowPunchline(false);
      setTimeout(() => {
        setShowPunchline(true);
      }, 2000);
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  };

  // const showPunchline = () => {
  //   const punchline = document.getElementById('punchline');
  //   punchline.classList.remove('hidden');
  // };

  return (
    <>
      <div className="joke-wrapper">
        {joke ? (
          <div className="joke">
            <h4 className="type">category: {joke.type}</h4>
            <h2 className="setup">{joke.setup}</h2>
            {/* <h3 id="punchline" className="hidden">
              {joke.punchline}
            </h3> */}
            <div className="punchline-container">
              {showPunchline ? (
                <p id="punchline">{joke.punchline}</p>
              ) : (
                <p>
                  <span className="loading-dot">
                    {dotCount >= 1 ? '.' : ''}
                  </span>
                  <span className="loading-dot">
                    {dotCount >= 2 ? '.' : ''}
                  </span>
                  <span className="loading-dot">
                    {dotCount >= 3 ? '.' : ''}
                  </span>
                  <span className="loading-dot">
                    {dotCount >= 4 ? '.' : ''}
                  </span>
                  <span className="loading-dot">
                    {dotCount >= 5 ? '.' : ''}
                  </span>
                </p>
              )}
            </div>
          </div>
        ) : (
          <div>
            <h2>Loading...</h2>
          </div>
        )}

        <button
          onClick={() => {
            fetchJoke();
          }}
          className="next"
        >
          Another joke!
        </button>
      </div>
    </>
  );
}

export default Joke;
