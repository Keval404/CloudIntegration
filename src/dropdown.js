import React,{useState} from 'react'
import { Pipelines } from './pipelines';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
        <div className="relative w-90 m-4 flex flex-col items-center h-[340px] rounded">
            <button onClick={()=>setIsOpen((prev) => !prev)} className='bg-black text-white py-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white'>
                Stage 1
                {!isOpen ? (
                    <div>
                        v
                    </div>
                ):(
                    <div>
                        ^
                    </div>
                )}

                {isOpen && <div className='bg-black text-white h-12m absolute top-20 flex flex-col items-start rounded-lg p-2 w-full'>
                        {Pipelines.map((item, i) => {
                            return (
                                <>
                                    <div className='flex w-full justify-between hover:bg-white text-white hover:text-black rounded-r-lg p-4 border-l-transparent ' key={i}>
                                        <h3>{item.configuration}</h3>
                                        {/* <h3>{item.}</h3>
                                        <h3>{item.name}</h3> */}
                                    </div>  
                                </>
                            )
                                      

                        })}
                    </div>}
            </button>
        </div>

        
    </>
  )
}

export default Dropdown


