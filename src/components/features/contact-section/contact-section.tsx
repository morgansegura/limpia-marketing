import { cn } from "@/lib/utils";
import "./contact-section.css";
import { Input } from "@/components/ui/input";
import { FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";

type TContactSectionProps = {
  className?: string;
};

export function ContactSection({ className }: TContactSectionProps) {
  return (
    <div className={cn("contact-section", className)}>
      <div className="contact-section-details">
        <div></div>
      </div>
      <div className="contact-section-form">
        <form>
          <FormItem>
            <Label>Your Name</Label>
            <Input name="name" type="text" />
          </FormItem>
          <FormItem>
            <Label>Your Email</Label>
            <Input name="email" type="email" />
          </FormItem>
          <FormItem>
            <Label>Your Phone</Label>
            <Input name="phone" type="tel" />
          </FormItem>
        </form>
      </div>
    </div>
  );
}
