import React from 'react';

const ScreenSizeMessage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white text-center p-4">
      <div>
        <h1 className="text-2xl font-bold mb-4">Please use a larger screen to view this website</h1>
        <p>This website is best experienced on a larger screen. Please switch to a desktop or laptop for the best viewing experience.</p>
      </div>
    </div>
  );
};

export default ScreenSizeMessage;
