import React, { useEffect, useState } from 'react';
import './MusicPlayer.css'
import ReactAudioPlayer from 'react-audio-player';

const MusicPlayer = () => {
   return (
    <div className='text-center mt-14'>
      <h2>Muziki player</h2>
      <ReactAudioPlayer
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        controls       
         className='w-1/2 mt-5'
      />
    </div>
  );
};

export default MusicPlayer;