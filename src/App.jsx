import { useState } from 'react';
import Menu from './scenes/Menu';
import Opening from './scenes/Opening';
import MapScreen from './scenes/MapScreen';

function App() {
  const [screen, setScreen] = useState('map'); // menu | opening | map

  return (
    <>
      {screen === 'menu' && <Menu onStart={() => setScreen('opening')} />}
      {screen === 'opening' && <Opening onFinish={() => setScreen('map')} />}
      {screen === 'map' && <MapScreen />}
    </>
  );
}

export default App;
