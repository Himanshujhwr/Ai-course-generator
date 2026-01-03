"use client"
import Header from '@/app/_components/Header'
import ChapterList from '@/app/create-course/[courseId]/_components/ChapterList'
import CourseBasicInfo from '@/app/create-course/[courseId]/_components/CourseBasicInfo'
import CourseDetail from '@/app/create-course/[courseId]/_components/CourseDetail'
import { db } from '@/configs/db'
import { CourseList } from '@/configs/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'

function Course({params}) {

    const [course , setCourse] =useState();

    useEffect(()=>{
        params&&GetCourse();
    },[params])

    const GetCourse=async()=>{
        const result=await db.select().from(CourseList)
        .where(eq(CourseList?.courseId , params?.courseId))
        setCourse(result[0]);
        // console.log(result)
    }

  return (
    <div>
        <Header/>
      <div className='px-10 p-10 md:px-20 lg:px-44'>
        {course ? (
          <>
            {/* Loaded course content */}
            <CourseBasicInfo course={course} edit={false} />
            <CourseDetail course={course} />
            <ChapterList course={course} edit={false} />
          </>
        ) : (
          <>
            {/* Skeleton loading effect */}
            <h2 className='text-2xl'>Fetching ...</h2>
            <div className="w-full bg-slate-200 animate-pulse rounded-lg h-[300px] mb-5"></div> {/* CourseBasicInfo Skeleton */}
            <div className="w-full bg-slate-200 animate-pulse rounded-lg h-[100px] mb-5"></div> {/* CourseDetail Skeleton */}
            <div className="w-full bg-slate-200 animate-pulse rounded-lg h-[150px] mb-5"></div>
          </>
        )}
      </div>

    </div>
  )
}

export default Course