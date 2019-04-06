import React from 'react';
import injectSheet from 'react-jss';

const style = {
	container: {
    position: 'relative',
    fontSize: '5rem',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'grey',
    marginTop: '40vh'
  }
}

const NotFound = ({ classes }) => {
  return (
    <div className={classes.container}>
      404 NOT FOUND
    </div>
  )
}

export default injectSheet(style)(NotFound);