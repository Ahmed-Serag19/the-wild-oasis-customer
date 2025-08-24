import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex flex-col lg:flex-row border-primary-800 border">
      <div className="relative h-48 lg:h-auto lg:flex-1">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="object-cover border-b lg:border-b-0 lg:border-r border-primary-800"
        />
      </div>

      <div className="flex-grow">
        <div className="pt-4 pb-3 px-4 lg:pt-5 lg:pb-4 lg:px-7 bg-primary-950">
          <h3 className="text-accent-500 font-semibold text-xl lg:text-2xl mb-2 lg:mb-3">
            Cabin {name}
          </h3>

          <div className="flex gap-2 lg:gap-3 items-center mb-2">
            <UsersIcon className="h-4 w-4 lg:h-5 lg:w-5 text-primary-600" />
            <p className="text-base lg:text-lg text-primary-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-2 lg:gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl lg:text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-600 text-sm lg:text-base">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl lg:text-3xl font-[350]">
                ${regularPrice}
              </span>
            )}
            <span className="text-primary-200 text-sm lg:text-base">
              / night
            </span>
          </p>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 text-center lg:text-right">
          <Link
            href={`/cabins/${id}`}
            className="block lg:inline-block lg:border-l lg:border-primary-800 py-3 lg:py-4 px-4 lg:px-6 hover:bg-accent-600 transition-all hover:text-primary-900 text-sm lg:text-base"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
