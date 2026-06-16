import PodcastGenerator from './components/PodcastGenerator'
import { Container, Box, useTheme } from '@mui/material'

function App() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', sm: '500px', md: '600px' },
        }}
      >
        <Box
          sx={{
            animation: 'fadeIn 0.6s ease-out',
            '@keyframes fadeIn': {
              '0%': { opacity: 0, transform: 'translateY(30px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          <PodcastGenerator />
        </Box>
      </Container>
    </Box>
  )
}

export default App