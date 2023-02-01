const Advertise = () => {
    return(
        <>
            <div className='w-full flex md:my-5'>
                <div className='advertise-block'>
                    <h2 className='advertise-text'>250K</h2>
                    <p>Clients</p>
                    <i class="fa-solid fa-user-group advertise-icon"></i>
                </div>
                <div className='advertise-block'>
                    <h2 className='advertise-text'>250M +</h2>
                    <p>Transactions</p>
                    <i class="fa-solid fa-file-invoice-dollar advertise-icon"></i>
                </div>
                <div className='advertise-block'>
                    <h2 className='advertise-text'>Only 5%</h2>
                    <p>Loans</p>
                    <i class="fa-solid fa-money-bill-transfer advertise-icon"></i>
                </div>
            </div>
        </>
    )
}

export default Advertise;