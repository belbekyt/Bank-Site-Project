import logo from '../../../picture/logo.png';

const Menu = () => {
    return(
        <div className='w-full h-44 pt-3 sm:h-28 flex flex-col items-center background-green sm:flex-row sm:justify-between'>
            <img src={logo} alt='Our bank logo' className='md:ml-10 lg:ml-40 w-48 -my-5 sm:my-auto sm:-mt-3'/>
            <ul className='flex my-auto mt-5 md:mr-10 lg:mr-40'>
                <li className='menu-item'>Payment</li>
                <li className='menu-item'>Card</li>
                <li className='menu-item'>Account</li>
                <li className='menu-item'>ToS</li>
            </ul>
        </div>
    )
}

export default Menu;