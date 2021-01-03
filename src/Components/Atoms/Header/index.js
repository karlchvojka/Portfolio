import React from 'react';
import styled from 'styled-components';

function Header({ type, text }) {
  switch(type) {
    case 'h1':
      return <h1>{text}</h1>
      break;
    case 'h2':
      return <h2>{text}</h2>
      break;
    case 'h3':
      return <h3>{text}</h3>
      break;
    case 'h4':
      return <h4>{text}</h4>
      break;
    case 'h5':
      return <h5>{text}</h5>
      break;
    case 'h6':
      return <h6>{text}</h6>
      break;
  }
}

export default Header;
