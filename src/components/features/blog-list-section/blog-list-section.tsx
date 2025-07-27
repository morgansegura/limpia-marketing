
  import { cn } from "@/lib/utils"

  import "./blog-list-section.css";

  type TBlogListSectionProps = {
    className?: string 
  }

  export function BlogListSection({ className }: TBlogListSectionProps) {
    return (
      <div className={cn("blog-list-section", className)}>
        {/* TODO: Implement blog-list-section */}
      </div>
    );
  }
