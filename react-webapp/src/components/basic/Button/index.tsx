import { FC, ButtonHTMLAttributes, useMemo } from "react"
import styles from "./styles.module.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    name: string,
    buttonType?: string,
    placeholder?: string,
    isDisabled: boolean,
    onClick:
        ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
        | undefined;
}

const Button: FC<ButtonProps> = ({ children, name, buttonType, placeholder = "", isDisabled, onClick }) => {
    const classes = useMemo<string>( () => 
        buttonType ? [styles.button, styles[buttonType]].join(' ') : styles.button, [buttonType]
    )
    return (
        <div>
            <button 
                className = { classes }
                id = { name } 
                disabled = { isDisabled }
                onClick = { onClick }
            >
                { placeholder } 
            </button>
        </div>
    );
}

export default Button;
