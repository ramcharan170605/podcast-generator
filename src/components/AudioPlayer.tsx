import React, { useState, ChangeEvent, useRef, useEffect } from 'react'
import { Box, Card, CardContent, Typography, IconButton, useTheme, Divider } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import HeadphonesIcon from '@mui/icons-material/Headphones'
import { SxProps } from '@mui/system'

interface AudioPlayerProps {
  message: string
  audioUrl?: string
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ message, audioUrl }) => {
  const theme = useTheme()
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(100)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    setIsPlaying(false)
    setCurrentTime(0)
    if (audioRef.current) {
      audioRef.current.load()
    }
  }, [audioUrl])

  const togglePlayPause = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(err => console.error("Error playing audio:", err))
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    if (!audioRef.current) return
    const newMuted = !isMuted
    audioRef.current.muted = newMuted
    setIsMuted(newMuted)
  }

  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return
    const newVolume = parseInt(event.target.value)
    setVolume(newVolume)
    audioRef.current.volume = newVolume / 100
    if (newVolume > 0) {
      audioRef.current.muted = false
      setIsMuted(false)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setCurrentTime(0)
  }

  // Card styling
  const cardSx: SxProps = {
    width: '100%',
    borderRadius: '16px',
    boxShadow: `0 8px 32px rgba(103, 58, 183, 0.1)`,
    background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
    border: `1px solid rgba(103, 58, 183, 0.1)`,
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: `0 12px 40px rgba(103, 58, 183, 0.15)`,
      transform: 'translateY(-2px)',
    },
  }

  const isInfoMessage = !audioUrl

  return (
    <Card sx={cardSx} elevation={0}>
      <CardContent sx={{ padding: { xs: 2, sm: 3 } }}>
        {isInfoMessage ? (
          // Info state - no audio yet
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '120px',
              textAlign: 'center',
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 4px 15px rgba(103, 58, 183, 0.3)`,
              }}
            >
              <HeadphonesIcon
                sx={{
                  fontSize: '2rem',
                  color: theme.palette.primary.contrastText,
                }}
              />
            </Box>

            <Typography
              variant="h6"
              component="div"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 600,
                mb: 1,
              }}
            >
              {message.includes('coming soon') ? 'Podcast Ready!' : 'Ready to Generate'}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                maxWidth: '300px',
                lineHeight: 1.5,
              }}
            >
              {message === 'Podcast will appear here.'
                ? 'Enter a topic and click Generate to create your podcast'
                : message}
            </Typography>
          </Box>
        ) : (
          // Audio player state
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            {/* Audio info */}
            <Box>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                  mb: 0.5,
                }}
              >
                Your Podcast
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
              >
                {message}
              </Typography>
            </Box>

            <Divider sx={{ my: 1 }} />

            {/* Player controls */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 2,
              }}
            >
              {/* Play/Pause button */}
              <IconButton
                onClick={togglePlayPause}
                aria-label={isPlaying ? 'Pause' : 'Play'}
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                  color: theme.palette.primary.contrastText,
                  boxShadow: `0 4px 15px rgba(103, 58, 183, 0.3)`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: `0 6px 20px rgba(103, 58, 183, 0.4)`,
                    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                  },
                  '&:active': {
                    transform: 'scale(0.95)',
                  },
                }}
              >
                {isPlaying ? <PauseIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
              </IconButton>

              {/* Progress bar placeholder */}
              <Box
                sx={{
                  flex: 1,
                  height: 4,
                  background: theme.palette.action.disabledBackground,
                  borderRadius: 2,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: duration > 0 ? `${(currentTime / duration) * 100}%` : '0%',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
                    borderRadius: 2,
                    transition: 'width 0.3s ease',
                  }}
                />
              </Box>

              {/* Volume control */}
              <IconButton
                onClick={toggleMute}
                aria-label={isMuted || volume === 0 ? 'Unmute' : 'Mute'}
                sx={{
                  color: theme.palette.text.secondary,
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: theme.palette.primary.main,
                  },
                }}
              >
                {isMuted || volume === 0 ? <VolumeOffIcon /> : <VolumeUpIcon />}
              </IconButton>
            </Box>

            {/* Volume slider (hidden on small screens) */}
            <Box
              sx={{
                display: { xs: 'none', sm: 'block' },
                width: '100%',
              }}
            >
              <input
                type="range"
                min={0}
                max={100}
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                style={{
                  width: '100%',
                  height: 4,
                  borderRadius: 2,
                  background: theme.palette.action.disabledBackground,
                  outline: 'none',
                  WebkitAppearance: 'none',
                  cursor: 'pointer',
                }}
              />
            </Box>
            {audioUrl && (
              <audio
                ref={audioRef}
                src={audioUrl}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onEnded={handleEnded}
              />
            )}
          </Box>
        )}
      </CardContent>
    </Card>
  )
}

export default AudioPlayer