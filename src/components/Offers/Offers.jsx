import Offer from './Offer/Offer';
import card from '../../picture/offerCard.png';
import phone from '../../picture/offerHand.png';
import { useState, useEffect } from 'react';

const Offers = () => {
    const [imageNumber, setImageNumber] = useState(1);
    const [photoSrc, setPhotoSrc] = useState();
    const [alt, setAlt] = useState();

    useEffect(() => {
        if(imageNumber%2===0){
            setPhotoSrc(phone);
            setAlt('Mobile app');
        }
        else{
            setPhotoSrc(card);
            setAlt('Payment card');
        }
    }, [imageNumber]);

    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col item'>
                <h2 className='text-3xl my-10 font-bold'>We are giving you best options</h2>
                <img className='w-96' src={photoSrc} alt={alt} />
            </div>
            <div>
                <p className='px-10 py-5 text-center'>Our bank was build from scratch to delivery the best experience to our users. We provide you products and tools you need to grow your company faster and to get as much savings as you can.</p>
                <div onClick={() => setImageNumber(1)}>
                    <Offer title='Card without plastic' content='In our offer you can easily get the new ecologic card that does not contain any plastic. After you meet our requirements we can send you this card within 3 to 7 working days.'/>
                </div>
                <div onClick={() => setImageNumber(2)}>
                    <Offer title='Use it everywhere' content='You can do your payments everywhere - thats because we have our mobile application that can be installed on ony device with Android or IOS. The application is user friendly so you can easily use it!' />
                </div>
            </div>
        </div>
    )
}

export default Offers;