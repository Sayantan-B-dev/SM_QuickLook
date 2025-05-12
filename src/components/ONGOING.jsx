import React from 'react';
import CircularText from "./Animations/CircularText";
import { useNavigate } from 'react-router-dom';

function ONGOING() {
  const navigate = useNavigate();
  function handleLink() {
    navigate('/diploma-java');
  }
  return (
    <div style={{ minHeight: '100vh' }} className="bg-gray-900 flex items-center justify-center">
      <div
        className="bg-gray-800 rounded-2xl shadow-lg text-center text-white max-w-md w-full"
        style={{ padding: '2.5rem' }} 
      >
        <h1
          className="text-4xl font-bold animate-pulse text-indigo-400"
          style={{ marginBottom: '1rem' }} 
        >
          🚧 Ongoing Page
        </h1>
        <p
          className="text-lg text-gray-300"
          style={{ marginBottom: '1.5rem' }}
        >
          This page is currently under construction. We’re working hard to bring you something amazing! Meanwhile you can check <br /><a onClick={handleLink} style={{textDecoration:"underline",cursor:"pointer"}}>Diploma page</a> <br /><span style={{fontSize:"10px"}}>(You can also navigate to the component through top-left buttons)</span>
        </p>
        <div className="flex justify-center">
          <CircularText
            text="WORK-ONGOING***"
            onHover="pause"
            spinDuration={10}
          />
        </div>
        <p
          className="text-sm text-gray-400"
          style={{ marginTop: '1.5rem' }} 
        >
          Stay tuned for updates. Thank you for your patience!
        </p>
      </div>
    </div>
  );
}

export default ONGOING;
