import { AppBar, createStyles, IconButton, makeStyles, MenuItem, Theme, Toolbar, Typography } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from "react-router-dom";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useState } from "react";
import { Menu } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
      color: 'inherit', textDecoration: 'inherit',
    },
  }),
);

type Props = { title: string, menuIcon: any, onClickMenus: (() => void)[] };

export default function ActionBar({ title, menuIcon, onClickMenus }: Props) {

  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);    
  };

  const handleClose = () => {
    setAnchorEl(null);
    onClickMenus[1]();
  };

  return (<>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="arrowBack" onClick={history.goBack}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <IconButton aria-label="search" color="inherit" onClick={onClickMenus[0]}>
          {menuIcon}
        </IconButton>
        <IconButton aria-label="more" color="inherit" onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}>
      <MenuItem onClick={handleClose}>입력폼 편집</MenuItem>
    </Menu>
  </>);
}