import { UserInputContext } from '@/app/_context/UserInputContext';
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useContext } from 'react'
import { FaLightbulb } from "react-icons/fa";
import { MdOutlineMoreTime } from "react-icons/md";



function TopicDescription() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const handleInputChange = (fieldName , value)=>{
    setUserCourseInput(prev=>({
      ...prev,
      [fieldName]:value
    }))
  }
  return (
    <div className='mx-20 lg:max-44 '>
        <div className='mt-5'>
              <label className='flex items-center gap-1 text-lg' ><FaLightbulb />Write the topic for which you want to generate a course(e.g., Python Course , Yoga , etc.): </label>
            <Input placeholder={'Topic'} 
                className="h-14 text-xl mt-2 "
                defaultValue={userCourseInput?.topic}
                onChange={(e)=>handleInputChange('topic',e.target.value)}/>
        </div>
        <div className='mt-5 '>
        <label className='flex items-center gap-1 text-lg'><MdOutlineMoreTime />Tell us more about your course , what you want to include in the course (Optional)</label>
        <Textarea placeholder="About your Course" 
          defaultValue={userCourseInput?.description}
            onChange={(e) => handleInputChange('description', e.target.value)} 
            className="h-24 text-xl mt-2" />
        </div>
        
    </div>
  )
}

export default TopicDescription