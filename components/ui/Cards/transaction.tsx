export default function transaction({ storeName, date, amount }: any) {
  return (
    <div className="space-y-8">
      {/* This div below is a transaction element */}
      <div className="flex items-center">
        <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
          {/* Use https://clearbit.com/logo API to generate a logo based on the store name */}
          <img
            className="aspect-square h-full w-full"
            alt="Avatar"
            src="https://shopsquareone.com/wp-content/uploads/2023/06/CAN-PRIMARY-TM.png"
          />
        </span>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">{storeName}</p>
          <p className="text-sm text-muted-foreground">{date}</p>
        </div>
        <div className="ml-auto font-medium">${amount}</div>
      </div>
    </div>
  );
}
