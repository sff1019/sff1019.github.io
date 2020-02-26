import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

import { Styles, styles } from './Timeline.styles';

interface Props extends WithStyles<typeof styles> {
  title: string;
  description: string;
  startTime: string;
  endTime: string;
}

const TimelineRaw: React.FC<Styles> = (props) => {
  const { children, classes } = props;
  return (
    <div className={classes.container}>
      <ul className={classes.timeline}>
        {children}
      </ul>
    </div>
  );
};

class EventRaw extends React.Component<Props> {
  state = {
    isMobile: true
  }

  handleWindowResize = () => {
    this.setState({ isMobile: window.innerWidth < 600 });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  render = () => {
    const {
      classes,
      description,
      endTime,
      startTime,
      title,
    } = this.props;

    const dateString = () => {
      if (endTime === '') {
        return <Typography>{startTime}</Typography>;
      } else {
        if (this.state.isMobile) {
          return (
            <div className={classes.date}>
              <Typography className={classes.dateMobile}>{startTime}<br /></Typography>
              <Typography className={classes.dateMobile}>-<br /></Typography>
              <Typography className={classes.dateMobile}>{endTime}</Typography>
            </div>
          )
        }
        return <Typography className={classes.date}>{startTime} - {endTime}</Typography>
      }
    };

    return (
      <li className={classes.event}>
        <label className={classes.icon}></label>
        {dateString()}
        <div className={classes.body}>
          <Typography className={classes.eventTitle}>
            {title}
          </Typography>
          <div className={classes.description}>
            {description.split('\n').map((line, num) =>
            <Typography color="textSecondary"className={classes.description} key={num}>
              {line}
            </Typography>
                                        )}
          </div>
        </div>
      </li>
    );
  }
}

const Event = withStyles(styles)(EventRaw);
const Timeline = withStyles(styles)(TimelineRaw);

export { Event, Timeline };
