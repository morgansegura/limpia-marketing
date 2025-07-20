// components/features/estimate/estimate-modal.tsx
"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { EstimateFormWrapper } from "@/app/estimate/_components/estimate-form-wrapper";

export function EstimateModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogHeader>
        <DialogTitle></DialogTitle>
      </DialogHeader>
      <DialogTrigger asChild>
        <Button variant="default">Get Your Estimate</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] p-12 overflow-y-auto">
        <EstimateFormWrapper />
      </DialogContent>
    </Dialog>
  );
}
