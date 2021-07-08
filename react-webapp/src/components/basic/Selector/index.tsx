import { FC, SelectHTMLAttributes, useMemo } from "react"
import styles from "./styles.module.scss"

interface SelectorProps extends SelectHTMLAttributes<HTMLSelectElement> {
    children?: React.ReactNode;
    props?: {
        name?: string,
        type?: string,
        defaultValue?: {value: string, placeholder?: string}
        options?: {value: string, placeholder?: string}[],
    };
    onChange?: any
}

const Selector: FC<SelectorProps> = ({children, props, onChange}) => {
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
        [styles.selector, styles[data.type]].join(' '), 
        [data.type]
    )
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if(!onChange) {
            console.log("Input: no event handler was provided")
            return
        }
        onChange(e.currentTarget.value);
    };
    return (
        <div>
            <select 
                className={classes}
                id={data.name} 
                disabled={data.type === "disabled"}
                onChange={handleChange}
            >
                <option 
                    key={"hidden"} 
                    className={styles.selectorElement} 
                    value={data.defaultValue ? data.defaultValue.value : "false"} 
                    hidden
                >
                    {data.defaultValue.value}
                </option>
                {data.options ? data.options.map((option) => {
                    return (
                        <option key={option.value} className={styles.selectorElement} value={option.value}>
                            {option.placeholder ? option.placeholder : option.value}
                        </option>
                    )
                }) : ""}
            </select>
        </div>
    );
}

export default Selector;
