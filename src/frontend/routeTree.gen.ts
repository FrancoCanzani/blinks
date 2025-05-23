/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DashboardRouteImport } from './routes/dashboard/route'
import { Route as IndexImport } from './routes/index'
import { Route as AuthLoginImport } from './routes/auth/login'
import { Route as DashboardWorkspacesIndexImport } from './routes/dashboard/workspaces/index'
import { Route as DashboardWorkspacesNewIndexImport } from './routes/dashboard/workspaces/new/index'
import { Route as DashboardWorkspacesWorkspaceIdIndexImport } from './routes/dashboard/workspaces/$workspaceId/index'
import { Route as DashboardWorkspaceNameMonitorsIndexImport } from './routes/dashboard/$workspaceName/monitors/index'
import { Route as DashboardWorkspaceNameLogsIndexImport } from './routes/dashboard/$workspaceName/logs/index'
import { Route as DashboardWorkspaceNameMonitorsNewIndexImport } from './routes/dashboard/$workspaceName/monitors/new/index'
import { Route as DashboardWorkspaceNameMonitorsIdIndexImport } from './routes/dashboard/$workspaceName/monitors/$id/index'
import { Route as DashboardWorkspaceNameMonitorsIdEditIndexImport } from './routes/dashboard/$workspaceName/monitors/$id/edit/index'

// Create/Update Routes

const DashboardRouteRoute = DashboardRouteImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthLoginRoute = AuthLoginImport.update({
  id: '/auth/login',
  path: '/auth/login',
  getParentRoute: () => rootRoute,
} as any)

const DashboardWorkspacesIndexRoute = DashboardWorkspacesIndexImport.update({
  id: '/workspaces/',
  path: '/workspaces/',
  getParentRoute: () => DashboardRouteRoute,
} as any)

const DashboardWorkspacesNewIndexRoute =
  DashboardWorkspacesNewIndexImport.update({
    id: '/workspaces/new/',
    path: '/workspaces/new/',
    getParentRoute: () => DashboardRouteRoute,
  } as any)

const DashboardWorkspacesWorkspaceIdIndexRoute =
  DashboardWorkspacesWorkspaceIdIndexImport.update({
    id: '/workspaces/$workspaceId/',
    path: '/workspaces/$workspaceId/',
    getParentRoute: () => DashboardRouteRoute,
  } as any)

const DashboardWorkspaceNameMonitorsIndexRoute =
  DashboardWorkspaceNameMonitorsIndexImport.update({
    id: '/$workspaceName/monitors/',
    path: '/$workspaceName/monitors/',
    getParentRoute: () => DashboardRouteRoute,
  } as any)

const DashboardWorkspaceNameLogsIndexRoute =
  DashboardWorkspaceNameLogsIndexImport.update({
    id: '/$workspaceName/logs/',
    path: '/$workspaceName/logs/',
    getParentRoute: () => DashboardRouteRoute,
  } as any)

const DashboardWorkspaceNameMonitorsNewIndexRoute =
  DashboardWorkspaceNameMonitorsNewIndexImport.update({
    id: '/$workspaceName/monitors/new/',
    path: '/$workspaceName/monitors/new/',
    getParentRoute: () => DashboardRouteRoute,
  } as any)

const DashboardWorkspaceNameMonitorsIdIndexRoute =
  DashboardWorkspaceNameMonitorsIdIndexImport.update({
    id: '/$workspaceName/monitors/$id/',
    path: '/$workspaceName/monitors/$id/',
    getParentRoute: () => DashboardRouteRoute,
  } as any)

