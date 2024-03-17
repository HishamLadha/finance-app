import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import { DollarSign } from "lucide-react";

const totalBalance = ({ totalBalance }: any) => {
  return (
    <Card className="shadow">
      <CardHeader className="flex flex-row justify-between pb-2">
        <CardTitle className="text-base font-medium tracking-tight">
          Total Balance
        </CardTitle>
        <DollarSign className="m-0 h-4" />
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <p className="text-2xl font-bold">${totalBalance.toFixed(2)}</p>
        <p className="text-xs text-muted-foreground">+20% from last month</p>
      </CardContent>
    </Card>
  );
};

export default totalBalance;
