import React from 'react';

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-y-[105px] right-0 w-full h-screen bg-black justify-center bg-opacity-50 flex z-20">
      <div className="bg-transparent p-1 rounded-lg">
        <button onClick={onClose} className="absolute z-50 top-0 right-0 mt-2 mr-2 text-xl">&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;