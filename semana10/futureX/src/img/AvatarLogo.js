import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Logo from './../imagens/futurex_logo.png'
import styled from 'styled-components'


  const StyledAvatar =styled(Avatar)`
   && {
    
    margin:10px;

   } 
    
`

export default function ImageAvatars() {
 

  return (
    <div >
      <StyledAvatar src={Logo} style={{width:115, height:115}} />
    </div>
  );
}