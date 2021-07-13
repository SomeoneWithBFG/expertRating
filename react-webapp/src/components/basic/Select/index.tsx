import { FC, SelectHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    children?: React.ReactNode
    name: string
    disabled?: boolean
    selectDefaultValue?: string
    options: { value: string; placeholder?: string }[]
    onChange: React.ChangeEventHandler<HTMLSelectElement> | undefined
}

const Select: FC<SelectProps> = ({
    children,
    name,
    disabled,
    selectDefaultValue,
    options,
    onChange,
}) => {
    return (
        <div>
            <select
                className={styles.select}
                id={name}
                disabled={disabled}
                onChange={onChange}
                value={selectDefaultValue}
            >
                {options &&
                    options.map((option, index) => {
                        return (
                            <option
                                key={index}
                                className={styles.selectElement}
                                value={option.value}
                                selected={selectDefaultValue === option.value}
                            >
                                {option.placeholder
                                    ? option.placeholder
                                    : option.value}
                            </option>
                        )
                    })}
            </select>
        </div>
    )
}

export default Select
