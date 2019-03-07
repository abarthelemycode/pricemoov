import { createMuiTheme } from '@material-ui/core/styles'
import vars from './variables.scss'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary:{
      main: vars.white,
      second: vars.black,
    },
    secondary: {
      main: vars.blue,
      second: vars.grey,
    }
  }
})



export default theme
