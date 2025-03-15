//-- ./src/routes/index.tsx

/**
 * # Index Route
 *
 * The index.tsx file is the entry point for the "/" route. This file is responsible
 * for rendering the "/" route component and any child components.
 */

import { usePingQuery } from '@/queries/ping'
import { createFileRoute } from '@tanstack/react-router'
import Logger from '@/logger'

/**
 * ## Logger Instance
 *
 * Create a new logger instance to log messages to the console.
 *
 */
const log = new Logger()

// Create a new route object
export const Route = createFileRoute("/_protected/")({
  component: RouteComponent,
  // loader: () => ({
  //   crumb: "Dashboard",
  // }),
});

function RouteComponent() {
  log.debug('Hello /!')

  // Used for testing the logger to ensure it is working correctly
  // log.silly("silly logger index.tsx");
  // log.trace("trace logger index.tsx");
  // log.debug("debug logger index.tsx");
  // log.info("info logger index.tsx");
  // log.warn("warn logger index.tsx");
  // log.error("error logger index.tsx");
  // log.fatal("fatal logger index.tsx");

  const { data } = usePingQuery()

  return (
    <>
      <div>Hello "/"!</div>
      <pre>{data?.message}</pre>
    </>
  )
}
