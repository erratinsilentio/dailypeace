import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function ImageSection() {
  return (
    <ParallaxProvider>
      <section className="w-full overflow-hidden h-[300px]">
        <Parallax speed={-30}>
          <img src="aya.jpg" className="w-full h-[600px] object-cover" />
        </Parallax>
      </section>
    </ParallaxProvider>
  );
}
