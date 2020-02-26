import { createStyles, Theme, WithStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) => createStyles({
  currentContent: {
    fontWeight: 'bold',
  },
  navItem: {
    margin: '5px 0',
    textAlign: 'center',
  },
  itemLink: {
    color: 'gray',
    cursor: 'pointer',
    paddingBottom: '5px',
    position: 'relative',
    '&:hover': {
      color: 'black',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '1px',
      bottom: '0',
      backgroundColor: 'black',
      visibility: 'hidden',
      '-webkit-transform': 'scaleX(0)',
      transform: 'scaleX(0)',
      '-webkit-transition': 'all 0.3s ease-in-out 0s',
      transition: 'all 0.3s ease-in-out 0s',
    },
    '&:hover:before': {
      visibility: 'visible',
      backgroundColor: 'black',
      '-webkit-transform': 'scaleX(1)',
      transform: 'scaleX(1)',
    },
  },
  sideNavContext: {
    width: '16.5%',
    position: 'fixed',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  hideNav: {
    display: 'none',
  },
  showNav: {
    display: 'initial',
  }
});

export type Styles = WithStyles<typeof styles>;
