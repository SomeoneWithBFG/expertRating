import { FC, SelectHTMLAttributes, useMemo } from "react"
import styles from "./styles.module.scss"

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    children?: React.ReactNode;
    name: string;
    type: string;
    selectDefaultValue?: {value: string, placeholder?: string};
    options: {value: string, placeholder?: string}[];
    onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined
}

const Select: FC<SelectProps> = ({children, name, type, selectDefaultValue=null, options, onChange}) => {
    const classes = useMemo<string>( () =>
        [styles.select, styles[type]].join(' '), 
        [type]
    )
    return (
        <div>
            <select 
                className={classes}
                id={name} 
                disabled={type === "disabled"}
                onChange={onChange}
            >   
                {()=>{
                    if (selectDefaultValue) {
                        return (
                            <option 
                                key={"hidden"} 
                                className={styles.selectElement} 
                                value={selectDefaultValue.value} 
                                hidden
                            >
                                {selectDefaultValue.value}
                            </option>
                        )
                    }
                }}
                {options ? options.map((option, index) => {
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
