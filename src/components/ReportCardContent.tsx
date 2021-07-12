import { Box, CardContent, IconButton, Menu, MenuItem } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { ReactNode, useState } from "react";

type Props = { title: string, children?: ReactNode, onDelete?: () => void };

export default function ReportCardContent({ title, children, onDelete }: Props) {

    return (<>
        <CardContent>
            <Box display="Flex" alignItems="flex-end">
                <Box flexGrow={1}>{title}</Box>
                {
                    onDelete === undefined || <IconButton size="small" onClick={onDelete}><DeleteIcon fontSize="small" /></IconButton>
                }                
            </Box>
            <Box pl={2}>
                {children}
            </Box>
        </CardContent>
    </>);
}