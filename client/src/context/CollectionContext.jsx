import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const CollectionContext = createContext();

const CollectionProvider = (props) => {

  const [collection, setCollection] = useState(null);
  useEffect(() => {
    const fetchAllCardData = async () => {
      const {data} = await axios({method: 'get', baseURL: process.env.REACT_APP_COLLECTIONSERVER, url: '/all'});
      console.log(data);
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