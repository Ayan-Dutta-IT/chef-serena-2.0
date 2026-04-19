import Image from "next/image";
import BackgroundGradientAnimationDemo from "@/components/background-gradient-animation-demo";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div>
    <Navbar />
    <BackgroundGradientAnimationDemo >
    </BackgroundGradientAnimationDemo>
    </div>
  );
}
