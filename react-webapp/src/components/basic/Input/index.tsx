import { FC, InputHTMLAttributes, useMemo } from "react"
import styles from "./styles.module.scss"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    props: {
        name: string,
        type: string,
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
    const classes = useMemo<string>(()=>[styles.input, styles[props.type]].join(' '), [props.type])
    return (
        <div>
            <input 
                className={classes}
                id={props.name} 
                placeholder={props.placeholder} 
                disabled={props.type === "disabled"}
                onChange={handleChange}
            >
            </input>
        </div>
    );
}

export default Input;
