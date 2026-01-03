import ItemCard from "@/src/components/components/card/itemCard";
import Container from "@/src/components/ui/container";
import { RecentServices } from "@/src/services/postServices/recentServices";
import { Button } from "@heroui/button";
import React from "react";

export default async function page() {
  const data = await RecentServices();
  console.log(data);
  return (
    <Container>
      <div className="py-5 ">
        <h2 className="text-3xl font-semibold">Recent FoundX Post</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 my-4">
          {data?.data &&
            data?.data.map((item, i) => (
              <div key={i} className="col-span-1">
                <ItemCard />
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
