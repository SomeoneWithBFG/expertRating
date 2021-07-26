import { FC, InputHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
    disabled?: boolean
    placeholder: string
    isPassword?: boolean
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}

const Input: FC<InputProps> = ({
    children,
    name,
    disabled,
    placeholder,
    isPassword,
    onChange,
}) => {
    return (
        <div className={styles.container}>
            <input
                type={isPassword ? 'password' : undefined}
                className={styles.input}
                id={name}
                placeholder={placeholder}
                disabled={disabled}
                onChange={onChange}
            ></input>
        </div>
    )
}

export default Input
