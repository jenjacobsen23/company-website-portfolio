'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function PortfolioDisclaimer() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md bg-white border border-blue-600 rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="font-bold text-blue-600">Portfolio Example Website</h3>
          <p className="text-sm mt-1">
            This is a fictional business website created for demonstration purposes only. All
            services, testimonials, and contact information are examples and not associated with a
            real company.
          </p>
          <p className="text-xs mt-2 text-muted-foreground">
            Created as a portfolio piece to showcase web development skills.
          </p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 -mt-1 -mr-1"
          onClick={() => setIsOpen(false)}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </div>
    </div>
  );
}
