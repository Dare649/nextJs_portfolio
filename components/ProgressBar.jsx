

const ProgressBar = ({data}) => {
  return (
    <div className='border-2 border-red-500 rounded-md lg:w-[30%] sm:w-full h-[10%]'>
        {
            data.map((item, index) => (
                <div key={index} className='p-3 flex flex-row items-center justify-between'>
                    <p className='text-lg capitalize'>{item.title}</p>
                    <div className='bg-white h-2 w-[70%] rounded-xl'>
                        <div style={{ width: `${item.rate}%` }} className={`bg-green-500 h-full rounded-xl`}></div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ProgressBar
