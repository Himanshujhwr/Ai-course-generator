
import Link from 'next/link'
import React from 'react'

function PdfPage() {
    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 relative"
            style={{
                backgroundImage:
                    "url('/pdf.jpg')", // Replace with your actual image file
            }}
        >
            {/* Blurred Overlay */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0" />

            {/* Glass Card Content */}
            <div className="relative z-10 max-w-3xl w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-2xl text-center text-white">
                <h1 className="text-5xl font-bold mb-4 drop-shadow-md">
                    PDF Assistant
                </h1>
                <p className="text-lg text-gray-200 mb-6 max-w-xl mx-auto">
                    Upload and manage your PDFs with ease. Use our tools to interact, extract, and transform your documents.
                </p>

                <Link href="https://ai-pdf-maker.vercel.app/dashboard">
                    <button className="bg-primary hover:scale-105 transition-all text-white font-semibold py-3 px-8 rounded-xl shadow-lg">
                        📑 Manage PDFs
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default PdfPage

