import React, { useState, KeyboardEvent } from 'react'
import { Box, Typography, Paper, useTheme, Divider } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import PodcastInput from './PodcastInput'
import GenerateButton from './GenerateButton'
import LoadingAnimation from './LoadingAnimation'
import AudioPlayer from './AudioPlayer'

const WEBHOOK_URL = 'https://charansurebrec.qzz.io/webhook/69fe3e3e-2fa1-4341-900f-1c5125eb9ac5'

type PodcastWebhookResponse = {
  audioFile?: unknown
}

const PodcastGenerator: React.FC = () => {
  const theme = useTheme()
  const [topic, setTopic] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('Podcast will appear here.')
  const [audioUrl, setAudioUrl] = useState<string | undefined>(undefined)

  const handleGenerate = async () => {
    if (!topic.trim()) return

    setIsLoading(true)
    setMessage('')
    setAudioUrl(undefined)

    try {
      const payload = { text: topic.trim() }

      console.info('[PodcastGenerator] Sending webhook request', {
        url: WEBHOOK_URL,
        payload,
      })

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const responseText = await response.text()
      const responseDetails = {
        status: response.status,
        statusText: response.statusText,
        contentType: response.headers.get('content-type'),
        body: responseText,
      }

      if (!response.ok) {
        console.error('[PodcastGenerator] Webhook request failed', responseDetails)
        throw new Error(
          `Webhook request failed (${response.status} ${response.statusText || 'Unknown status'})`
        )
      }

      console.info('[PodcastGenerator] Webhook response received', responseDetails)

      if (!responseText.trim()) {
        throw new Error('Webhook returned an empty response. Configure n8n to return JSON with an audioFile URL.')
      }

      let data: PodcastWebhookResponse
      try {
        data = JSON.parse(responseText) as PodcastWebhookResponse
      } catch (parseError) {
        console.error('[PodcastGenerator] Webhook returned non-JSON response', {
          ...responseDetails,
          parseError,
        })
        throw new Error('Webhook returned an invalid JSON response.')
      }

      if (typeof data.audioFile === 'string' && data.audioFile.trim()) {
        setAudioUrl(data.audioFile)
        setMessage('Podcast is ready! Click play to listen')
        setTopic('')
      } else {
        console.error('[PodcastGenerator] Webhook response missing audioFile', data)
        throw new Error('Webhook response is missing an audioFile URL.')
      }
    } catch (error) {
      console.error('[PodcastGenerator] Podcast generation failed', error)
      setMessage(error instanceof Error ? error.message : 'Oops! Something went wrong. Please try again')
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && topic.trim() && !isLoading) {
      handleGenerate()
    }
  }

  return (
    <Paper
      elevation={0}
      sx={{
        width: '100%',
        borderRadius: '20px',
        background: theme.palette.background.paper,
        boxShadow: `0 16px 64px rgba(103, 58, 183, 0.15)`,
        overflow: 'hidden',
        animation: 'slideUp 0.6s ease-out',
        '@keyframes slideUp': {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      }}
    >
      {/* Header with icon and title */}
      <Box
        sx={{
          padding: { xs: 3, sm: 4 },
          textAlign: 'center',
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          color: theme.palette.primary.contrastText,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.3,
          }}
        />

        {/* Icon */}
        <Box
          sx={{
            width: 72,
            height: 72,
            borderRadius: '50%',
            background: `rgba(255, 255, 255, 0.2)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            boxShadow: `0 8px 32px rgba(255, 255, 255, 0.2)`,
            backdropFilter: 'blur(10px)',
            border: `2px solid rgba(255, 255, 255, 0.3)`,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <AutoAwesomeIcon
            sx={{
              fontSize: '2.5rem',
              color: theme.palette.primary.contrastText,
            }}
          />
        </Box>

        {/* Title */}
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 700,
            letterSpacing: '-0.02em',
            position: 'relative',
            zIndex: 1,
            mb: 1,
          }}
        >
          Podcast Generator
        </Typography>

        <Typography
          variant="subtitle1"
          component="p"
          sx={{
            opacity: 0.9,
            position: 'relative',
            zIndex: 1,
          }}
        >
          Create professional podcasts with AI
        </Typography>
      </Box>

      {/* Main content area */}
      <Box
        sx={{
          padding: { xs: 2, sm: 3, md: 4 },
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        {/* Input section */}
        <Box>
          <Typography
            variant="subtitle2"
            component="label"
            htmlFor="podcast-topic"
            sx={{
              display: 'block',
              color: theme.palette.text.secondary,
              fontWeight: 600,
              mb: 1.5,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontSize: '0.75rem',
            }}
          >
            Topic
          </Typography>
          <PodcastInput
            value={topic}
            onChange={setTopic}
            onKeyPress={handleKeyPress}
disabled={isLoading}
            placeholder="Enter your podcast topic..."
          />
        </Box>

        {/* Generate button */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <GenerateButton
            onClick={handleGenerate}
            disabled={!topic.trim()}
            isLoading={isLoading}
          />
        </Box>

        {/* Keyboard shortcut hint */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            textAlign: 'center',
            fontSize: '0.75rem',
            opacity: 0.7,
          }}
        >
          Press Enter to generate
        </Typography>

        <Divider sx={{ my: 1 }} />

        {/* Result area */}
        <Box
          sx={{
            minHeight: { xs: '140px', sm: '160px' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <LoadingAnimation show={isLoading} />
          {!isLoading && <AudioPlayer message={message} audioUrl={audioUrl} />}
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          padding: { xs: 2, sm: 3 },
          textAlign: 'center',
          background: theme.palette.background.default,
          borderTop: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: '0.75rem',
            opacity: 0.6,
          }}
        >
          © 2026 Podcast Generator
        </Typography>
      </Box>
    </Paper>
  )
}

export default PodcastGenerator
