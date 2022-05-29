import styles from './styles.module.scss'

//@ts-ignore
const parseObject = (data: Record<string, any>) => {
    return Object.keys(data).map((key) => {
        return (
            <p style={{marginLeft: '10px'}}>
                {`${key}: ${data[key]}`}
            </p>
        )
    })
}

const HOutput: React.FC = (data: Record<string, any>) => {

    return (
        <div className={styles.container}>
            <div>
                <p>
                    {`ID: ${data.id}`}
                </p>
                <p>
                    {`Метод: ${data.method}`}
                </p>
                <p>
                    {`Входные данные: ${data.inputMatrix}`}
                </p>
                <p>
                    {`X: ${data.x}, Y: ${data.y}`}
                </p>
                <p>
                    Результат: <br/>
                    {parseObject(data[`${data.method}Result`])}
                </p>
            </div>
        </div>
    )
}

export default HOutput
