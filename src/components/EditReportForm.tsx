import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Toolbar, Typography } from "@material-ui/core";
import { TreeItem, TreeView } from "@material-ui/lab";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DeleteIcon from '@material-ui/icons/Delete';
import RestoreIcon from '@material-ui/icons/Restore';

interface RenderTree {
    id: string;
    name: string;
    children?: RenderTree[];
  }
type Props = { onOk: () => void, onCancel: () => void };

const data: RenderTree = {
    id: 'root',
    name: 'Parent',
    children: [
      {
        id: '1',
        name: 'Child - 1',
      },
      {
        id: '3',
        name: 'Child - 3',
        children: [
          {
            id: '4',
            name: 'Child - 4',
          },
        ],
      },
    ],
  };
  
export default function EditReportTemplete({ onOk, onCancel }: Props) {
    const renderTree = (nodes: RenderTree) => (
        <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
          {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
        </TreeItem>
      );

    return (<>
        <Dialog open={true} fullWidth onClose={onCancel}>
            <DialogTitle>
                <Box display="flex">
                    <Box flexGrow={1}>템플릿 편집</Box>
                    <IconButton><RestoreIcon /></IconButton>
                    <IconButton><DeleteIcon /></IconButton>
                </Box>
            </DialogTitle>
            <DialogContent>
                <TreeView
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}>
                    {/* <TreeItem nodeId="1" label="고객정보">
                        <TreeItem nodeId="2" label="회사명">
                            <TreeItem nodeId="3" label="금오공과대학교" />
                            <TreeItem nodeId="4" label="농업기술원" />
                            <TreeItem nodeId="5" label="대구 중구청" />
                        </TreeItem>
                    </TreeItem> */}
                    {renderTree(data)}
                </TreeView>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel} color="primary">
                    취소
                </Button>
                <Button onClick={onOk} color="primary">
                    저장
                </Button>
            </DialogActions>
        </Dialog>

    </>);
}