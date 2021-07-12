import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useState } from "react";

type Props = { label: string, items: string[] };
export default function SimpleSelect({ label, items }: Props) {

    const [value, setValue] = useState('');
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setValue(event.target.value as string);
    };

    return (<>
        <FormControl fullWidth margin="dense">
            <InputLabel id={'input-label-'}>{label}</InputLabel>
            <Select
                labelId={'input-label-'}
                id={'select-'}
                value={value}
                onChange={handleChange}
            >
                {
                    items.map((item, index) => (
                        <MenuItem key={index} value={item}>{item}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    </>);
}