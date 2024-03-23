"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { fetchCompanyLogo } from "@/lib/fetchLogo";
export default function transaction({ storeName, date, amount }: any) {
  const [logoUrl, setLogoUrl] = useState("");

  useEffect(() => {
    async function fetchAndSetUrl() {
      const url = await fetchCompanyLogo(
        storeName.replace(/\s+/g, "").toLowerCase()
      );
      setLogoUrl(url);
    }
    fetchAndSetUrl();
  }, [storeName]);

  return (
    <div className="space-y-8">
      {/* This div below is a transaction element */}
      <div className="flex items-center">
        <span className="relative flex shrink-0 overflow-hidden rounded-full">
          {/* Use https://clearbit.com/logo API to generate a logo based on the store name */}
          <Image
            className="aspect-square h-full w-full"
            alt=""
            // src={`https://logo.clearbit.com/${storeName}.ca`} // I would like to remove any spaces from the store name and convert it to lowercase
            src={logoUrl}
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

// "use client";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// export default function Transaction({ storeName, date, amount }: any) {
//   // State to manage the image URL
//   const [logoUrl, setLogoUrl] = useState(
//     `https://logo.clearbit.com/${storeName}.com`
//   );

//   // Effect hook to attempt to load the .com image and handle errors
//   useEffect(() => {
//     const img = new window.Image();
//     img.src = `https://logo.clearbit.com/${storeName}.com`;
//     img.onload = () => setLogoUrl(`https://logo.clearbit.com/${storeName}.com`);
//     img.onerror = () => setLogoUrl(`https://logo.clearbit.com/${storeName}.ca`);
//   }, [storeName]);

//   return (
//     <div className="space-y-8">
//       <div className="flex items-center">
//         <span className="relative flex shrink-0 overflow-hidden rounded-full">
//           <Image
//             className="aspect-square h-full w-full"
//             alt={`${storeName} logo`}
//             src={logoUrl}
//             width={28}
//             height={28}
//             onError={(e) => {
//               // Fallback to .ca if .com fails to load; handled by useEffect
//               e.currentTarget.src = `https://logo.clearbit.com/${storeName}.ca`;
//             }}
//           />
//         </span>
//         <div className="ml-4 space-y-1">
//           <p className="text-sm font-medium leading-none">{storeName}</p>
//           <p className="text-sm text-muted-foreground">{date}</p>
//         </div>
//         <div className="ml-auto font-medium">
//           $
//           {new Intl.NumberFormat("en-US", {
//             style: "decimal",
//             minimumFractionDigits: 2,
//             maximumFractionDigits: 2,
//           }).format(amount)}
//         </div>
//       </div>
//     </div>
//   );
// }
