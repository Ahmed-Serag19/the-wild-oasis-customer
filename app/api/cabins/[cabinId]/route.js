import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export const GET = async (req, { params }) => {
  const { cabinId } = params;

  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ cabin, bookedDates }, { status: 200 });
  } catch (error) {
    console.error("Error fetching cabin:", error);
    return Response.json({ error: "Cabin not found" }, { status: 404 });
  }
  return Response.json({ test: "test" });
};
