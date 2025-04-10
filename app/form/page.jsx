'use client';

import MultiStepForm from '@/components/MultiStepForm';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react';

const PageForm = () => {
    // Initialize the QueryClient on the client side
    const [queryClient] = useState(() => new QueryClient());

    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <MultiStepForm />
            </QueryClientProvider>
        </div>
    );
};

export default PageForm;