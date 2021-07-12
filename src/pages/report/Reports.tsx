import { Button, Fab, Theme } from "@material-ui/core";
import MenuActionBar from "../../components/MenuActionBar";
import AddIcon from '@material-ui/icons/Add';
import { Link, useHistory, useLocation } from "react-router-dom";
import { paths } from "../../App";
import { createStyles, makeStyles } from "@material-ui/styles";
import { useEffect } from "react";
import { useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fab: {
            position: 'fixed',
            bottom: theme.spacing(4),
            right: theme.spacing(2),
        },
    }),
);

export default function Reports() {

    const classes = useStyles();
    const location = useLocation();
    const history = useHistory();
    const [state, setState] = useState<number>(0);

    useEffect(() => {
        console.log('location path : ' + location.state);
        console.log('history path : ' + history.location.pathname);
    });

    return (<>
        <MenuActionBar selectedIndex={0} />
        <Button color="primary" onClick={() => {setState(state + 1)}}>버튼 {state}</Button>
        <Fab color="primary" aria-label="add" component={Link} to={paths.newReport} className={classes.fab}>
            <AddIcon />
        </Fab>
    </>);
}