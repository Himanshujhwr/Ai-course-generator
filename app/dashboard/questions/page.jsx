import { ExternalLink } from 'lucide-react'
import React from 'react'


function Questions() {
    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4  sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div className="relative z-10 lg:py-16">
                        <div className="relative h-64 sm:h-80 lg:h-full">
                            <img
                                alt=""
                                src="/back.jpg"
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="relative flex items-center bg-[#dcd9d9]">
                        <span
                            className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-[#dcd9d9]"
                        ></span>

                        <div className="p-8 sm:p-16 lg:p-24">
                            <h2 className="text-2xl font-bold sm:text-3xl">
                                Interested in learning Web Development and DSA? Explore our courses here!
                            </h2>

                            <p className="mt-4 text-gray-600">
                                Unlock your potential with our expert-led courses in Web Development and data structures & algorithms (DSA).
                                From HTML to advanced algorithms, master the essentials to excel in coding interviews and real-world projects.
                                Start your journey to becoming a skilled developer today!
                            </p>

                            <a
                                href="https://course-maker-nu.vercel.app/courses"
                                className=" mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                            >
                                <div className='flex items-center justify-center gap-2'>
                                    <ExternalLink />Learn More
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Questions