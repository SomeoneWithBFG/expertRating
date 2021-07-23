import { FC, InputHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    disabled?: boolean
    placeholder: string
    value?: string
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}

const Input: FC<InputProps> = ({
    children,
    name,
    disabled,
    placeholder,
    value,
    onChange,
}) => {
    return (
        <div>
            <input
                className={styles.input}
                id={name}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                onChange={onChange}
            ></input>
        </div>
    )
}

export default Input
