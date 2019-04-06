import React from 'react'
import injectSheet from 'react-jss';

const style = {
  loading: {
    top: 0,
    left: 0,
    position: 'fixed',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, .3)',
    display: ({ show }) => show ? 'block': 'none'
  },
  gif: {
    position: 'absolute',
    height: '64px',
    width: '64px',
    top: '40vh',
    left: 0,
    right: 0,
    margin: 'auto'
  }
};

const Loading = ({ classes }) => {
  return (
    <div className={classes.loading}>
      <img className={classes.gif} src="/assets/progress.gif" />
    </div>
  )
}

export default injectSheet(style)(Loading);