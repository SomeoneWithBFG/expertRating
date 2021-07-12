import { FC, ButtonHTMLAttributes, useMemo } from "react"
import styles from "./styles.module.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    props: {
        name: string,
        type: string,
        placeholder: string,
        isDisabled: boolean,
    };
    onClick?:
        ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
        | undefined;
}

const Button: FC<ButtonProps> = ({children, props, onClick}) => {
    const classes = useMemo<string>( () =>
        [styles.button, styles[props.type]].join(' '), 
        [props.type]
    )
    return (
        <div>
            <button 
                className={classes}
                id={props.name} 
                disabled={props.isDisabled}
                onClick={onClick}
            >
                {props.placeholder} 
            </button>
        </div>
    );
}

Button.defaultProps = {
    props: {
        name: "",
        type: "basic",
        placeholder: "",
        isDisabled: false,
    }
}

export default Button;
