import TextField from '@mui/material/TextField';

type Propstype = {
    id: string;
    label: string;
    name: string;
    autocomplete: string;
}

const Input = (props: Propstype) => {
    const { id, label, name, autocomplete } = props;
    return (
        <TextField
            margin="normal"
            required
            fullWidth
            id={id}
            label={label}
            name={name}
            autoComplete={autocomplete}
            />
    )
};

export default Input;