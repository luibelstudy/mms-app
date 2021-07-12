import { Box, Divider } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import { ReactNode, useState } from "react";
import ActionBar from "../../components/ActionBar";
import EditReportForm from "../../components/EditReportForm";
import ListDialog from "../../components/ListDialog";
import ReportCard from "../../components/ReportCard";
import ReportCardContent from "../../components/ReportCardContent";
import SimpleSelect from "../../components/SimpleSelect";

export default function NewReport() {

    const [listDialog, setListDialog] = useState<ReactNode>(null);
    const [editReportForm, setEditReportForm] = useState<ReactNode>(null);

    function onItemSelected(value: string) {
        setListDialog(null);
    }

    function onSave() {
        console.log('onClickSave');
    }

    function onOkEditSupportForm() {
        
    }

    function onCreateEditSupportForm() {
        console.log('onClickEditSupportForm');
        setEditReportForm(
            <EditReportForm  onOk={onOkEditSupportForm} onCancel={() => setEditReportForm(null)} />
        );

    }

    function onClickAddSupportTager() {
        setListDialog(
            <ListDialog
                title="지원 대상 선택하기"
                items={['WAS', 'Oracle']}
                onItemSelected={onItemSelected}
                onCanceled={() => setListDialog(null)} />);
    }

    function onClickAddEngineer() {
        setListDialog(
            <ListDialog
                title="엔지니어 선택하기"
                items={['홍길동', '김길동']}
                onItemSelected={onItemSelected}
                onCanceled={() => setListDialog(null)} />);
    }    

    return (<>
        { /* create an Component instance */}
        {listDialog}
        {editReportForm}        

        <ActionBar title="새 리포트" menuIcon={<SaveIcon />} onClickMenus={[onSave, onCreateEditSupportForm]} />
        <Box p={2}>
            <Box mb={2}>
                <ReportCard title="기본내용">
                    <ReportCardContent title="고객정보">
                        <SimpleSelect label="고객명" items={['홍길동']} />
                        <SimpleSelect label="고객명" items={['홍길동']} />
                        <SimpleSelect label="고객명" items={['홍길동']} />
                    </ReportCardContent>
                </ReportCard>
            </Box>
            <Box mb={2}>
                <ReportCard title="지원내용" addButton onClickAdd={onClickAddSupportTager}>
                    <ReportCardContent title="WAS" onDelete={() => {}}>
                        <SimpleSelect label="고객명" items={['홍길동']} />
                        <SimpleSelect label="고객명" items={['홍길동']} />
                        <SimpleSelect label="고객명" items={['홍길동']} />
                    </ReportCardContent>
                    <Divider variant="middle" />
                    <ReportCardContent title="Oracle">

                    </ReportCardContent>
                </ReportCard>
            </Box>
            <Box mb={2}>
                <ReportCard title="엔지니어" addButton onClickAdd={onClickAddEngineer}>
                    <ReportCardContent title="홍길동">

                    </ReportCardContent>
                </ReportCard>
            </Box>
        </Box>
    </>);
}