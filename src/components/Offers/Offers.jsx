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
        <div className='flex flex-col items-center my-10 md:flex-row'>
            <div className='flex flex-col items-center item ml-10 md:w-5/12'>
                <h2 className='text-2xl my-10 font-bold text-center md:text-3xl'>We are giving you best options</h2>
                <img className='w-72 md:w-96' src={photoSrc} alt={alt} />
                <p className='px-10 py-5 text-center'>Our bank was build from scratch to delivery the best experience to our users. We provide you products and tools you need to grow your company faster and to get as much savings as you can.</p>
            </div>
            <div className='md:w-7/12'>
                <div onClick={() => setImageNumber(1)}>
                    <Offer title='Card without plastic' content='In our offer you can easily get the new ecologic card that does not contain any plastic. After you meet our requirements we can send you this card within 3 to 7 working days.'/>
                </div>
                <div onClick={() => setImageNumber(2)}>
                    <Offer title='Use it everywhere' content='You can do your payments everywhere - thats because we have our mobile application that can be installed on ony device with Android or IOS. The application is user friendly so you can easily use it!' />
                </div>
                <div onClick={() => setImageNumber(1)}>
                    <Offer title='Pay within a second' content='The new card is very fast so you can pay with it in every terminal by holding it near for just one second! Of course there is a payment blockade that you can set in your mobile app.'/>
                </div>
                <div onClick={() => setImageNumber(2)}>
                    <Offer title='Your card is stolen?' content='Of course there are situations when someone stole your card or you just unfortunately lose it - do not worry, your money will be safe - you can easily report a stolen card and block it in your mobile app!'/>
                </div>
            </div>
        </div>
    )
}

export default Offers;