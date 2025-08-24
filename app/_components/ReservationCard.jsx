import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="flex flex-col lg:flex-row border border-primary-800">
      <div className="relative h-48 lg:h-32 lg:aspect-square">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          className="object-cover border-b lg:border-b-0 lg:border-r border-primary-800"
          fill
        />
      </div>

      <div className="flex-grow px-4 lg:px-6 py-3 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg lg:text-xl font-semibold">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="bg-yellow-800 text-yellow-200 h-6 lg:h-7 px-2 lg:px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              past
            </span>
          ) : (
            <span className="bg-green-800 text-green-200 h-6 lg:h-7 px-2 lg:px-3 uppercase text-xs font-bold flex items-center rounded-sm">
              upcoming
            </span>
          )}
        </div>

        <p className="text-sm lg:text-lg text-primary-300 mb-3 lg:mb-0">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex flex-col lg:flex-row lg:gap-5 mt-auto lg:items-baseline space-y-1 lg:space-y-0">
          <div className="flex items-center gap-2 lg:gap-5">
            <p className="text-lg lg:text-xl font-semibold text-accent-400">
              ${totalPrice}
            </p>
            <p className="text-primary-300 hidden lg:block">&bull;</p>
            <p className="text-base lg:text-lg text-primary-300">
              {numGuests} guest{numGuests > 1 && "s"}
            </p>
          </div>
          <p className="text-xs lg:text-sm text-primary-400 lg:ml-auto">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      <div className="flex lg:flex-col border-t lg:border-t-0 lg:border-l border-primary-800 lg:w-[100px]">
        {isPast(new Date(startDate)) ? null : (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-r lg:border-r-0 lg:border-b border-primary-800 flex-1 lg:flex-grow px-3 py-2 lg:py-0 hover:bg-accent-600 transition-colors hover:text-primary-900"
            >
              <PencilSquareIcon className="h-4 w-4 lg:h-5 lg:w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteReservation bookingId={id} onDelete={onDelete} />
          </>
        )}
      </div>
    </div>
  );
}

export default ReservationCard;
