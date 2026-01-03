"use client";

import React, { useState, useEffect } from "react";
import { PricingTable, ClerkProvider } from "@clerk/clerk-react";

const BillingPageContent = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Give the component time to initialize
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="font-bold text-3xl text-center mb-4 text-primary">
        Billing & Subscriptions
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        Manage your subscription and payment methods
      </p>
      <div className="mt-6">
        {/* Show a placeholder while loading */}
        {!isLoaded ? (
          <div className="bg-gray-100 p-8 rounded-lg text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4">Loading pricing options...</p>
          </div>
        ) : (
          <PricingTable
            afterPayRedirectUrl="/dashboard"
            successUrl="/dashboard"
            cancelUrl="/dashboard/billing"
          />
        )}
        {/* Fallback content in case PricingTable is empty */}
        <div className="mt-8 text-center">
          <p className="text-lg font-medium">Need more options?</p>
          <p className="text-gray-600 mt-2">
            Contact our sales team for custom plans
          </p>
          <button
            onClick={() => {
              window.location.href =
                "mailto:mishralucky074@gmail.com?subject=Custom%20Plan%20Inquiry&body=Hello,%20I%20would%20like%20to%20inquire%20about%20custom%20pricing%20plans%20for%20your%20service.";
            }}
            className="mt-4 bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

const BillingPage = () => {
  // Use a default value or hardcoded key if environment variable is not available
  const clerkPubKey =
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "your_pk_key_here";

  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <BillingPageContent />
    </ClerkProvider>
  );
};

export default BillingPage;
