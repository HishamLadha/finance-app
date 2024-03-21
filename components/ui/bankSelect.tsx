import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/shared/select";

const bankSelect = () => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a bank" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* Large and Major Banks */}
          <SelectItem value="rbc">Royal Bank of Canada (RBC)</SelectItem>
          <SelectItem value="td">Toronto-Dominion Bank (TD Bank)</SelectItem>
          <SelectItem value="scotiabank">
            Scotiabank (Bank of Nova Scotia)
          </SelectItem>
          <SelectItem value="bmo">Bank of Montreal (BMO)</SelectItem>
          <SelectItem value="cibc">
            Canadian Imperial Bank of Commerce (CIBC)
          </SelectItem>
          <SelectItem value="nbc">National Bank of Canada</SelectItem>
          {/* Online Banks */}
          <SelectItem value="tangerine">Tangerine</SelectItem>
          <SelectItem value="simplii">Simplii Financial</SelectItem>
          <SelectItem value="eqbank">EQ Bank</SelectItem>
          {/* Regional and Other Notable Banks */}
          <SelectItem value="atb">ATB Financial</SelectItem>
          <SelectItem value="desjardins">Desjardins Group</SelectItem>
          <SelectItem value="laurentian">Laurentian Bank of Canada</SelectItem>
          <SelectItem value="hsbc">HSBC Canada</SelectItem>
          <SelectItem value="manulife">Manulife Bank of Canada</SelectItem>
          <SelectItem value="alterna">
            Alterna Savings and Credit Union
          </SelectItem>
          <SelectItem value="motusbank">Motusbank</SelectItem>
          <SelectItem value="wealthone">WealthONE Bank of Canada</SelectItem>
          <SelectItem value="bridgewater">Bridgewater Bank</SelectItem>
          <SelectItem value="homebank">Home Bank</SelectItem>
          <SelectItem value="streetcapital">
            Street Capital Bank of Canada
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default bankSelect;
