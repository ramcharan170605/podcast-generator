import React from 'react'
import { Button, CircularProgress, useTheme } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { SxProps } from '@mui/system'

interface GenerateButtonProps {
  onClick: () => void
  disabled?: boolean
  isLoading?: boolean
}

const GenerateButton: React.FC<GenerateButtonProps> = ({
  onClick,
  disabled = false,
  isLoading = false,
}) => {
  const theme = useTheme()

  // Custom button styling
  const buttonSx: SxProps = {
    borderRadius: '12px',
    padding: '12px 24px',
    minHeight: '56px',
    fontSize: '1rem',
    fontWeight: 600,
    letterSpacing: '0.02em',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: `0 4px 15px rgba(103, 58, 183, 0.3)`,
    '&:hover': {
      boxShadow: `0 6px 20px rgba(103, 58, 183, 0.4)`,
      transform: 'translateY(-2px)',
      backgroundColor: theme.palette.primary.dark,
    },
    '&:active': {
      transform: 'translateY(0)',
      boxShadow: `0 2px 10px rgba(103, 58, 183, 0.3)`,
    },
    '&.Mui-disabled': {
      backgroundColor: theme.palette.action.disabled,
      color: theme.palette.action.disabledBackground,
      boxShadow: 'none',
      transform: 'none',
    },
    // Gradient background effect
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
    color: theme.palette.primary.contrastText,
    border: 'none',
    // Pseudo-element for shine effect
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
      transition: 'left 0.5s ease',
    },
    '&:hover::before': {
      left: '100%',
    },
  }

  return (
    <Button
      sx={buttonSx}
      variant="contained"
      onClick={onClick}
      disabled={disabled || isLoading}
      fullWidth
      startIcon={isLoading ? null : <MicIcon />}
      endIcon={!isLoading && <AutoAwesomeIcon />}
      aria-label={isLoading ? 'Generating podcast' : 'Generate podcast'}
      disableElevation
    >
      {isLoading ? (
        <>
          <CircularProgress
            size={20}
            color="inherit"
            sx={{ marginRight: 1 }}
          />
          Generating...
        </>
      ) : (
        'Generate Podcast'
      )}
    </Button>
  )
}

export default GenerateButton