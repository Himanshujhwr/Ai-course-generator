"use client"

import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import { and, eq } from 'drizzle-orm';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import CourseBasicInfo from '../_components/CourseBasicInfo';
import { MdContentCopy, MdDashboard, MdVideoLibrary } from "react-icons/md";

function FinishScreen({ params }) {
    const { user } = useUser();
    const [course, setCourse] = useState([]);
    const [copied, setCopied] = useState(false);  // State to track copy action
    const router = useRouter();

    useEffect(() => {
        params && GetCourse();
    }, [params, user]);

    const GetCourse = async () => {
        const result = await db.select().from(CourseList)
            .where(and(eq(CourseList.courseId, params?.courseId)),
                eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress))

        setCourse(result[0]);
        console.log(result);
    }

    // Function to handle the copy action
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(process.env.NEXT_PUBLIC_HOST_NAME + 'course/' + course?.courseId);
            setCopied(true);  // Set copied to true when successfully copied

            // Reset the state after 2 seconds
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (error) {
            console.error("Failed to copy text:", error);
        }
    };

    return (
        <div className='px-10 md:px-20 lg:px-44 my-7'>
            <div className="text-center mb-8">
                <h2 className='font-bold text-3xl mb-2 text-primary'>Congrats! Your Course is Ready</h2>
                <p className="text-gray-600">Your course is now waiting for you in your dashboard</p>
            </div>

            <CourseBasicInfo course={course} refreshData={() => console.log()} />

            <div className="mt-8 space-y-6 bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
                <h2 className='font-medium text-xl'>What would you like to do next?</h2>

                
                
                <div className="bg-white p-4 rounded-md border border-gray-200">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                        <div>
                            <h3 className="font-medium text-gray-700">Find your course in your dashboard</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Access your dashboard anytime at <span className="font-medium text-primary">{process.env.NEXT_PUBLIC_HOST_NAME}dashboard</span>
                            </p>
                        </div>
                        <button
                            onClick={() => router.push('/dashboard')}
                            className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1 text-sm"
                        >
                            <span>Visit Dashboard</span> →
                        </button>
                    </div>
                </div>

                {/* Keep URL copying functionality but in a more subtle way */}
                <div className="mt-4 text-sm text-gray-500 border border-dashed border-gray-200 p-4 rounded-md flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span>Course URL: <span className="text-gray-600 font-mono text-xs sm:text-sm">{process.env.NEXT_PUBLIC_HOST_NAME}course/{course?.courseId}</span></span>
                    <button
                        onClick={handleCopy}
                        className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                    >
                        <MdContentCopy className={`h-4 w-4 ${copied ? 'text-green-500' : ''}`} />
                        <span>{copied ? 'Copied!' : 'Copy URL'}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FinishScreen;