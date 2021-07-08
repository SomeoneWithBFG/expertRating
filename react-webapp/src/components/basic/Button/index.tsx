import { FC, ButtonHTMLAttributes, useMemo } from "react"
import styles from "./styles.module.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    props?: {
        name?: string,
        type?: string,
        placeholder?: string,
        isDisabled?: boolean,
    };
    onClick?:
        | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
        | undefined;
}

const Button: FC<ButtonProps> = ({children, props, onClick}) => {
    const defaultProps = {
        name: "",
        type: "basic",
        placeholder: "",
        isDisabled: false,
    }
    const data = {
        name: (props && props.name) ? props.name : defaultProps.name,
        type: (props && props.type) ? props.type : defaultProps.type,
        placeholder: (props && props.placeholder) ? 
            props.placeholder : defaultProps.placeholder,
        isDisabled: (props && props.isDisabled) ? 
            props.isDisabled : defaultProps.isDisabled,
    }
    const classes = useMemo<string>( () =>
        [styles.button, styles[data.type]].join(' '), 
        [data.type]
    )
    return (
        <div>
            <button 
                className={classes}
                id={data.name} 
                disabled={data.isDisabled}
                onClick={onClick}
            >
                {data.placeholder} 
            </button>
        </div>
    );
}

export default Button;
