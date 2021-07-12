import { Dialog, DialogTitle, List, ListItem, ListItemText } from "@material-ui/core";

type Props = { title: string, items: string[], onItemSelected: (value: string) => void, onCanceled: () => void };

const ListDialog = (props: Props) => {

    const { title, items, onCanceled } = props;
    
    const onItemSelected = (value: string) => {
        props.onItemSelected(value);        
    };

    return (<>
        <Dialog open={true} onClose={onCanceled} fullWidth>
            <DialogTitle>{title}</DialogTitle>
            <List>
                {
                    items.map((item, index) => (
                        <ListItem key={index} button onClick={() => onItemSelected(item)}>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))
                }
            </List>
        </Dialog>
    </>);
}

export default ListDialog;