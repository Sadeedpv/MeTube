import {Items} from './Data/SidebarItems';

function Sidebar({isOpen}) {
  return (
    <div className={isOpen? 'flex flex-col justify-between  ml-2 mr-2 col-span-1 z-10 shadow-sm md:ml-7 md:mr-0':'hidden'}>
      <ul className="flex flex-col justify-between gap-10 fixed overflow-y-scroll h-[95%]">
        {Items && Items.map((item, index) => {
          return (
            <li className='flex items-center text-center gap-4 transition-none p-3 cursor-pointer hover:text-gray-600 md:p-2'
            key={index}
            >
              {item.icon} {' '}<span className='font-semibold pr-4 hidden lg:block'>{item.name}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar