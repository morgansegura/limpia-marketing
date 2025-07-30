"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { sqftTiers } from "@/lib/pricing/pricing-data";
import {
  calculateBasePrice,
  calculateLinearSizeCharge,
} from "@/lib/pricing/pricing-formulas";

import {
  getTurnPrice,
  getOneTimeCleaning,
  getMoveInOutCleaning,
  getDeepClean,
} from "@/lib/pricing/pricing-full";

export default function FullPricingTablePage() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">🧾 Limpia Full Pricing Model</h1>

      <Card>
        <CardHeader>
          <CardTitle>Your Original Pricing Model</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>
            <strong>Base Price:</strong> <code>$75.68 + $1 per 250 sqft</code>
          </p>
          <p>
            <strong>Size Charge:</strong> manually defined per sqft tier (e.g., $15 @ 750, $35 @ 1000)
          </p>
          <p>
            <strong>Deep Clean A/B:</strong> <code>$83</code> flat per job
          </p>
          <p>
            <strong>Turn 1–4:</strong> tiered pricing based on sqft: 
            <br />
            <code>
              $40 → ≤1500,&nbsp;&nbsp;$45 → ≤2250,&nbsp;&nbsp;$50 → ≤2750,&nbsp;&nbsp;$60 → ≤3250,
              <br />
              $65 → ≤3500,&nbsp;&nbsp;$70 → >3500
            </code>
          </p>
          <p>
            <strong>One-Time Cleaning:</strong> <code>$332</code> flat
          </p>
          <p>
            <strong>Move-in/Out Cleaning:</strong> <code>$232</code> flat
          </p>
        </CardContent>
      </Card>      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            Estimate Table: Recurring vs One-Time
          </CardTitle>
        </CardHeader>
        <CardContent className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead rowSpan={2}>SqFt</TableHead>
                <TableHead rowSpan={2}>Base</TableHead>
                <TableHead rowSpan={2}>Size Charge</TableHead>
                <TableHead colSpan={6} className="text-center">
                  Recurring Plans
                </TableHead>
                <TableHead colSpan={2} className="text-center">
                  One-Time & Move-In/Out
                </TableHead>
              </TableRow>
              <TableRow>
                <TableHead>Deep Clean A</TableHead>
                <TableHead>Deep Clean B</TableHead>
                <TableHead>Turn 1</TableHead>
                <TableHead>Turn 2</TableHead>
                <TableHead>Turn 3</TableHead>
                <TableHead>Turn 4</TableHead>
                <TableHead>One-Time</TableHead>
                <TableHead>Move-in/Out</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sqftTiers.map((sqft) => {
                const base = calculateBasePrice(sqft);
                const size = calculateLinearSizeCharge(sqft);
                const deepA = getDeepClean();
                const deepB = getDeepClean();
                const turn = getTurnPrice(sqft);
                const oneTime = getOneTimeCleaning();
                const moveInOut = getMoveInOutCleaning();

                return (
                  <TableRow key={sqft}>
                    <TableCell>{sqft}</TableCell>
                    <TableCell>${base.toFixed(2)}</TableCell>
                    <TableCell>${size.toFixed(2)}</TableCell>

                    {/* Recurring */}
                    <TableCell>${deepA}</TableCell>
                    <TableCell>${deepB}</TableCell>
                    <TableCell>${turn}</TableCell>
                    <TableCell>${turn}</TableCell>
                    <TableCell>${turn}</TableCell>
                    <TableCell>${turn}</TableCell>

                    {/* One-Time / Move-In/Out */}
                    <TableCell>${oneTime}</TableCell>
                    <TableCell>${moveInOut}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Improved Pricing Formula (Hybrid)</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-2">
          <p>
            <strong>Base Price:</strong> <code>75 + (sqft - 500) × 0.03</code>
          </p>
          <p>
            <strong>Size Charge:</strong> <code>(sqft - 500) × 0.075</code>
          </p>
          <p>
            <strong>Deep Clean A/B:</strong> still <code>$83</code> (flat for
            now)
          </p>
          <p>
            <strong>Turn 1–4:</strong> still tiered, but can be made formulaic
            later
          </p>
          <p>
            <strong>One-Time Cleaning:</strong> <code>$332</code>
          </p>
          <p>
            <strong>Move-in/Out:</strong> <code>$232</code>
          </p>
          <p className="text-xs text-muted-foreground italic">
            This model is scalable and predictable. You can later base prices on
            min wage or labor time.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            Improved Formula-Based Estimate Table
          </CardTitle>
        </CardHeader>
        <CardContent className="overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead rowSpan={2}>SqFt</TableHead>
                <TableHead rowSpan={2}>Base (Formula)</TableHead>
                <TableHead rowSpan={2}>Size Charge (Formula)</TableHead>
                <TableHead colSpan={6} className="text-center">
                  Recurring Plans
                </TableHead>
                <TableHead colSpan={2} className="text-center">
                  One-Time & Move-In/Out
                </TableHead>
              </TableRow>
              <TableRow>
                <TableHead>Deep Clean A</TableHead>
                <TableHead>Deep Clean B</TableHead>
                <TableHead>Turn 1</TableHead>
                <TableHead>Turn 2</TableHead>
                <TableHead>Turn 3</TableHead>
                <TableHead>Turn 4</TableHead>
                <TableHead>One-Time</TableHead>
                <TableHead>Move-in/Out</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sqftTiers.map((sqft) => {
                const base = 75 + (sqft - 500) * 0.03;
                const size = Math.max(0, (sqft - 500) * 0.075);
                const deep = getDeepClean(); // still static
                const turn = getTurnPrice(sqft); // still tiered
                const oneTime = getOneTimeCleaning();
                const moveInOut = getMoveInOutCleaning();

                return (
                  <TableRow key={sqft}>
                    <TableCell>{sqft}</TableCell>
                    <TableCell>${base.toFixed(2)}</TableCell>
                    <TableCell>${size.toFixed(2)}</TableCell>
                    <TableCell>${deep}</TableCell>
                    <TableCell>${deep}</TableCell>
                    <TableCell>${turn}</TableCell>
                    <TableCell>${turn}</TableCell>
                    <TableCell>${turn}</TableCell>
                    <TableCell>${turn}</TableCell>
                    <TableCell>${oneTime}</TableCell>
                    <TableCell>${moveInOut}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
