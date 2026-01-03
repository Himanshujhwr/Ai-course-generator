import Link from 'next/link'
import React from 'react'

function Page() {
    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 relative"
            style={{
                backgroundImage:
                    "url('/interview.jpg')",
            }}
        >
            {/* Blurred Overlay */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0" />

            {/* Glass Card Content */}
            <div className="relative z-10 max-w-3xl w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl text-center text-white">
                <h1 className="text-5xl font-bold mb-4 drop-shadow-md">
                    Online <span className='text-primary'>Interview Assistant</span>
                </h1>
                <p className="text-lg text-gray-200 mb-6 max-w-xl mx-auto">
                    Train for your dream role with AI-powered interviews. Practice questions, receive feedback, and build confidence from the comfort of your home.
                </p>

                
                <Link href="https://interview-2-7b3h.vercel.app/sign-in">
                
                <button className="bg-white hover:scale-105 transition-all text-primary text-xl font-semibold py-3 px-8 rounded-xl shadow-lg">
                    🚀 Start Interview
                </button>
                </Link>
            </div>
        </div>
    )
}

export default Page
