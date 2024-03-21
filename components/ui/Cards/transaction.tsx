import Image from "next/image";
export default function transaction({ storeName, date, amount }: any) {
  return (
    <div className="space-y-8">
      {/* This div below is a transaction element */}
      <div className="flex items-center">
        <span className="relative flex shrink-0 overflow-hidden rounded-full">
          {/* Use https://clearbit.com/logo API to generate a logo based on the store name */}
          <Image
            className="aspect-square h-full w-full"
            alt="Avatar"
            src={`https://logo.clearbit.com/${storeName}.com`}
            width={28}
            height={28}
          />
        </span>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">{storeName}</p>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
        <div className="ml-auto font-medium">
          $
          {new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(amount)}
        </div>
      </div>
    </div>
  );
}
