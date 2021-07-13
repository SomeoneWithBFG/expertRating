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

const Button: FC<ButtonProps> = ({children, name, buttonType="basic", placeholder="", isDisabled, onClick}) => {
    const classes = useMemo<string>( () =>
        [styles.button, styles[buttonType]].join(' '), 
        [buttonType]
    )
    return (
        <div>
            <button 
                className={classes}
                id={name} 
                disabled={isDisabled}
                onClick={onClick}
            >
                {placeholder} 
            </button>
        </div>
    );
}

Button.defaultProps = {
    name: "",
    buttonType: "basic",
    placeholder: "",
    isDisabled: false,
}

export default Button;
