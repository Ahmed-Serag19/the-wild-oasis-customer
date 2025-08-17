import Image from "next/image";
import Link from "next/link";
import bg from "../public/bg.png";

const Page = () => {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        className="object-cover"
        fill
        alt="Mountains and forests with two cabins"
        placeholder="blur"
        quality={80}
      />

      <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black/30 flex-col z-10 text-center ">
        <h1 className="text-8xl text-primary-100  mb-10 tracking-tight font-normal">
          Welcome to nature.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
};

export default Page;
