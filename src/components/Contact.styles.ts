import { createStyles, Theme, WithStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) => createStyles({
  mailIcon: {
    '@media (max-width: 600px)': {
      fontSize: '1rem',
    },
    fontSize: '1.5rem',
    marginRight: '1rem',
  },
  snsIcon: {
    '@media (max-width: 600px)': {
      padding: '1rem',
    },
    fontSize: '1.5rem',
    padding: '1rem 20px 20px 0',
  },
  snsLink: {
    color: 'black'
  },
});

export type Styles = WithStyles<typeof styles>;
