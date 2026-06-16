import React, { ChangeEvent } from 'react'
import { TextField, InputAdornment, useTheme } from '@mui/material'
import MicIcon from '@mui/icons-material/Mic'
import { SxProps } from '@mui/system'

interface PodcastInputProps {
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  placeholder?: string
}

const PodcastInput: React.FC<PodcastInputProps> = ({
  value,
  onChange,
  disabled = false,
  placeholder = 'Type your podcast topic here...',
}) => {
  const theme = useTheme()

  // Custom styling for the TextField
  const textFieldSx: SxProps = {
    width: '100%',
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      backgroundColor: theme.palette.background.paper,
      borderColor: theme.palette.text.secondary,
      transition: 'all 0.3s ease',
      '&:hover': {
        borderColor: theme.palette.primary.main,
        boxShadow: `0 0 0 3px rgba(103, 58, 183, 0.1)`,
      },
      '&.Mui-focused': {
        borderColor: theme.palette.primary.main,
        borderWidth: '2px',
        boxShadow: `0 0 0 4px rgba(103, 58, 183, 0.2)`,
        outline: 'none',
      },
      '&.Mui-disabled': {
        backgroundColor: theme.palette.action.disabledBackground,
        borderColor: theme.palette.action.disabled,
      },
    },
    '& .MuiInputLabel-root': {
      color: theme.palette.text.secondary,
      fontWeight: 500,
      '&.Mui-focused': {
        color: theme.palette.primary.main,
        fontWeight: 600,
      },
    },
    '& .MuiInputBase-input': {
      fontSize: '1rem',
      padding: '16.5px 14px',
      color: theme.palette.text.primary,
    },
  }

  return (
    <TextField
      sx={textFieldSx}
      variant="outlined"
      placeholder={placeholder}
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      disabled={disabled}
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <MicIcon
              sx={{
                color: theme.palette.primary.main,
                opacity: 0.7,
              }}
            />
          </InputAdornment>
        ),
      }}
      aria-label="Podcast topic input"
      autoComplete="off"
    />
  )
}

export default PodcastInput