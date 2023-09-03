import Navbar from './docs/Components/Navbar/Navbar.jsx';
import Poster from './docs/Components/Poster/Poster.jsx';
import Story from './docs/Components/Story/Story.jsx';

function App() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Story />
                <Poster />
                <Poster />
            </div>
        </div>
    );
}

export default App;
