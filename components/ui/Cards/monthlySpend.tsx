import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import { DollarSign } from "lucide-react";

const MonthlySpend = () => {
  return (
    <Card className="shadow">
      <CardHeader className="flex flex-row justify-between pb-2">
        <CardTitle className="text-base font-medium tracking-tight">
          Monthly Spending
        </CardTitle>
        <DollarSign className="m-0 h-4" />
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <p className="text-2xl font-bold">$123.00</p>
        <p className="text-xs text-muted-foreground">$1500 total</p>
      </CardContent>
    </Card>
  );
};

export default MonthlySpend;
