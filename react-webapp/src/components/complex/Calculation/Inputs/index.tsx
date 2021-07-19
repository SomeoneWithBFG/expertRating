import React from 'react'

import Input from '../../../basic/Input';

import styles from './styles.module.scss'

function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value)
}

const Inputs: React.FC = () => {
    const x = 3;
    const y = 3;
    const method = ""
    const inputField = new Array<Array<string>>(x);
    for (var i = 0; i < x; i++) {
        inputField[i] = new Array<string>(x);
        for (var j = 0; j < y; j++) {
            inputField[i][j] = `${i+1}`+`${j+1}`
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.inputField}>
                <div className={styles.row}>
                {inputField.map((row, i) => (
                    <div key={row[i]}>
                        {row.map((col) => (
                            <div key={col} className={styles.inputElement}>
                                <Input 
                                    name={col}
                                    placeholder={col}
                                    onChange={handleInput}
                                />
                            </div>
                        ))}
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Inputs
