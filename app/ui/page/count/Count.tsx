import { useRouter } from "@tanstack/react-router";
import { updateCount } from "../../../api/count";
import { Route } from "../../../routes/count";

const Count = () => {
  const router = useRouter();
  const state = Route.useLoaderData();

  return (
    <button
      type="button"
      onClick={() => {
        updateCount(1).then(() => {
          router.invalidate();
        });
      }}
    >
      Add 1 to {state}?
    </button>
  );
};

export default Count;
