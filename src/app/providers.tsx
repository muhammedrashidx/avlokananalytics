"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { RequestPilotDialogProvider } from "@/components/RequestPilotDialog";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <RequestPilotDialogProvider>
          <Toaster />
          <SonnerToaster />
          {children}
        </RequestPilotDialogProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

