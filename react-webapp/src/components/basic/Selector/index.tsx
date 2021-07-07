import { FC, SelectHTMLAttributes, useMemo } from "react"
import styles from "./styles.module.scss"

interface SelectorProps extends SelectHTMLAttributes<HTMLSelectElement> {
    children?: React.ReactNode;
    props: {
        name: string,
        type: string,
        defaultValue?: {value: string, placeholder?: string}
        options?: {value: string, placeholder?: string}[],
    };
    onChange?: any
}

const Selector: FC<SelectorProps> = ({children, props, onChange}) => {
    const classes = useMemo<string>( () =>
        [styles.selector, styles[props.type]].join(' '), 
        [props.type]
    )
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if(!onChange) {
            console.log("Input: no event handler was provided")
            return
        }
        onChange(e.currentTarget.value);
    };
    const defaultOption = () => {
        console.log(props.defaultValue)
        if (!props.defaultValue) {
            return ""
        }
        else if (!props.defaultValue.placeholder) {
            return props.defaultValue.value
        }
        else {
            return props.defaultValue.value
        } 
    }
    return (
        <div>
            <select 
                className={classes}
                id={props.name} 
                disabled={props.type === "disabled"}
                onChange={handleChange}
            >
                <option 
                    key={"hidden"} 
                    className={styles.selectorElement} 
                    value={props.defaultValue ? props.defaultValue.value : "false"} 
                    hidden
                >
                    {defaultOption()}
                </option>
                {props.options ? props.options.map((option) => {
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
