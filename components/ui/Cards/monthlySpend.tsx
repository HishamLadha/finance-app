import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../shared/card";
import { DollarSign } from "lucide-react";

const MonthlySpend = ({ monthlySpending }: any) => {
  return (
    <Card className="shadow">
      <CardHeader className="flex flex-row justify-between pb-2">
        <CardTitle className="text-base font-medium tracking-tight">
          Monthly Spending
        </CardTitle>
        <DollarSign className="m-0 h-4" />
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <p className="text-2xl font-bold">
          $
          {new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(monthlySpending)}
        </p>
        <p className="text-xs text-muted-foreground">$1500 total</p>
      </CardContent>
    </Card>
  );
};

export default MonthlySpend;
