//-- ./src/routes/_authentication/routes.tsx

/**
 * ### Authentication Layout
 *
 * Pathless layout route used to wrap any routes within `./src/routes/_authentication`
 * `<Outlet /> will render the any children in the folder
 *
 * #### References
 *
 * - [Tanstack - Routeing Concepts #Layout Routes](https://tanstack.com/router/latest/docs/framework/react/routing/routing-concepts#layout-routes)
 */

import Logger from '@/logger'
import { createFileRoute, Outlet } from '@tanstack/react-router'

/**
 * ## Logger Instance
 *
 * Create a new logger instance to log messages to the console.
 *
 */
const log: Logger = new Logger()

export const Route = createFileRoute('/_unprotected')({
  component: _UnprotectedLayoutComponent,
})

function _UnprotectedLayoutComponent() {
  log.silly('Unprotected layout')

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <Outlet />
    </div>
  )
}
