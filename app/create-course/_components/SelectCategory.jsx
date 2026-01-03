import { UserInputContext } from '@/app/_context/UserInputContext'
import CategoryList from '@/app/_shared/CategoryList'
import Image from 'next/image'
import React, { useContext } from 'react'

function SelectCategory() {
  const { userCourseInput, setUserCourseInput } =useContext(UserInputContext);
  const handleCategoryChange=(category)=>{
    setUserCourseInput(prev=>({
      ...prev,
      category:category
    }))
  }
  return (
      <div className=' px-10 md:px-20'>
        <h2 className='my-5 text-xl'>Select the Course Category </h2>
    <div className='grid grid-cols-3 gap-10'>
        
        {CategoryList.map((item,index)=>(
          <div className={`flex flex-col p-5 border items-center hover:scale-110 transition-all
                            rounded-xl hover:border-primary  hover:bg-blue-50
                            cursor-pointer ${userCourseInput?.category==item.name && 'border-primary  bg-blue-50'}`} onClick={()=>handleCategoryChange(item.name)}>
                <Image src={item.icon} width={80} height={80}/>
                <h1 className='text-xl'>{item.name}</h1>
            </div>
        ))}
    </div>
    </div>
  )
}

export default SelectCategory