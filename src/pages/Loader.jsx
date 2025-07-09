import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="p-4 rounded-full border-4 border-white shadow-[0_0_40px_10px_#00ff00] animate-pulse">
        <img
          src="/images/pxfuel.jpg"  // ✅ Ensure it's inside public/images/
          alt="Loading..."
          className="w-32 h-32 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default Loader;
