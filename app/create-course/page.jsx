// "use client"
// import React, { useContext, useEffect, useState } from 'react'
// import { RiStackFill } from "react-icons/ri";
// import { HiLightBulb } from "react-icons/hi";
// import { HiClipboardDocumentCheck } from "react-icons/hi2";
// import { Button } from '@/components/ui/button';
// import SelectCategory from './_components/SelectCategory';
// import TopicDescription from './_components/TopicDescription';
// import SelectOption from './_components/SelectOption';
// import { UserInputContext } from '../_context/UserInputContext';
// import { GenerateCourseLayout_AI } from '@/configs/AiModel' ;
// import LoadingDialog from './_components/LoadingDialog';
// import { db } from '@/configs/db';
// import { CourseList } from '@/configs/schema';
// import { v4 as uuidv4 } from 'uuid';
// import { useUser } from '@clerk/nextjs';
// import { useRouter } from 'next/navigation';

// function CreateCourse() {
//     const StepperOptions =[
//         {
//             id:1,
//             name:'Category',
//             icon: <RiStackFill />
//         },
//         {
//             id: 2,
//             name: 'Topic & Desc',
//             icon: <HiLightBulb />
//         },
//         {
//             id: 3,
//             name: 'Options',
//             icon: <HiClipboardDocumentCheck />
//         }
//     ]

//     const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
//     const [loading , setLoading]=useState(false);
//     const [activeIndex , setActiveIndex]=useState(0);
//     const {user}=useUser();
//     const router=useRouter();

//     useEffect(()=>{
//         // console.log(userCourseInput);

//     },[userCourseInput]);

//     const checkStatus=()=>{
//         if(userCourseInput?.length==0){
//             return true;
//         }
//         if(activeIndex==0&&(userCourseInput?.category?.length==0 || userCourseInput?.category==undefined)){
//             return true;
//         }
//         if(activeIndex==1&& (userCourseInput?.topic?.length==0 || userCourseInput?.topic==undefined)){
//             return true;
//         }
//         else if (activeIndex == 2 && (userCourseInput?.level == undefined ||
//                                      userCourseInput?.duration == undefined ||
//                                      userCourseInput?.displayVideo == undefined ||
//                                      userCourseInput?.noOfChapters==undefined)){
//             return true;
//         }
//         else{
//             return false;
//         }
//     }

//     const GenerateCourseLayout =async()=>{
//         setLoading(true);
//         const BASIC_PROMPT='Generate a Course Tutorial on Following Detail with field Course Name , Description , Along with Chapter Name , About , Duration:';
//         const USER_INPUT_PROMPT='Category:'+userCourseInput?.category+',Topic:'+userCourseInput?.topic+',Level:'+userCourseInput?.level+',Duration:'+userCourseInput?.duration+' , NoOf Chapters:'+userCourseInput?.noOfChapters+', in JSON format ' ;
//         const FINAL_PROMPT=BASIC_PROMPT+USER_INPUT_PROMPT;
//         // console.log(FINAL_PROMPT);

//         const result = await GenerateCourseLayout_AI.sendMessage(FINAL_PROMPT);
//         console.log(result.response?.text());
//         console.log(JSON.parse(result.response?.text()));
//         setLoading(false);
//         SaveCourseLayoutInDb(JSON.parse(result.response?.text()));
//     }

//     const SaveCourseLayoutInDb=async(courseLayout)=>{
//         var id = uuidv4();
//         setLoading(true);
//         const result=await db.insert(CourseList).values({
//             courseId:id,
//             name:userCourseInput?.topic,
//             level:userCourseInput?.level,
//             category:userCourseInput?.category,
//             courseOutput:courseLayout,
//             createdBy:user?.primaryEmailAddress?.emailAddress,
//             userName:user?.fullName,
//             userProfileImage:user?.imageUrl
//         });

//         console.log("finish");
//         setLoading(false);
//         router.replace('/create-course/' + id);

//     }

//   return (
//     <div>
//         <div className='flex flex-col justify-center items-center mt-10 '>
//             <h2 className='text-5xl text-primary font-semibold '>Create Course</h2>
//             <div className='flex mt-10'>
//                 {StepperOptions.map((item,index)=>(
//                     <div className='flex items-center '>
//                         <div className='flex flex-col items-center w-[50px] md:w-[100px] '>
//                             <div className={`bg-gray-200 p-3 rounded-full text-white
//                                 ${activeIndex >= index &&'bg-primary'}`}>
//                                 {item.icon}
//                             </div>
//                             <h2 className='hidden md:block md:text-sm'>{item.name}</h2>
//                         </div>
//                         {index != StepperOptions?.length - 1 && <div className={`h-1 w-[50px]
//                             md:w-[100px]  rounded-full lg:w-w-[170px] bg-gray-300
//                             ${activeIndex-1>=index&& 'bg-primary'}`}></div>}