const DashboardWorkspaceNameMonitorsIdEditIndexRoute =
  DashboardWorkspaceNameMonitorsIdEditIndexImport.update({
    id: '/$workspaceName/monitors/$id/edit/',
    path: '/$workspaceName/monitors/$id/edit/',
    getParentRoute: () => DashboardRouteRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardRouteImport
      parentRoute: typeof rootRoute
    }
    '/auth/login': {
      id: '/auth/login'
      path: '/auth/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/workspaces/': {
      id: '/dashboard/workspaces/'
      path: '/workspaces'
      fullPath: '/dashboard/workspaces'
      preLoaderRoute: typeof DashboardWorkspacesIndexImport
      parentRoute: typeof DashboardRouteImport
    }
    '/dashboard/$workspaceName/logs/': {
      id: '/dashboard/$workspaceName/logs/'
      path: '/$workspaceName/logs'
      fullPath: '/dashboard/$workspaceName/logs'
      preLoaderRoute: typeof DashboardWorkspaceNameLogsIndexImport
      parentRoute: typeof DashboardRouteImport
    }
    '/dashboard/$workspaceName/monitors/': {
      id: '/dashboard/$workspaceName/monitors/'
      path: '/$workspaceName/monitors'
      fullPath: '/dashboard/$workspaceName/monitors'
      preLoaderRoute: typeof DashboardWorkspaceNameMonitorsIndexImport
      parentRoute: typeof DashboardRouteImport
    }
    '/dashboard/workspaces/$workspaceId/': {
      id: '/dashboard/workspaces/$workspaceId/'
      path: '/workspaces/$workspaceId'
      fullPath: '/dashboard/workspaces/$workspaceId'
      preLoaderRoute: typeof DashboardWorkspacesWorkspaceIdIndexImport
      parentRoute: typeof DashboardRouteImport
    }
    '/dashboard/workspaces/new/': {
      id: '/dashboard/workspaces/new/'
      path: '/workspaces/new'
      fullPath: '/dashboard/workspaces/new'
      preLoaderRoute: typeof DashboardWorkspacesNewIndexImport
      parentRoute: typeof DashboardRouteImport
    }
    '/dashboard/$workspaceName/monitors/$id/': {
      id: '/dashboard/$workspaceName/monitors/$id/'
      path: '/$workspaceName/monitors/$id'
      fullPath: '/dashboard/$workspaceName/monitors/$id'
      preLoaderRoute: typeof DashboardWorkspaceNameMonitorsIdIndexImport
      parentRoute: typeof DashboardRouteImport
    }
    '/dashboard/$workspaceName/monitors/new/': {
      id: '/dashboard/$workspaceName/monitors/new/'
      path: '/$workspaceName/monitors/new'
      fullPath: '/dashboard/$workspaceName/monitors/new'
      preLoaderRoute: typeof DashboardWorkspaceNameMonitorsNewIndexImport
      parentRoute: typeof DashboardRouteImport
    }
    '/dashboard/$workspaceName/monitors/$id/edit/': {
      id: '/dashboard/$workspaceName/monitors/$id/edit/'
      path: '/$workspaceName/monitors/$id/edit'
      fullPath: '/dashboard/$workspaceName/monitors/$id/edit'
      preLoaderRoute: typeof DashboardWorkspaceNameMonitorsIdEditIndexImport
      parentRoute: typeof DashboardRouteImport
    }
  }
}

// Create and export the route tree

interface DashboardRouteRouteChildren {
  DashboardWorkspacesIndexRoute: typeof DashboardWorkspacesIndexRoute
  DashboardWorkspaceNameLogsIndexRoute: typeof DashboardWorkspaceNameLogsIndexRoute
  DashboardWorkspaceNameMonitorsIndexRoute: typeof DashboardWorkspaceNameMonitorsIndexRoute
  DashboardWorkspacesWorkspaceIdIndexRoute: typeof DashboardWorkspacesWorkspaceIdIndexRoute
  DashboardWorkspacesNewIndexRoute: typeof DashboardWorkspacesNewIndexRoute
  DashboardWorkspaceNameMonitorsIdIndexRoute: typeof DashboardWorkspaceNameMonitorsIdIndexRoute
  DashboardWorkspaceNameMonitorsNewIndexRoute: typeof DashboardWorkspaceNameMonitorsNewIndexRoute
  DashboardWorkspaceNameMonitorsIdEditIndexRoute: typeof DashboardWorkspaceNameMonitorsIdEditIndexRoute
}

