import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Nav = () => {
    const location = useLocation();
    
    const isRootRoute = location.pathname === "/add";
  return (
    <div>
         <header className="flex overflow-hidden flex-col pt-4 w-full text-sm font-semibold leading-6 text-center text-white bg-white max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between self-center w-full max-w-[1352px] max-md:max-w-full">
          <img
            loading="lazy"
            src="/NxtWave TM_Coloured logo 1.png"
            alt="Company logo"
            className="object-contain shrink-0 aspect-[2.05] w-[82px]"
          />
          <div className="flex gap-8">
           {!isRootRoute &&(<Link to="/add" className="overflow-hidden gap-2.5 self-stretch px-5 py-2 bg-green-500 rounded">
              ADD ITEM
            </Link>)}
            <img
              loading="lazy"
              src="/image.png"
              alt=""
              className="object-contain shrink-0 w-10 aspect-square"
            />
          </div>
        </div>
        <div className="flex mt-4 w-full bg-zinc-200 min-h-[1px] max-md:max-w-full" />
      </header>      
    </div>
  )
}

export default Nav
