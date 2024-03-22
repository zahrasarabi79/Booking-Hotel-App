import "./App.css";
import Header from "./components/Header/Header.jsx";
import {Toaster} from "react-hot-toast";
import LocationList from "./components/LocationList/LocationList.jsx";

function App() {
    return (
        <div>
            <Toaster/>
            <Header/>
            <LocationList/>
        </div>)
}

export default App;

