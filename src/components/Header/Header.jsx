import Menu from './Menu/Menu';
import cardPhoto from '../../picture/headerPhoto.png';

const Header = () => {
    return(
        <>
            <Menu />
            <div className='flex flex-col text-white background-green md:flex-row-reverse md:pt-16 md:px-12 lg:px-36'>
                <img src={cardPhoto} alt="Payment card" className='w-64 h-64 lg:w-96 lg:h-96 md:w-96 mx-auto my-auto -mt-10 mb-5 xl:w-auto'/>
                <div className='px-8 py-auto'>
                    <h1 className='text-3xl lg:text-5xl font-bold'>Payment card to <span className='span-text-green'>grow</span> your <span className='span-text-underline'>business</span></h1>
                    <p className='my-6 lg:text-xl'>Discover all the advantages of our card. Create accound in our bank and get all starting bonuses. If you already have an accound - just log into our application by clicking the "Get Card" button. You can also download mobile version of it on google play store or app store!</p>
                    <div className='lg:mt-14'>
                        <button className='header-button mr-10'>Get Card</button>
                        <button className='header-button mb-10 md:mb-20'>Create Account</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;