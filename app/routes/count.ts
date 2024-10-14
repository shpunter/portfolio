import { createFileRoute } from '@tanstack/react-router'
import Count from '../ui/page/count/Count';
import { getCount } from '../api/count';

export const Route = createFileRoute("/count")({
  component: Count,
  loader: async () => await getCount(),
});
