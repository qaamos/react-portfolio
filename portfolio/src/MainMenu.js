import React from 'react';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

export default function MainMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const style = {
    //TO DO: menu styling
  };

  return (
    <div>
      <IconButton edge="start" aria-controls="nav-menu" id="main-menu"
      aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu id="main-menu" anchorEl={anchorEl} keepMounted
      open={Boolean(anchorEl)} onClose={handleClose}>

        <MenuItem onClick={handleClose} component={Link}
        to="/" style={style}>Welcome</MenuItem>

        <MenuItem onClick={handleClose} component={Link}
        to="/about" style={style}>About me</MenuItem>

        <MenuItem onClick={handleClose} component={"a"}
        href="https://linkedin.com/in/aamos-riihinen/" style={style}>
        LinkedIn</MenuItem>

        <MenuItem onClick={handleClose} component={"a"}
        href="https://github.com/qaamos" style={style}>Github</MenuItem>

      </Menu>
    </div>
  );

}
