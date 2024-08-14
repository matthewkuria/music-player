// src/MusicPlayer.js
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Slider, Box } from '@mui/material';
import { FaPlay, FaPause, FaStop, FaBackward, FaForward, FaVolumeUp } from 'react-icons/fa';
import playlist from '../../assets/db/musicdb';
import { CardActionArea } from '@mui/material';

const MusicPlayer = () => {
  console.log(playlist[0].artist)
  const songs = playlist.map((item) => {
    return (
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.cover}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    )
   })
  // const [currentSongIndex, setCurrentSongIndex] = useState(0);
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [currentTime, setCurrentTime] = useState(0);
  // const [duration, setDuration] = useState(0);
  // const [volume, setVolume] = useState(0.5); // Initial volume set to 50%
  // const audioRef = useRef(null);

  // useEffect(() => {
  //   const audio = audioRef.current;
  //   const handleCanPlayThrough = () => {
  //     if (isPlaying) {
  //       audio.play();
  //     }
  //   };

  //   audio.addEventListener('canplaythrough', handleCanPlayThrough);

  //   return () => {
  //     audio.removeEventListener('canplaythrough', handleCanPlayThrough);
  //   };
  // }, [currentSongIndex, isPlaying]);

  // const handlePlayPause = () => {
  //   const audio = audioRef.current;
  //   if (isPlaying) {
  //     audio.pause();
  //   } else {
  //     audio.play();
  //   }
  //   setIsPlaying(!isPlaying);
  // };

  // const handleStop = () => {
  //   const audio = audioRef.current;
  //   audio.pause();
  //   audio.currentTime = 0;
  //   setIsPlaying(false);
  //   setCurrentTime(0);
  // };

  // const handleNext = () => {
  //   let nextIndex = currentSongIndex + 1;
  //   if (nextIndex >= playlist.length) {
  //     nextIndex = 0; // Loop back to the first song
  //   }
  //   setCurrentSongIndex(nextIndex);
  //   setIsPlaying(true); // Start playing the new song automatically
  // };

  // const handlePrevious = () => {
  //   let prevIndex = currentSongIndex - 1;
  //   if (prevIndex < 0) {
  //     prevIndex = playlist.length - 1; // Go to the last song
  //   }
  //   setCurrentSongIndex(prevIndex);
  //   setIsPlaying(true); // Start playing the new song automatically
  // };

  // const handleTimeUpdate = () => {
  //   const audio = audioRef.current;
  //   setCurrentTime(audio.currentTime);
  // };

  // const handleLoadedMetadata = () => {
  //   const audio = audioRef.current;
  //   setDuration(audio.duration);
  // };

  // const formatTime = (time) => {
  //   const minutes = Math.floor(time / 60);
  //   const seconds = Math.floor(time % 60);
  //   return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  // };

  // const handleVolumeChange = (event, newValue) => {
  //   setVolume(newValue);
  //   audioRef.current.volume = newValue;
  // };

  // const currentSong = playlist[currentSongIndex];

  return (
    <main className="">
      <div className="flex gap-2">
        {songs}
     </div>
    </main>
  );
};

export default MusicPlayer;
