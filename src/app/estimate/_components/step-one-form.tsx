"use client";

import { Button } from "@/components/ui/button";
import { FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import type { EstimateFormData } from "@/types/estimate.types";
import { Separator } from "@radix-ui/react-select";

type Props = {
  formData: EstimateFormData;
  setFormData: (data: EstimateFormData) => void;
  next: () => void;
};

export function StepOneForm({ formData, setFormData, next }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    next();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormItem>
        <Label htmlFor="name">Full Name</Label>
        <Input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </FormItem>

      <FormItem>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </FormItem>

      <FormItem>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </FormItem>

      <FormItem>
        <Label htmlFor="address">Address (optional)</Label>
        <Input
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </FormItem>

      <FormItem>
        <Label htmlFor="zip">Zip Code</Label>
        <Input
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          required
        />
      </FormItem>

      <FormItem>
        <Label htmlFor="squareFootage" className="flex justify-between">
          <span>Square Footage</span>
          <span className="text-muted-foreground">
            {formData.squareFootage || "1800"} sq ft
          </span>
        </Label>
        <Slider
          min={300}
          max={10000}
          step={100}
          value={[Number(formData.squareFootage || 1800)]}
          onValueChange={([val]) =>
            setFormData({ ...formData, squareFootage: val.toString() })
          }
        />
      </FormItem>

      <FormItem>
        <Label htmlFor="contactPermission">
          Would you like us to contact you?
        </Label>
        <Switch
          id="contactPermission"
          checked={formData.contactPermission === "yes"}
          onCheckedChange={(checked) =>
            setFormData({
              ...formData,
              contactPermission: checked ? "yes" : "no",
              contactMethod: checked ? formData.contactMethod : "email",
            })
          }
        />
      </FormItem>

      {formData.contactPermission === "yes" && (
        <>
          <Separator />
          <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-x-6">
            <FormItem>
              <Label htmlFor="contactMethod">Preferred contact method</Label>
              <Select
                value={formData.contactMethod || "email"}
                onValueChange={(value) =>
                  setFormData({ ...formData, contactMethod: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="How should we contact you?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Preferred Method</SelectLabel>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="phone">Phone</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormItem>
            <FormItem>
              {formData.contactMethod && formData.contactMethod === "phone" ? (
                <>
                  <Label htmlFor="contactPreferredTime">
                    Preferred contact time
                  </Label>
                  <Select
                    value={formData.contactPreferredTime || ""}
                    onValueChange={(value) =>
                      setFormData({ ...formData, contactMethod: value })
                    }
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue
                        placeholder={`When is the best time to ${
                          formData.contactMethod ?? "call"
                        }?`}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Preferred Method</SelectLabel>
                        <SelectItem value="morning">9am - 12am</SelectItem>
                        <SelectItem value="afternoon">
                          12:30pm - 4:59pm
                        </SelectItem>
                        <SelectItem value="evening">5pm - 11:30am</SelectItem>
                        <SelectItem value="anytime">
                          Any available time
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </>
              ) : (
                <div className="flex items-center py-2 justify-center text-sm bg-sky-50 text-sky-800 rounded-md lg:mt-6">
                  <p>We will send you a welcome email shortly!</p>
                </div>
              )}
            </FormItem>
          </div>
        </>
      )}

      <Button type="submit" className="w-full">
        Get Estimate →
      </Button>
    </form>
  );
}
