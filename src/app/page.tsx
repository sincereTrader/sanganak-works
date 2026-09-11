import { HomeHero } from "@/components/home-hero";
import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <HomeHero />
      </main>
    </>
  );
}
