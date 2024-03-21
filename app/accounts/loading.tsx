import { Skeleton } from "@/components/ui/shared/skeleton";

export default function Loading() {
  return (
    <div>
      <div className="m-6 ml-12 h-screen">
        <div className="flex flex-row items-center justify-between">
          <h1 className="mb-6 text-3xl font-bold tracking-tight">
            Your Accounts
          </h1>
        </div>

        <div
          className={`grid grid-cols-2
            } gap-6 pt-28`}
        >
          <div className="col-span-1 space-y-5">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
          <div className="col-span-1 space-y-5">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
