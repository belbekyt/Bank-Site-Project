import './index.css';
import Header from './components/Header/Header';
import Advertise from './components/Advertise/Advertise';
import Offers from './components/Offers/Offers';
import Footer from './components/Footer/Footer';
import Options from './components/Options/Options';

const App = () => {
    return(
        <>
            <Header />
            <Advertise />
            <Offers />
            <Options />
            <Footer />
        </>
    )
}

export default App;