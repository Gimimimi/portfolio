import { useContext } from 'react';
import './App.css';
import ParticlesContext from './contexts/particles-context';
import Particles from '@tsparticles/react'

function App() {
  const particlesCtx = useContext(ParticlesContext)

  let particles = null
  if (particlesCtx.isEngineOn){
    particles = (
      <Particles
        id="tsparticles"
        particlesLoaded={(container)=>{console.log(container)}}
        options={particlesCtx.options}
      />
    )
  }

  return (
    <div className="App">
      {particles}
    </div>
  );
}

export default App;
