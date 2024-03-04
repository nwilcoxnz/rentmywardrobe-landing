import Image from "next/image";
import iPhoneImage from "../app/assets/rmw-iPhone-15.png";
import { Syne } from "next/font/google";

const syne = Syne({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="bg-primary w-full flex items-center justify-center h-[100px]">
        <div
          className={syne.className + " font-semibold text-lg text-secondary "}
        >
          rentmywardrobe
        </div>
      </div>
      <div className="h-[400px] flex items-center justify-center bg-home bg-cover">
        <div className="flex items-center flex-col text-center">
          <h1
            className={
              syne.className + " text-6xl font-semibold text-secondary"
            }
          >
            Reduce, re-use and rent
          </h1>
          <h5 className="mt-4 max-w-[400px] text-lg text-secondary/90">
            Rent from local owners or lease your clothes and make them work for
            you
          </h5>
        </div>
      </div>
      <div className="w-full flex items-center md:items-start md:justify-center flex-col md:flex-row">
        <Image
          src={iPhoneImage}
          alt="Rent my wardrobe website on iphone"
          height={500}
          className="hidden md:block"
        />
        <Image
          src={iPhoneImage}
          alt="Rent my wardrobe website on iphone"
          height={300}
          className="block md:hidden"
        />
        <div className="md:mt-24 max-w-[300px]">
          <div
            className={
              syne.className +
              " text-3xl font-semibold text-secondary mt-6 md:mt-0"
            }
          >
            Lease your clothes and give them a new life
          </div>
          <div className="mt-4">
            Earn some spare cash by making your clothes work for you.
          </div>
        </div>
      </div>
      <div className="bg-secondary w-full h-[300px] flex items-center justify-center mt-24">
        <div
          className={
            syne.className + " text-primary uppercase font-semibold text-3xl"
          }
        >
          Coming soon
        </div>
      </div>
    </main>
  );
}
