import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import DarkModeIcon from '@mui/icons-material/DarkMode'

export default function Toggle({ theme, setTheme }) {
  return theme ? (
    <LightModeRoundedIcon
      onClick={() => setTheme(prev => !prev)}
      style={{ color: '#625d5d', cursor: 'pointer' }}
    />
  ) : (
    <DarkModeIcon
      onClick={() => setTheme(prev => !prev)}
      style={{ color: '#fff', cursor: 'pointer' }}
    />
  )
}
