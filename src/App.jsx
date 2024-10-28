import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const App = () => {
  // Lista de canales M3U8
  const channels = [
    { name: 'AE Mundo', url: 'http://181.188.234.21:8000/play/a043/index.m3u8' },
    { name: 'AXN', url: 'http://181.188.234.21:8000/play/a04h/index.m3u8' },
    { name: 'Animal Planet', url: 'http://181.188.234.21:8000/play/a03x/index.m3u8' },
    { name: 'CNN Espanol', url: 'http://181.188.234.21:8000/play/a05p/index.m3u8' },
    { name: 'Canal Estrellas', url: 'http://181.188.234.21:8000/play/a044/index.m3u8' },
    { name: 'Cartoon Network', url: 'http://181.188.234.21:8000/play/a03e/index.m3u8' },
    { name: 'Cinecanal', url: 'http://181.188.234.21:8000/play/a022/index.m3u8' },
    { name: 'Cinemax', url: 'http://181.188.234.21:8000/play/a04f/index.m3u8' },
    { name: 'Discovery Channel', url: 'http://181.188.234.21:8000/play/a03w/index.m3u8' },
    { name: 'Discovery ID', url: 'http://181.188.234.21:8000/play/a05g/index.m3u8' },
    { name: 'Discovery Kids', url: 'http://181.188.234.21:8000/play/a05o/index.m3u8' },
    { name: 'Discovery Turbo', url: 'http://181.188.234.21:8000/play/a04l/index.m3u8' },
    { name: 'Disney Channel', url: 'http://181.188.234.21:8000/play/a03v/index.m3u8' },
    { name: 'Disney Jr', url: 'http://181.188.234.21:8000/play/a05q/index.m3u8' },
    { name: 'E Entertainment', url: 'http://181.188.234.21:8000/play/a03z/index.m3u8' },
    { name: 'ECDF SD', url: 'http://181.188.234.21:8000/play/a04u/index.m3u8' },
    { name: 'ESPN', url: 'http://181.188.234.21:8000/play/a041/index.m3u8' },
    { name: 'ESPN 2', url: 'http://181.188.234.21:8000/play/a05t/index.m3u8' },
    { name: 'ESPN 3', url: 'http://181.188.234.21:8000/play/a04m/index.m3u8' },
    { name: 'ESPN 4', url: 'http://181.188.234.21:8000/play/a05l/index.m3u8' },
    { name: 'Ecuador TV', url: 'http://181.188.234.21:8000/play/a05m/index.m3u8' },
    { name: 'Ecuavisa', url: 'http://181.188.234.21:8000/play/a04s/index.m3u8' },
    { name: 'Enlace', url: 'http://181.188.234.21:8000/play/a03g/index.m3u8' },
    { name: 'FX', url: 'http://181.188.234.21:8000/play/a04j/index.m3u8' },
    { name: 'Fox Sports 2', url: 'http://181.188.234.21:8000/play/a045/index.m3u8' },
    { name: 'Fox Sports 3', url: 'http://181.188.234.21:8000/play/a046/index.m3u8' },
    { name: 'France 24', url: 'http://181.188.234.21:8000/play/a05h/index.m3u8' },
    { name: 'GOL TV', url: ' http://181.188.234.21:8000/play/a042/index.m3u8' },
    { name: 'GamaTV', url: 'http://181.188.234.21:8000/play/a05n/index.m3u8' },
    { name: 'HBO', url: 'http://181.188.234.21:8000/play/a04e/index.m3u8' },
    { name: 'History Channel', url: 'http://181.188.234.21:8000/play/a039/index.m3u8' },
    { name: 'HomeandHealth', url: 'http://181.188.234.21:8000/play/a05i/index.m3u8' },
    { name: 'MTV', url: 'http://181.188.234.21:8000/play/a03b/index.m3u8' },
    { name: 'Nat Geo', url: 'http://181.188.234.21:8000/play/a021/index.m3u8' },
    { name: 'Nickelodeon', url: 'http://181.188.234.21:8000/play/a038/index.m3u8' },
    { name: 'RCN Novelas', url: 'http://181.188.234.21:8000/play/a05f/index.m3u8' },
    { name: 'RTS', url: 'http://181.188.234.21:8000/play/a04k/index.m3u8' },
    { name: 'STAR CHANNEL', url: 'http://181.188.234.21:8000/play/a03c/index.m3u8' },
    { name: 'Sony', url: 'http://181.188.234.21:8000/play/a04g/index.m3u8' },
    { name: 'Space', url: 'http://181.188.234.21:8000/play/a04i/index.m3u8' },
    { name: 'Studio Universal', url: 'http://181.188.234.21:8000/play/a05s/index.m3u8' },
    { name: 'TC Television', url: 'http://181.188.234.21:8000/play/a04p/index.m3u8' },
    { name: 'TCM', url: 'http://181.188.234.21:8000/play/a03d/index.m3u8' },
    { name: 'TNT', url: 'http://181.188.234.21:8000/play/a03f/index.m3u8' },
    { name: 'Teleamazonas', url: 'http://181.188.234.21:8000/play/a04t/index.m3u8' },
    { name: 'Telemundo', url: 'http://181.188.234.21:8000/play/a04n/index.m3u8' },
    { name: 'Televicentro', url: 'http://181.188.234.21:8000/play/a05w/index.m3u8' },
    { name: 'Universal', url: 'http://181.188.234.21:8000/play/a03a/index.m3u8' },
    { name: 'USA', url: 'http://181.188.234.21:8000/play/a03i/index.m3u8' },
    { name: 'Warner', url: 'http://181.188.234.21:8000/play/a03y/index.m3u8' },
  ];

  // Estado para el canal actual
  const [currentChannel, setCurrentChannel] = useState(channels[0].url);

  // Función para cambiar de canal
  const changeChannel = (url) => {
    setCurrentChannel(url);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      <ReactPlayer
        url={currentChannel}
        playing={true} // Inicia la reproducción automáticamente
        controls={true} // Muestra los controles del reproductor
        width="100%" // Ancho del reproductor
        height="100%" // Alto del reproductor
      />
      <div>Hola mundo</div>
      <div style={{ marginTop: '20px' }}>
        {channels.map((channel) => (
          <button key={channel.name} onClick={() => changeChannel(channel.url)} style={{ margin: '5px' }}>
            {channel.name}
          </button>
          
        ))}
      </div>
    </div>
  );
};

export default App;