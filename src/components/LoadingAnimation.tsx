import React from 'react'
import { Box, CircularProgress, Typography, Fade, useTheme } from '@mui/material'
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion'

interface LoadingAnimationProps {
  show: boolean
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ show }) => {
  const theme = useTheme()

  if (!show) return null

  return (
    <Fade in={show} timeout={300} unmountOnExit>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          padding: 4,
          minHeight: '120px',
        }}
      >
        {/* Animated loading circle with custom styling */}
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress
            size={60}
            thickness={4}
            sx={{
              color: theme.palette.primary.main,
              animationDuration: '800ms',
            }}
          />
          {/* Icon in the center of the progress circle */}
          <Box
            sx={{
              position: 'absolute',
              color: theme.palette.primary.main,
              animation: 'pulse 2s ease-in-out infinite',
              '@keyframes pulse': {
                '0%, 100%': { opacity: 1, transform: 'scale(1)' },
                '50%': { opacity: 0.7, transform: 'scale(1.1)' },
              },
            }}
          >
            <AutoAwesomeMotionIcon
              fontSize="large"
              sx={{ fontSize: '2rem' }}
            />
          </Box>
        </Box>

        {/* Loading text with animation */}
        <Typography
          variant="subtitle1"
          component="div"
          sx={{
            color: theme.palette.text.secondary,
            fontWeight: 500,
            textAlign: 'center',
            animation: 'fadeInOut 1.5s ease-in-out infinite',
            '@keyframes fadeInOut': {
              '0%, 100%': { opacity: 1 },
              '50%': { opacity: 0.6 },
            },
          }}
        >
          Creating your podcast...
        </Typography>

        {/* Subtitle with more detail */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textAlign: 'center',
            mt: 1,
            opacity: 0.8,
          }}
        >
          This may take a few moments
        </Typography>
      </Box>
    </Fade>
  )
}

export default LoadingAnimation