//                     </div>
//                 ))}
//             </div>
//         </div>

//         <div className='px-10 md:px-20 lg:px-44 mt-10 '>
//               {activeIndex == 0 ? <SelectCategory /> : activeIndex == 1 ? <TopicDescription /> : <SelectOption />}
//             <div className='flex justify-between mt-10 '>
//                 <Button disabled={activeIndex == 0}
//                 variant='outline' onClick={() => setActiveIndex(activeIndex - 1)}>Previous</Button>
//                   {activeIndex < 2 && <Button className="text-lg py-3 px-6" disabled={checkStatus()} onClick={() => setActiveIndex(activeIndex + 1)}>Next</Button>}
//                   {activeIndex == 2 && <Button className="text-lg py-3 px-6" disabled={checkStatus()} onClick={() => GenerateCourseLayout() }>Generate Course Layout</Button>}
//             </div>
//         </div>

//         <LoadingDialog loading={loading}/>
//     </div>
//   )
// }

"use client";

import React, { useContext, useState } from "react";
import { RiStackFill } from "react-icons/ri";
import { HiLightBulb } from "react-icons/hi";
import { HiClipboardDocumentCheck } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import SelectCategory from "./_components/SelectCategory";
import TopicDescription from "./_components/TopicDescription";
import SelectOption from "./_components/SelectOption";
import { UserInputContext } from "../_context/UserInputContext";
import LoadingDialog from "./_components/LoadingDialog";

import { CourseList } from "@/configs/schema";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function CreateCourse() {
  const StepperOptions = [
    { id: 1, name: "Category", icon: <RiStackFill /> },
    { id: 2, name: "Topic & Desc", icon: <HiLightBulb /> },
    { id: 3, name: "Options", icon: <HiClipboardDocumentCheck /> },
  ];

  const { userCourseInput } = useContext(UserInputContext);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { user } = useUser();
  const router = useRouter();

  const checkStatus = () => {
    if (!userCourseInput) return true;

    if (activeIndex === 0 && !userCourseInput.category) return true;
    if (activeIndex === 1 && !userCourseInput.topic) return true;
    if (
      activeIndex === 2 &&
      (!userCourseInput.level ||
        !userCourseInput.duration ||
        !userCourseInput.noOfChapters)
    )
      return true;

    return false;
  };

  const GenerateCourseLayout = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/generate-course", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userCourseInput }),
      });

      if (!res.ok) throw new Error("API failed");

      const data = await res.json();
      await SaveCourseLayoutInDb(data.courseLayout);
    } catch (err) {
      console.error(err);
      alert("Failed to generate course");
    } finally {
      setLoading(false);
    }
  };

  const SaveCourseLayoutInDb = async (courseLayout) => {
    const res = await fetch("/api/save-course", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        courseLayout,
        userCourseInput,
      }),
    });

    const data = await res.json();
    router.replace("/create-course/" + data.courseId);
  };

  return (
    <div>
      <h2 className="text-5xl text-primary font-semibold text-center mt-10">
        Create Course
      </h2>

      <div className="px-10 md:px-20 lg:px-44 mt-10">
        {activeIndex === 0 ? (
          <SelectCategory />
        ) : activeIndex === 1 ? (
          <TopicDescription />
        ) : (
          <SelectOption />
        )}

        <div className="flex justify-between mt-10">
          <Button
            disabled={activeIndex === 0}
            variant="outline"
            onClick={() => setActiveIndex(activeIndex - 1)}
          >
            Previous
          </Button>

          {activeIndex < 2 && (
            <Button
              disabled={checkStatus()}
              onClick={() => setActiveIndex(activeIndex + 1)}
            >
              Next
            </Button>
          )}

          {activeIndex === 2 && (
            <Button disabled={checkStatus()} onClick={GenerateCourseLayout}>
              Generate Course Layout
            </Button>
          )}
        </div>
      </div>

      <LoadingDialog loading={loading} />
    </div>
  );
}

export default CreateCourse;
