import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
        body: {
          backgroundColor: '#d5dfec',
          color: 'white',
        },
        formBtn: {
          marginTop: 20,
          border: 0,
          color: 'white',
          background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)',
          boxShadow: '0 3px 5px 2px rgba(102, 255, 255, .4)',
        },
      },
    },
  },
});

export default theme;
