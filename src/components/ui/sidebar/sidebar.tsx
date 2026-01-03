import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import React from "react";

function Sidebar() {
  return (
    <div className="flex flex-col gap-2">
      <div className="shadow-xl rounded-md h-[430px] bg-gray-50/10">
        <Image
          radius="none"
          alt="HeroUI Fruit Image with Zoom"
          src="https://heroui.com/images/fruit-1.jpeg"
          width={350}
          isLoading={false}
          height={380}
        />
        <div className="px-2">
          <h2 className="text-2xl font-bold my-2">Md Sujon Mia</h2>
        </div>
      </div>
      <div className="shadow-xl rounded-md flex flex-col space-y-1 bg-gray-50/10 py-4 ">
        <Link
          className="hover:bg-amber-50  hover:text-black text-foreground transition-all duration-300 rounded-lg px-2 py-1 "
          color="foreground"
          href="/profile/create-post"
        >
          Create Post
        </Link>
        <Link
          className="hover:bg-amber-50  hover:text-black text-foreground transition-all duration-300 rounded-lg px-2 py-1 "
          color="foreground"
          href="/profile/post"
        >
          Post
        </Link>
        <Link
          className="hover:bg-amber-50  hover:text-black text-foreground transition-all duration-300 rounded-lg px-2 py-1 "
          color="foreground"
          href="/profile/setting"
        >
          Setting
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
