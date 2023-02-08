import './index.css';
import Header from './components/Header/Header';
import Advertise from './components/Advertise/Advertise';
import Offers from './components/Offers/Offers';
import Footer from './components/Footer/Footer';

const App = () => {
    return(
        <>
            <Header />
            <Advertise />
            <Offers />
            <Footer />
        </>
    )
}

export default App;