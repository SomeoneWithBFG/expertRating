import { FC, InputHTMLAttributes } from "react"
import styles from "./styles.module.scss"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    isDisabled?: boolean,
    placeholder: string,
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    
}

const Input: FC<InputProps> = ({ children, name, isDisabled, placeholder, onChange }) => {
    return (
        <div>
            <input 
                className = { styles.input }
                id = { name } 
                placeholder = { placeholder } 
                disabled = { isDisabled }
                onChange = { onChange }
            >
            </input>
        </div>
    );
}

export default Input;
