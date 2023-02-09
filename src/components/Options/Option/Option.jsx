import img from '../../../picture/loan.png';

const Option = () => {
    return (
        <div className="w-3/4 mb-14 rounded overflow-hidden cursor-pointer bg-slate-100 hover:bg-slate-200">
            <img src={img} alt="loan"/>
            <div className='p-5'>
                <h3 className='text-xl mb-2 font-semibold'>Create account here</h3>
                <p>You can easily register a new account by our internet site</p>
            </div>
        </div>
    )
}

export default Option;