"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  calculateBasePrice,
  calculateLinearSizeCharge,
  estimateHybridPrice,
} from "@/lib/pricing/pricing-formulas";
import { getTurnPrice } from "@/lib/pricing/pricing-full";
import {
  sqftTiers,
  initialBaseCharges,
  chargeBySize,
} from "@/lib/pricing/pricing-data";
import { FormItem } from "@/components/ui/form";
import { Separator } from "@radix-ui/react-select";

export default function QuoteEstimatorPage() {
  const [sqft, setSqft] = useState(2200);
  const [homeType, setHomeType] = useState<"house" | "apartment">("house");
  const [frequency, setFrequency] = useState<
    "weekly" | "biweekly" | "monthly" | "once"
  >("weekly");
  const [laborHours, setLaborHours] = useState(1);
  const [laborMinutes, setLaborMinutes] = useState(0);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [discountType, setDiscountType] = useState<"flat" | "percent">("flat");
  const [discountValue, setDiscountValue] = useState(0);
  const [realtor, setRealtor] = useState(true);
  const [useImproved, setUseImproved] = useState(false);

  const getIndex = () => {
    for (let i = 0; i < sqftTiers.length; i++) {
      if (sqft <= sqftTiers[i]) return i;
    }
    return sqftTiers.length - 1;
  };

  const base = useImproved
    ? calculateBasePrice(sqft)
    : (initialBaseCharges[getIndex()] ?? 0);
  const size = useImproved
    ? calculateLinearSizeCharge(sqft)
    : (chargeBySize[getIndex()] ?? 0);
  const houseSurcharge = homeType === "house" ? 28.21 : 0;
  const frequencyDiscountMap: Record<string, number> = {
    weekly: -35,
    biweekly: -15,
    monthly: -5,
    once: 0,
  };
  const frequencyDiscount = frequencyDiscountMap[frequency] ?? 0;
  const turn1 = getTurnPrice(sqft);

  const subtotal = base + size + houseSurcharge + frequencyDiscount + turn1;
  const discount =
    discountType === "percent"
      ? (subtotal * discountValue) / 100
      : discountValue;
  const finalPrice = Math.max(0, subtotal - discount);

  const totalLaborHours = laborHours + laborMinutes / 60;
  const suppliesCost = +(finalPrice * 0.04).toFixed(2);
  const transportationCost = +(finalPrice * 0.06).toFixed(2);
  const contractorCost = +(totalLaborHours * hourlyRate).toFixed(2);
  const realtorCommission = realtor ? +(finalPrice * 0.05).toFixed(2) : 0;
  const projectedCOGS =
    contractorCost + suppliesCost + transportationCost + realtorCommission;

  const grossProfit = finalPrice - projectedCOGS;
  const grossProfitPercent =
    finalPrice > 0 ? (grossProfit / finalPrice) * 100 : 0;
  const improvedBase = calculateBasePrice(sqft);
  const improvedSize = calculateLinearSizeCharge(sqft);
  const improvedPrice = estimateHybridPrice(sqft);

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Limpia Sales Quote Estimator</h1>

      <div className="flex items-center gap-4">
        <Label>Use Improved Model?</Label>
        <Switch checked={useImproved} onCheckedChange={setUseImproved} />
      </div>

      <Card>
        <CardContent className="space-y-4">
          <Label className="py-2">
            <strong>Labor Metrics</strong>
          </Label>

          <div className="grid grid-cols-3 gap-4 pb-6 border-b">
            <FormItem>
              <Label>SqFt</Label>
              <Input
                type="number"
                value={sqft}
                onChange={(e) => setSqft(Number(e.target.value))}
              />
            </FormItem>
            <FormItem>
              <Label>Home Type</Label>
              <Select
                value={homeType}
                onValueChange={(v) => setHomeType(v as any)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="house">House (+$28)</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
            <FormItem>
              <Label>Frequency</Label>
              <Select
                value={frequency}
                onValueChange={(v) => setFrequency(v as any)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="once">Once</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="biweekly">Bi-Weekly</SelectItem>
                  <SelectItem value="weekly">Weekly (-$35)</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          </div>

          <Label className="py-2">
            <strong>Labor Metrics</strong>
          </Label>

          <div className="flex  gap-4 pb-6 border-b">
            <FormItem>
              <Label>Hourly Rate</Label>
              <Input
                type="number"
                disabled
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
              />
            </FormItem>
            <FormItem>
              <Label>Hours</Label>
              <Input
                min="1"
                max="16"
                type="number"
                value={laborHours}
                onChange={(e) => setLaborHours(Number(e.target.value))}
              />
            </FormItem>
            <FormItem>
              <Label>Minutes</Label>
              <Input
                min="0"
                max="59"
                type="number"
                value={laborMinutes}
                onChange={(e) => setLaborMinutes(Number(e.target.value))}
              />
            </FormItem>
          </div>

          <Label className="py-2">
            <strong>Applied Discounts</strong>
          </Label>

          <div className="flex gap-8 pb-6">
            <FormItem>
              <Label>Discount Type</Label>
              <Select
                value={discountType}
                onValueChange={(v) => setDiscountType(v as any)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flat">Flat ($)</SelectItem>
                  <SelectItem value="percent">Percent (%)</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>

            <FormItem>
              <Label>Discount Value</Label>
              <Input
                type="number"
                value={discountValue}
                onChange={(e) => setDiscountValue(Number(e.target.value))}
              />
            </FormItem>

            <FormItem className="flex items-center gap-2 mt-6">
              <Label>Realtor?</Label>
              <Switch checked={realtor} onCheckedChange={setRealtor} />
            </FormItem>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quote Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <strong>Base:</strong> ${base.toFixed(2)}
          </div>
          <div>
            <strong>Size Charge:</strong> ${size.toFixed(2)}
          </div>
          <div>
            <strong>House Surcharge:</strong> ${houseSurcharge.toFixed(2)}
          </div>
          <div>
            <strong>Frequency Discount:</strong> ${frequencyDiscount.toFixed(2)}
          </div>
          <div>
            <strong>Turn 1 Charge:</strong> ${turn1.toFixed(2)}
          </div>
          <div>
            <strong>Subtotal:</strong> ${subtotal.toFixed(2)}
          </div>
          <div>
            <strong>Discount:</strong> -${discount.toFixed(2)}
          </div>
          <div className="text-black font-medium">
            <strong>Final Price:</strong> ${finalPrice.toFixed(2)}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Gross Profit</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <strong>Labor Cost:</strong> ${contractorCost.toFixed(2)}
          </div>
          <div>
            <strong>Supplies Cost (4%):</strong> ${suppliesCost.toFixed(2)}
          </div>
          <div>
            <strong>Transport Cost (6%):</strong> $
            {transportationCost.toFixed(2)}
          </div>
          <div>
            <strong>Realtor Commission (5%):</strong> $
            {realtorCommission.toFixed(2)}
          </div>
          <div>
            <strong>Projected COGS:</strong> ${projectedCOGS.toFixed(2)}
          </div>
          <div className="text-black font-medium">
            <strong>Gross Profit:</strong> ${grossProfit.toFixed(2)}
          </div>
          <div>
            <strong>Gross Profit %:</strong> {grossProfitPercent.toFixed(2)}%
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Improved Model Estimate</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
          <div>
            <strong>Improved Base:</strong> ${improvedBase.toFixed(2)}
          </div>
          <div>
            <strong>Improved Size Charge:</strong> ${improvedSize.toFixed(2)}
          </div>
          <div className="col-span-2 text-black font-medium">
            <strong>Improved Total:</strong> ${improvedPrice.toFixed(2)}
          </div>
          <p className="col-span-2 text-xs italic mt-2">
            Calculated using: base = 75 + (sqft - 500) × 0.03, size = (sqft -
            500) × 0.075
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
