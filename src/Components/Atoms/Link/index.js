import React from 'react';

function Link({ href, target, text }) {
  return (
    <a href={href} target={target}>{text}</a>
  )
}

export default Link;
