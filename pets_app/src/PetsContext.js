import React from 'react';

const PetsContext = React.createContext();
const PetsProvider = PetsContext.Provider;
const PetsConsumer = PetsContext.Consumer;

export {PetsProvider, PetsConsumer};