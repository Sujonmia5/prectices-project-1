import Container from "@/src/components/ui/container";
import { Button } from "@heroui/button";
import React from "react";
import CardSkeleton from "@/src/components/ui/skeleton/skeleton";

function loading() {
  return (
    <Container>
      <div className="py-5 ">
        <h2 className="text-3xl font-semibold">Recent FoundX Post</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 my-4">
          {Array.from({ length: 8 }).map((item, i) => (
            <div key={i} className="col-span-1">
              <CardSkeleton />
            </div>
          ))}
        </div>
        <div>
          <Button variant="solid" color="primary">
            See All
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default loading;
