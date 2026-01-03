"use server";
import envConfig from "@/src/config";
import { ItemType } from "@/src/types/item";
import { delay } from "@/src/utils/delay";

interface recentItem {
  success: boolean;
  messsage: string;
  data: ItemType[];
}
export const RecentServices = async (): Promise<recentItem> => {
  const res = await fetch(
    `${envConfig.fetchUrl}/items?sortBy=-createdAt&limit=9`
  );
  await delay(5000);
  return res.json();
};
