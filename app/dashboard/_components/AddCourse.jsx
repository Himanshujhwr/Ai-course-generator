"use client"
import { UserCourseListContext } from '@/app/_context/UserCourseListContext';
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs'
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'

function AddCourse() {
    const {user}=useUser();
  const { userCourseList, setUserCourseList }=useContext(UserCourseListContext);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Render nothing until the component is mounted
  }

  return (
    <div className='flex items-center justify-between '>
        <div>
              <h2 className='text-3xl'>Hello ,&nbsp;<span className='font-bold uppercase text-primary '>{user?.fullName}</span> </h2>
              <p className='text-sm text-gray-500'>Create new course with AI , Share with your friends and Earn from it .</p>
        </div>
        <Link href={userCourseList>=100?'/dashboard/upgrade':'/create-course'}>
          <Button className="h-12 hover:bg-white hover:text-primary hover:border">
            + Create AI Course
          </Button>
        </Link>
    </div>
  ) 
}

export default AddCourse