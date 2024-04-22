import React, { createContext, useEffect, useState } from 'react';
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"
import options from './particleOptionsDefault'

const ParticlesContext = createContext({
  isEngineOn: false,
  options: {}
})

export const ParticlesContextProvider = ({ children }) => {
  const [ isEngineOn, setIsEngineOn ] = useState(false)

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setIsEngineOn(true);
    });
  }, []);

  return (
    <ParticlesContext.Provider value = {{isEngineOn: isEngineOn, options: options}}>
      {children}
    </ParticlesContext.Provider>
  )
}

export default ParticlesContext;