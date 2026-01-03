import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/src/config/site";
import { title, subtitle } from "@/src/components/primitives";
import { GithubIcon } from "@/src/components/icons";
import Container from "@/src/components/ui/container";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 bg-amber-400/10 h-[80vh]">
      <Container>
        <div className="w-full h-full flex flex-col  mx-auto text-center">
          <div className="w-10/12  mx-auto">
            <h1 className="text-6xl font-semibold uppercase">
              We are founded your items you can see our website
            </h1>
            <p className="text-2xl my-5 text-gray-400 leading-5">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore,
              a tempora quo molestiae aut cupiditate quidem alias rerum aliquid
              odit doloribus! Facere voluptatem cumque nesciunt sequi autem
              reprehenderit amet totam?
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