const DashboardRouteRouteChildren: DashboardRouteRouteChildren = {
  DashboardWorkspacesIndexRoute: DashboardWorkspacesIndexRoute,
  DashboardWorkspaceNameLogsIndexRoute: DashboardWorkspaceNameLogsIndexRoute,
  DashboardWorkspaceNameMonitorsIndexRoute:
    DashboardWorkspaceNameMonitorsIndexRoute,
  DashboardWorkspacesWorkspaceIdIndexRoute:
    DashboardWorkspacesWorkspaceIdIndexRoute,
  DashboardWorkspacesNewIndexRoute: DashboardWorkspacesNewIndexRoute,
  DashboardWorkspaceNameMonitorsIdIndexRoute:
    DashboardWorkspaceNameMonitorsIdIndexRoute,
  DashboardWorkspaceNameMonitorsNewIndexRoute:
    DashboardWorkspaceNameMonitorsNewIndexRoute,
  DashboardWorkspaceNameMonitorsIdEditIndexRoute:
    DashboardWorkspaceNameMonitorsIdEditIndexRoute,
}

const DashboardRouteRouteWithChildren = DashboardRouteRoute._addFileChildren(
  DashboardRouteRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRouteRouteWithChildren
  '/auth/login': typeof AuthLoginRoute
  '/dashboard/workspaces': typeof DashboardWorkspacesIndexRoute
  '/dashboard/$workspaceName/logs': typeof DashboardWorkspaceNameLogsIndexRoute
  '/dashboard/$workspaceName/monitors': typeof DashboardWorkspaceNameMonitorsIndexRoute
  '/dashboard/workspaces/$workspaceId': typeof DashboardWorkspacesWorkspaceIdIndexRoute
  '/dashboard/workspaces/new': typeof DashboardWorkspacesNewIndexRoute
  '/dashboard/$workspaceName/monitors/$id': typeof DashboardWorkspaceNameMonitorsIdIndexRoute
  '/dashboard/$workspaceName/monitors/new': typeof DashboardWorkspaceNameMonitorsNewIndexRoute
  '/dashboard/$workspaceName/monitors/$id/edit': typeof DashboardWorkspaceNameMonitorsIdEditIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRouteRouteWithChildren
  '/auth/login': typeof AuthLoginRoute
  '/dashboard/workspaces': typeof DashboardWorkspacesIndexRoute
  '/dashboard/$workspaceName/logs': typeof DashboardWorkspaceNameLogsIndexRoute
  '/dashboard/$workspaceName/monitors': typeof DashboardWorkspaceNameMonitorsIndexRoute
  '/dashboard/workspaces/$workspaceId': typeof DashboardWorkspacesWorkspaceIdIndexRoute
  '/dashboard/workspaces/new': typeof DashboardWorkspacesNewIndexRoute
  '/dashboard/$workspaceName/monitors/$id': typeof DashboardWorkspaceNameMonitorsIdIndexRoute
  '/dashboard/$workspaceName/monitors/new': typeof DashboardWorkspaceNameMonitorsNewIndexRoute
  '/dashboard/$workspaceName/monitors/$id/edit': typeof DashboardWorkspaceNameMonitorsIdEditIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/dashboard': typeof DashboardRouteRouteWithChildren
  '/auth/login': typeof AuthLoginRoute
  '/dashboard/workspaces/': typeof DashboardWorkspacesIndexRoute
  '/dashboard/$workspaceName/logs/': typeof DashboardWorkspaceNameLogsIndexRoute
  '/dashboard/$workspaceName/monitors/': typeof DashboardWorkspaceNameMonitorsIndexRoute
  '/dashboard/workspaces/$workspaceId/': typeof DashboardWorkspacesWorkspaceIdIndexRoute
  '/dashboard/workspaces/new/': typeof DashboardWorkspacesNewIndexRoute
  '/dashboard/$workspaceName/monitors/$id/': typeof DashboardWorkspaceNameMonitorsIdIndexRoute
  '/dashboard/$workspaceName/monitors/new/': typeof DashboardWorkspaceNameMonitorsNewIndexRoute
  '/dashboard/$workspaceName/monitors/$id/edit/': typeof DashboardWorkspaceNameMonitorsIdEditIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/dashboard'
    | '/auth/login'
    | '/dashboard/workspaces'
    | '/dashboard/$workspaceName/logs'
    | '/dashboard/$workspaceName/monitors'
    | '/dashboard/workspaces/$workspaceId'
    | '/dashboard/workspaces/new'
    | '/dashboard/$workspaceName/monitors/$id'
    | '/dashboard/$workspaceName/monitors/new'
    | '/dashboard/$workspaceName/monitors/$id/edit'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/dashboard'
    | '/auth/login'
    | '/dashboard/workspaces'
    | '/dashboard/$workspaceName/logs'
    | '/dashboard/$workspaceName/monitors'
    | '/dashboard/workspaces/$workspaceId'
    | '/dashboard/workspaces/new'
    | '/dashboard/$workspaceName/monitors/$id'
    | '/dashboard/$workspaceName/monitors/new'
    | '/dashboard/$workspaceName/monitors/$id/edit'
  id:
    | '__root__'
    | '/'
    | '/dashboard'
    | '/auth/login'
    | '/dashboard/workspaces/'
    | '/dashboard/$workspaceName/logs/'
    | '/dashboard/$workspaceName/monitors/'
    | '/dashboard/workspaces/$workspaceId/'
    | '/dashboard/workspaces/new/'
    | '/dashboard/$workspaceName/monitors/$id/'
    | '/dashboard/$workspaceName/monitors/new/'
    | '/dashboard/$workspaceName/monitors/$id/edit/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DashboardRouteRoute: typeof DashboardRouteRouteWithChildren
  AuthLoginRoute: typeof AuthLoginRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DashboardRouteRoute: DashboardRouteRouteWithChildren,
  AuthLoginRoute: AuthLoginRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dashboard",
        "/auth/login"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard/route.tsx",
      "children": [
        "/dashboard/workspaces/",
        "/dashboard/$workspaceName/logs/",
        "/dashboard/$workspaceName/monitors/",
        "/dashboard/workspaces/$workspaceId/",
        "/dashboard/workspaces/new/",
        "/dashboard/$workspaceName/monitors/$id/",
        "/dashboard/$workspaceName/monitors/new/",
        "/dashboard/$workspaceName/monitors/$id/edit/"
      ]
    },
    "/auth/login": {
      "filePath": "auth/login.tsx"
    },
    "/dashboard/workspaces/": {
      "filePath": "dashboard/workspaces/index.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/$workspaceName/logs/": {
      "filePath": "dashboard/$workspaceName/logs/index.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/$workspaceName/monitors/": {
      "filePath": "dashboard/$workspaceName/monitors/index.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/workspaces/$workspaceId/": {
      "filePath": "dashboard/workspaces/$workspaceId/index.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/workspaces/new/": {
      "filePath": "dashboard/workspaces/new/index.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/$workspaceName/monitors/$id/": {
      "filePath": "dashboard/$workspaceName/monitors/$id/index.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/$workspaceName/monitors/new/": {
      "filePath": "dashboard/$workspaceName/monitors/new/index.tsx",
      "parent": "/dashboard"
    },
    "/dashboard/$workspaceName/monitors/$id/edit/": {
      "filePath": "dashboard/$workspaceName/monitors/$id/edit/index.tsx",
      "parent": "/dashboard"
    }
  }
}
ROUTE_MANIFEST_END */
