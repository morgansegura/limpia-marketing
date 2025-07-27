
  import { cn } from "@/lib/utils"

  import "./testimonials-section.css";

  type TTestimonialsSectionProps = {
    className?: string 
  }

  export function TestimonialsSection({ className }: TTestimonialsSectionProps) {
    return (
      <div className={cn("testimonials-section", className)}>
        {/* TODO: Implement testimonials-section */}
      </div>
    );
  }
