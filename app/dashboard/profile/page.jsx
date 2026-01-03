"use client"

import { UserProfile } from '@clerk/nextjs';

export default function UserProfilePage() {
    return (
        <div className="max-w-5xl mx-auto p-8">
            <h1 className="text-4xl font-bold mb-2 text-center">YOUR <span className='text-primary'>PROFILE</span></h1>
            <UserProfile routing="hash" />
        </div>
    );
}