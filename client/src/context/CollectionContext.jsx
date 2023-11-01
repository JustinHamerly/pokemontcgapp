import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const CollectionContext = createContext();

const CollectionProvider = (props) => {

  const [collection, setCollection] = useState(null);
  useEffect(() => {
    const fetchAllCardData = async () => {
      const {data} = await axios({method: 'get', baseURL: process.env.COLLECTIONSERVER, url: '/all'});
      setCollection(data);
    }
    fetchAllCardData();
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