import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderContent>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem><AnchorLink href="#top" offset="50">Top</AnchorLink></MenuItem>
        <MenuItem><AnchorLink href="#profile" offset="50">Profile</AnchorLink></MenuItem>
        <MenuItem><AnchorLink href="#contact" offset="50">Contact</AnchorLink></MenuItem>
      </Menu>
    </HeaderContent>
  );
}

const HeaderContent = styled.div`

  button{
    color: #fafafa;
  }
  
`;