import './App.css'
import Button from './components/Button/Button'

type Props = {}
const App = (props: Props) => {
    return (
        <div className="app">
            <h1>Перше завдання:</h1>
            <div>
                <Button />
                <Button />
                <Button />
            </div>
        </div>
    )
}
export default App
