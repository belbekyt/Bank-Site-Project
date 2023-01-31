import logo from '../../../picture/logo.png'
import '../../../index.css';

const Menu = () => {
    return(
        <>
            <div className='w-full h-20 flex flex-col items-center sm:flex-row sm:justify-between'>
                <img src={logo} alt='Our bank logo' className='lg:ml-40 w-28'/>
                <ul className='flex my-auto text-lg mt-5 md:mr-10 lg:mr-40'>
                    <li className='menu-item'>Payment</li>
                    <li className='menu-item'>Card</li>
                    <li className='menu-item'>Account</li>
                    <li className='menu-item'>ToS</li>
                </ul>
            </div>
        </>
    )
}

export default Menu;