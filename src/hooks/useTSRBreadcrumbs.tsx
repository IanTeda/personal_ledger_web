//-- ./src/hooks/useTSRBreadcrumbs.tsx

/**
 * # Use Tanstack Route Breadcrumbs
 *
 * Breadcrumbs can be dynamic set and is discussed in discussion/962. However, I
 * decided to programatically set it in each route loader context for more control
 * over the label
 *
 * #### References
 *
 * - [Router Breadcrumbs (Displayable Routes) #962](https://github.com/TanStack/router/discussions/962)
 * - [kurochenko/tanstack-router-breadcrumbs-example](https://github.com/kurochenko/tanstack-router-breadcrumbs-example)
 * - [Kitchen Sink Breadcrumb Example](https://github.com/TanStack/router/blob/main/examples/react/kitchen-sink-file-based/src/components/Breadcrumbs.tsx)
 * - [Dynamic Breadcrumbs in React with TanStack Router](https://medium.com/@andrejkurocenko/dynamic-breadcrumbs-in-react-with-tanstack-router-d19a9809c831)
 */

import Logger from "@/logger";
import { isMatch, useMatches } from "@tanstack/react-router";

/**
 * ## Logger Instance
 *
 * Create a new logger instance to log messages to the console.
 *
 */
const log = new Logger();

// TODO: Add breadcrumb type
// interface BreadcrumbRoute {
//   path: string;
//   label: string;
// }

export function useTSRBreadcrumbs() {
  log.silly("Use TanStack Route Breadcrumbs");

  // Match current route
  const matches = useMatches();

  // Filter through matches and crab loader bread crumb data
  const matchesWithCrumbs = matches.filter((match) =>
    isMatch(match, "loaderData.crumb")
  );

  // Map link URL and breadcrum label
  return matchesWithCrumbs.map(({ pathname, loaderData }) => {
    return {
      href: pathname,
      label: loaderData?.crumb,
    };
  });
}
