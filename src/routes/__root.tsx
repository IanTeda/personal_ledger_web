//-- ./src/routes/__root.tsx

/**
 * # Tanstack Router root route
 * 
 * The root route is the top-most route in the entire tree and encapsulates all 
 * other routes as children.
 * 
 * - It has no path
 * - It is always matched
 * - Its component is always rendered
 * 
 * Even though it doesn't have a path, the root route has access to all of the 
 * same functionality as other routes including:
 * - components
 * - loaders
 * - search param validation
 * - etc.
 * 
 * #### References:
 * 
 * - [Tanstack Router Root Route](https://tanstack.com/router/latest/docs/framework/react/routing/routing-concepts#the-root-route)
 * - [Tanstack Router Context](https://tanstack.com/router/latest/docs/framework/react/guide/router-context)
 */

import * as React from 'react'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import TanStackDevTools from '../components/TanStackDevTools';
import { AuthenticationContext } from '@/contexts/AuthenticationProvider';

// Router context, make authentication component and state available globally
interface MyRouterContext {
  authentication: AuthenticationContext;
}

// Create a route with context
export const Route =
  createRootRouteWithContext <MyRouterContext>()({
    component: RootComponent,
  });

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
      <TanStackDevTools />
    </React.Fragment>
  );
}
