import React, { useEffect } from "react";

const RunningProgressBar = ({ progress, setProgress }) => {
  
  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 1);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [progress, setProgress]);

  return (
    <div className="w-full h-0.5 bg-gray-300 mt-2">
      <div
        style={{ width: `${progress}%` }}
        className="h-full bg-blue-600"
      ></div>
    </div>
  );
};

export default RunningProgressBar;
