import { useState } from 'react'

type Props = {}
const Button = ({}: Props) => {
    const [count, setCount] = useState<number>(0)
    const incrementCount = () => {
        setCount((prevState) => prevState + 1)
    }
    const resetCount = () => {
        setCount(0)
    }
    return (
        <div style={{ marginBottom: '10px' }}>
            <button onClick={incrementCount}>Change count {count}</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    )
}
export default Button
