import topdeck from '../assets/img/top_deck.svg'
import Avatar from "../assets/img/Avatar.png"
  
const Nav = () => {
  return (
    <div className='relative'>
      <div className='flex ml-12 pt-5 pb-5 gap-x-39 font-Heebo'>
        <div className='flex items-center'>
        <figure className='w-8.5 h-4.5'>
           <img src={topdeck} ></img>
        </figure>
        <ul className='text-(--text-gray) leading-[188%] flex gap-x-3  font-medium  text-base '>
          <li className='flex w-33 self-center pl-9.5'>
              TRADE
          </li>
          <li className='relative w-39.5 tracking-tight text-(--text-white) after:content-[""] after:block after:absolute after:bottom--3 after:left-1/2 after:-translate-x-1/2 after:w-1/12 after:h-1 after:bg-amber-50 after:rounded-full after:-z-10'>
            MARKET OVERVIEW
          </li>
          <li className=' w-33  pl-6'>
            PORTFOLIO
          </li>
        </ul>
        </div>
        
        {/* ---------------division----------- */}
        
        <div className='relative w-full max-w-sm'>
  <input
    type='text'
    placeholder='Search for token name or address'
    className='w:42 md:w-100 lg:w-150 h-8 pl-10 text-(--text-white) pr-4 py-2 border-1 border-(--bd) rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none '
  />
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400'
    fill='none'
    viewBox='0 0 24 24'
    stroke='currentColor'
  >
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'
      d='M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z' />
  </svg>
</div>

      
      </div>

      <div className='absolute right-6.25 top-3  flex gap-x-6.25'>
        <div className='h-13 flex flex-col items-end '>
          <h2 className='text-white font-Heebo font-normal leading-[188%] text-xl'> Example trader</h2>
          <p className='text-red-600 font-Heebo font-light leading-[188%] text-base mt-[-1rem]'> extrader.eth</p>
        </div>
        <figure className='w-15 h-13' >
          <img src={ Avatar} className='w-full h-full object-cover'/>
      </figure>

      </div>
     
    </div>
  )
}

export default Nav