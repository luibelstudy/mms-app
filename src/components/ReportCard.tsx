import { Card, CardHeader, Divider, IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import { ReactNode } from "react";

type Props = { title: string, addButton?: boolean, children: ReactNode, onClickAdd?: () => void };

export default function ReportCard({title, addButton = false, children, onClickAdd}: Props) {
    return (<>
        <Card raised>
            <CardHeader title={title} action={addButton ? <IconButton onClick={onClickAdd}><AddIcon /></IconButton> : null} />
            <Divider variant="middle" />
            {children}
        </Card>
    </>);
}