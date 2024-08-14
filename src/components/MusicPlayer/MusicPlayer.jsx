// src/MusicPlayer.js
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Slider, Box } from '@mui/material';
import { FaPlay, FaPause, FaStop, FaBackward, FaForward, FaVolumeUp } from 'react-icons/fa';

const playlist = [
  {
    title: "Song 1",
    artist: "Artist 1",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: "https://via.placeholder.com/345x140.png?text=Album+Cover+1"
  },
  {
    title: "Song 2",
    artist: "Artist 2",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: "https://via.placeholder.com/345x140.png?text=Album+Cover+2"
  },
  {
    title: "Song 3",
    artist: "Artist 3",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover: "https://via.placeholder.com/345x140.png?text=Album+Cover+3"
  }
];

const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5); // Initial volume set to 50%
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    const handleCanPlayThrough = () => {
      if (isPlaying) {
        audio.play();
      }
    };

    audio.addEventListener('canplaythrough', handleCanPlayThrough);

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, [currentSongIndex, isPlaying]);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleStop = () => {
    const audio = audioRef.current;
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleNext = () => {
    let nextIndex = currentSongIndex + 1;
    if (nextIndex >= playlist.length) {
      nextIndex = 0; // Loop back to the first song
    }
    setCurrentSongIndex(nextIndex);
    setIsPlaying(true); // Start playing the new song automatically
  };

  const handlePrevious = () => {
    let prevIndex = currentSongIndex - 1;
    if (prevIndex < 0) {
      prevIndex = playlist.length - 1; // Go to the last song
    }
    setCurrentSongIndex(prevIndex);
    setIsPlaying(true); // Start playing the new song automatically
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    setCurrentTime(audio.currentTime);
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    setDuration(audio.duration);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
    audioRef.current.volume = newValue;
  };

  const currentSong = playlist[currentSongIndex];

  return (
    <Card sx={{ maxWidth: 345, margin: '50px auto', backgroundColor: '#282c34', color: '#fff' }}>
      <CardMedia
        component="img"
        height="140"
        image={currentSong.cover}
        alt="Album cover"
      />
      <CardContent>
        <Typography variant="h5">{currentSong.title}</Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {currentSong.artist}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <IconButton color="inherit" onClick={handlePrevious}>
            <FaBackward />
          </IconButton>
          <IconButton color="inherit" onClick={handlePlayPause}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </IconButton>
          <IconButton color="inherit" onClick={handleStop}>
            <FaStop />
          </IconButton>
          <IconButton color="inherit" onClick={handleNext}>
            <FaForward />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <Typography variant="caption">{formatTime(currentTime)}</Typography>
          <Slider
            value={currentTime}
            min={0}
            max={duration}
            onChange={(e, value) => {
              audioRef.current.currentTime = value;
              setCurrentTime(value);
            }}
            sx={{ color: '#fff', mx: 2 }}
          />
          <Typography variant="caption">{formatTime(duration)}</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
          <FaVolumeUp style={{ marginRight: 10 }} />
          <Slider
            value={volume}
            min={0}
            max={1}
            step={0.01}
            onChange={handleVolumeChange}
            sx={{ color: '#fff', width: '80%' }}
          />
        </Box>
        <audio
          ref={audioRef}
          src={currentSong.src}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          volume={volume}
        />
      </CardContent>
    </Card>
  );
};

export default MusicPlayer;
