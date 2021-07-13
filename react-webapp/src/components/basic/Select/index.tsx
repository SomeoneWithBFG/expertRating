import { FC, SelectHTMLAttributes, useMemo } from "react"
import styles from "./styles.module.scss"

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    children?: React.ReactNode;
    name: string;
    isDisabled?: boolean;
    selectDefaultValue?: { value: string, placeholder?: string };
    options: { value: string, placeholder?: string }[];
    onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined
}

const Select: FC<SelectProps> = ({ children, name, isDisabled, selectDefaultValue, options, onChange }) => {
    return (
        <div>
            <select 
                className={ styles.select }
                id={ name } 
                disabled={ isDisabled }
                onChange={ onChange }
                value={ selectDefaultValue ? selectDefaultValue.value : "" }
            >
                { options ? options.map( (option, index) => {
                    return (
                        <option 
                            key = { index } 
                            className = { styles.selectElement } 
                            value = { option.value }
                            selected = { selectDefaultValue && selectDefaultValue.value === option.value }
                        >
                            { option.placeholder ? option.placeholder : option.value }
                        </option>
                    )
                }) : "" }
            </select>
        </div>
    );
}

export default Select;
