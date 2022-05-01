import ReactDOM from 'react-dom/client';
import App from "./App"

const Con = () => {
    return (
        <div className='container'>
            <App/>
        </div>
    )
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Con/>)