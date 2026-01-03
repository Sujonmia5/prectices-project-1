import { Card as NextUICard } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";
import React from "react";

function CardSkeleton() {
  return (
    <NextUICard
      className="w-full h-[300px] col-span-12 sm:col-span-7 space-y-5 p-4"
      radius="lg"
    >
      <Skeleton className="rounded-lg">
        <div className="h-48  rounded-lg bg-default-300" />
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300" />
        </Skeleton>
      </div>
    </NextUICard>
  );
}

export default CardSkeleton;
