import { createFileRoute } from "@tanstack/react-router";
import { getCount } from "../api/count";

export const Route = createFileRoute("/")({
  component: () => <div>home</div>,
  loader: async () => await getCount(),
});
