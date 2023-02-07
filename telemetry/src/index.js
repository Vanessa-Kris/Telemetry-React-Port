import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Layout/Navbar'

function FavoriteColor() {

  return (
   <>
     <Navbar/>
     </>   
      
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);