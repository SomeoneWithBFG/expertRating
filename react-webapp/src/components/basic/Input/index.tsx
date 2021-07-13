import { FC, InputHTMLAttributes, useMemo } from "react"
import styles from "./styles.module.scss"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    type?: string,
    placeholder: string,
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    
}

const Input: FC<InputProps> = ({children, name, type="basic", placeholder, onChange}) => {
    const classes = useMemo<string>(()=>[styles.input, styles[type]].join(' '), [type])
    return (
        <div>
            <input 
                className={classes}
                id={name} 
                placeholder={placeholder} 
                disabled={type === "disabled"}
                onChange={onChange}
            >
            </input>
        </div>
    );
}

export default Input;
