import React from 'react';

function Image({ source, alter }) {
  return (
    <img src={source} alt={alter} />
  )
}

export default Image;
