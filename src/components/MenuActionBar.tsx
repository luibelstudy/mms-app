import { AppBar, createStyles, IconButton, makeStyles, Theme, Toolbar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { useRef } from "react";
import { Link } from "react-router-dom";
import { paths } from "../App";
import { MenuItem } from "../common/types";
import MenuDrawer, { MenuDrawerListener } from "./MenuDrawer";

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

type Props = { selectedIndex: number };

export default function MenuActionBar({ selectedIndex }: Props) {

    const menuItems: MenuItem[] = [
        { label: '리포트 리스트', linkTo: paths.reports },
        { label: '통계 / 분석', linkTo: paths.analysis }
    ];
    const {label, linkTo} = menuItems[selectedIndex];

    const menuDrawerListener = useRef<MenuDrawerListener>(null);
    const classes = useStyles();

    function onMenuClick() {
        menuDrawerListener.current?.toggleDrawer(true);
    }

    return (<>
        <AppBar position="static">
            <Toolbar>
                <IconButton aria-label="menu" color="inherit" onClick={onMenuClick} className={classes.menuButton}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    <Link to={linkTo} className={classes.link}>{label}</Link>
                </Typography>
                <IconButton aria-label="search" color="inherit">
                    <SearchIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
        <MenuDrawer menuItems={menuItems} selectedIndex={selectedIndex} ref={menuDrawerListener} />
    </>);
}