import Option from './Option/Option';
import photo1 from '../../picture/app.png';
import photo2 from '../../picture/family.png';
import photo3 from '../../picture/loan.png';

const Options = () => {
    return (
        <div className='w-full flex flex-col items-center bg-slate-200'>
            <h2 className='text-2xl my-10'>Do it easily without going out</h2>
            <div className='w-full flex flex-col items-center lg:flex-row lg:justify-around'>
                <Option photo={photo1} heading='Use on mobile' text='Now you can do everything with your bank account and finances by a mobile phone in our mobile app.'/>
                <Option photo={photo2} heading='Family account' text='One of our features is that you can open an family account and start saving money for your children.'/>
                <Option photo={photo3} heading='Loans everywhere' text='Need fast a small amount of money? You can easily get a loan to 7.000 PLN within 5 minutes in home.'/>
            </div>
        </div>
    )
}

export default Options;