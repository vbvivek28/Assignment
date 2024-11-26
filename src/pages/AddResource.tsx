import { Link } from 'react-router-dom'
import ItemDetailsForm from '../components/ItemDetailsForm'

const AddResource = () => {

  return (
    <div className=''>
          <main className="flex overflow-scroll sm:overflow-hidden flex-col bg-zinc-50 h-[92.5vh]">
      <section className="z-10 self-end w-full max-w-[1391px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-3/5 max-md:ml-0 max-md:w-80 p-5">
            <div className="flex flex-col mt-6 w-full text-gray-500 max-md:mt-10 max-md:max-w-full">
            <Link to="/">   <div className="flex gap-1 self-start text-xs leading-none whitespace-nowrap">
               
              
              <img
                  loading="lazy"
                  src="/lefticon.png"
                  className="object-contain shrink-0 w-4 aspect-square"
                  alt=""
                />
                <span >Users</span>
               
              </div> </Link>
              <ItemDetailsForm />
            </div>
          </div>
          <aside className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="/image 9.png"
              className="object-contain grow w-full rounded-none aspect-[0.68] max-md:mt-10 max-md:max-w-full"
              alt="Item preview"
            />
          </aside>
        </div>
      </section>
    </main>
      
    </div>
  )
}

export default AddResource
