import React, { useState, useEffect } from 'react';

function ReactHooks() {
  const [image, setImage] = useState(); 

  
  const changeImage = () => {
    fetch("https://randomfox.ca/floof/") 
      .then((response) => response.json()) 
      .then((data) => {
        setImage(data.image); 
      })
      .catch((error) => console.error('Error fetching image:', error)); 
  };

  useEffect(() => {
    
    changeImage();
  
  }, []); 

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <h2>My Images</h2>
      
       <img className='h-60 w-100' src={image} alt="Random Fox" /> 
      
      <button onClick={changeImage}>Next Image</button>
    </div>
  );
}

export default ReactHooks;
