import React, { useState, createContext, useEffect } from 'react';

export const CollectionContext = createContext();

const CollectionProvider = (props) => {

  const [collection, setCollection] = useState(null);
  useEffect(() => {
    
  }, []);


  return (
    <CollectionContext.Provider value={{
      collection
    }}> 
      {props.children}
    </CollectionContext.Provider>
  )
}

export default CollectionProvider;