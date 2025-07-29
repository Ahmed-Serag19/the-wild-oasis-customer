import Spinner from "@/app/_components/Spinner";
const loading = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <Spinner />
      <p className="text-xl text-primary-200">Loading cabin data..</p>
    </div>
  );
};

export default loading;
