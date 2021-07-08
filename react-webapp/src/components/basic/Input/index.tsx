import { FC, InputHTMLAttributes, useMemo } from "react"
import styles from "./styles.module.scss"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    props?: {
        name?: string,
        type?: string,
        placeholder?: string,
    };
    onChange?: any;
    
}

const Input: FC<InputProps> = ({children, props, onChange}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!onChange) {
            console.log("Input: no event handler was provided")
            return
        }
        onChange(e.currentTarget.value);
    };
    const defaultProps = {
        name: "defaultInput",
        type: "basic",
        placeholder: "",
    }
    const data = {
        name: (props && props.name) ? props.name : defaultProps.name,
        type: (props && props.type) ? props.type : defaultProps.type,
        placeholder: (props && props.placeholder) ? 
            props.placeholder : defaultProps.placeholder,
    }
    const classes = useMemo<string>(()=>[styles.input, styles[data.type]].join(' '), [data.type])
    return (
        <div>
            <input 
                className={classes}
                id={data.name} 
                placeholder={data.placeholder} 
                disabled={data.type === "disabled"}
                onChange={handleChange}
            >
            </input>
        </div>
    );
}

export default Input;
