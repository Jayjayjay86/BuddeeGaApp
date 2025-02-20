import React, {createContext, useContext, useEffect, useState} from 'react';
const EntitlementContext = createContext();


export const useEntitlement = () => useContext(EntitlementContext);

export const EntitlementProvider = ({children, userEntitlement}) => {

  const [entitlement, setEntitlement] = useState(userEntitlement ? userEntitlement:0 );
 
  const toggleEntitlement = (entitlementScore) => {
    setEntitlement(entitlementScore);
   
  };

  useEffect(() => {
    if (userEntitlement) {
      toggleEntitlement(userEntitlement);
    }
  }, [userEntitlement]);
  
  return (
    <EntitlementContext.Provider value={{entitlement, toggleEntitlement}}>
      {children}
    </EntitlementContext.Provider>
  );
};
