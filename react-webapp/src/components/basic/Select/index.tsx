import { FC, SelectHTMLAttributes, useMemo } from "react"
import styles from "./styles.module.scss"

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    children?: React.ReactNode;
    props?: {
        name?: string,
        type?: string,
        defaultValue?: {value: string, placeholder?: string}
        options?: {value: string, placeholder?: string}[],
    };
    onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined
}

const Select: FC<SelectProps> = ({children, props, onChange}) => {
    const defaultProps = {
        name: "defaultSelector",
        type: "basic",
        defaultValue: {value: "", placeholder: ""},
        options: [],
    }
    const data = {
        name: (props && props.name) ? props.name : defaultProps.name,
        type: (props && props.type) ? props.type : defaultProps.type,
        defaultValue: (props && props.defaultValue) ? 
            props.defaultValue : defaultProps.defaultValue,
        options: (props && props.options) ? props.options : defaultProps.options,
    }
    const classes = useMemo<string>( () =>
        [styles.select, styles[data.type]].join(' '), 
        [data.type]
    )
    return (
        <div>
            <select 
                className={classes}
                id={data.name} 
                disabled={data.type === "disabled"}
                onChange={onChange}
            >
                <option 
                    key={"hidden"} 
                    className={styles.selectElement} 
                    value={data.defaultValue ? data.defaultValue.value : "false"} 
                    hidden
                >
                    {data.defaultValue.value}
                </option>
                {data.options ? data.options.map((option, index) => {
                    return (
                        <option key={index} className={styles.selectElement} value={option.value}>
                            {option.placeholder ? option.placeholder : option.value}
                        </option>
                    )
                }) : ""}
            </select>
        </div>
    );
}

export default Select;
