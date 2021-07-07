import { FC, InputHTMLAttributes, useMemo } from "react"
import styles from "./styles.module.scss"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    placeholder?: string,
    type: string,
}

const Input: FC<InputProps> = ({name, placeholder, type }) => {
    const classes = useMemo<string>(()=>[styles.input, styles[type]].join(' '), [type])
    return (
        <div>
            <input 
                className={classes}
                id={name} 
                placeholder={placeholder} 
                disabled={type === "disabled"}
            >
            </input>
        </div>
    );
}

export default Input;
