import React from 'react';

const styles = {
    ButtonStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#666666',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#007aff ',
      marginLeft: 5,
      marginRight: 5,
      width: 100,
      height: 40
    }
}

const Button = ({name, newGame}) => {
  return (
    <div style={styles.ButtonStyle}
      onClick={newGame}
    >
      {name.toUpperCase()}
    </div>
  );
};

export default Button;
