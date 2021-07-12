import { Box, Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import { forwardRef, Ref, useImperativeHandle, useState } from "react";
import { MenuItem } from "../common/types";
import { Link } from 'react-router-dom';

type Props = { menuItems: MenuItem[], selectedIndex: number };

export interface MenuDrawerListener {
    toggleDrawer(open: boolean): void;
}

const MenuDrawer = forwardRef(({ menuItems, selectedIndex }: Props, ref: Ref<MenuDrawerListener>) => {

    const [open, setOpen] = useState(false);

    function toggleDrawer() {
        setOpen(!open);
    }

    useImperativeHandle(ref, () => ({ toggleDrawer }))

    return (<>
        <Drawer anchor="left" open={open} onClick={toggleDrawer}>
            <Box minWidth={250}>
            <List>
                {menuItems.map((item, index) => (
                    <ListItem key={index} component={Link} to={item.linkTo} button selected={selectedIndex === index}>                        
                        <ListItemText primary={item.label} />
                    </ListItem>
                ))}
            </List>
            </Box>
        </Drawer>
    </>);
});

export default MenuDrawer;
