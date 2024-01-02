import type { TypedDocumentNode } from "@apollo/client";
import { once } from "lodash";
import { useState, createContext, useContext } from "react";
import type { ObsRoute } from "src/components/RecordsTable";
import type {
  GlobalRankedRecord,
  RankedRecordOfMap,
  RankedRecordOfPlayer,
} from "../RankedRecord";
import { useParams, useSearchParams } from "@remix-run/react";
import { useNav } from "src/utils";
import type {
  GetMapInfoQueryVariables,
  GetPlayerInfoQueryVariables,
  GetRecordsQuery,
  GetRecordsQueryVariables,
  SortMapRecordsQuery,
  SortPlayerRecordsQuery,
} from "src/__generated__/graphql";

const createRecordsContext = once(<Route extends ObsRoute>() =>
  createContext<RecordsPageContextValue<Route> | null>(null)
);

export type RecordsPageContextValue<Route extends ObsRoute> =
  RecordsPageProviderProps<Route> & {
    // How to display the CPs times charts
    deltaTimes: boolean;
    setDeltaTimes: (val: boolean) => void;

    // Handle the close event of the selected record
    handleClose: () => void;

    // Handle the open event of a selected record
    handleLineClick: (id: number) => void;

    // URL search params
    searchParams: URLSearchParams;

    // Update the URL search params
    setSearchParams: (val: URLSearchParams) => void;
  };

export function useRecordsPage<Route extends ObsRoute>() {
  const context = useContext(createRecordsContext<Route>());
  if (context === null) {
    throw new Error(
      "useRecordsPage() should only be used inside the RecordsPageProvider component"
    );
  }

  return context;
}

export function useLoadedRoute<Route extends ObsRoute>() {
  const { route } = useRecordsPage<Route>();
  return route;
}

export function useSearchState<T>(
  label: string
): [T | null, (newValue: T | null) => void] {
  const { searchParams, setSearchParams } = useRecordsPage();

  const value = searchParams.get(label) as T | null;

  const setValue = (newValue: T | null) => {
    if (newValue === null) {
      searchParams.delete(label);
    } else {
      searchParams.set(label, value as string);
    }
    setSearchParams(searchParams);
  };

  return [value, setValue];
}

export type Q<Route extends ObsRoute> = Route extends "latest"
  ? GetRecordsQuery
  : Route extends "map"
  ? SortMapRecordsQuery
  : SortPlayerRecordsQuery;

export type V<Route extends ObsRoute> = Route extends "latest"
  ? GetRecordsQueryVariables
  : Route extends "map"
  ? GetMapInfoQueryVariables
  : GetPlayerInfoQueryVariables;

export type EV<Route extends ObsRoute> = Route extends "latest"
  ? undefined
  : Route extends "map"
  ? { gameId: string }
  : { login: string };

export type R<Route extends ObsRoute> = Route extends "latest"
  ? GlobalRankedRecord
  : Route extends "map"
  ? RankedRecordOfMap
  : RankedRecordOfPlayer;

export interface RecordsPageProviderPropsInner<
  Route extends ObsRoute,
  Query = Q<Route>,
  Variables = V<Route>,
  ExtraVariables = EV<Route>,
  Record = R<Route>
> {
  // The loaded route
  route: Route;

  // The GraphQL query used to sort
  sortQuery: TypedDocumentNode<Query, Variables>;

  // Some extra variables to give to the query (map's gameId, player's login...)
  extraVariables?: ExtraVariables;

  // Return the records array from the result of the sort query
  retrieveSortResult: (val: Query) => Record[];

  // Update records (by sorting, loading more...)
  records: Record[];
}

export interface RecordsPageProviderProps<
  Route extends ObsRoute,
  Record = R<Route>
> extends RecordsPageProviderPropsInner<Route, Record> {
  setRecords: (val: Record[]) => void;
}

export function RecordsPageProvider<Route extends ObsRoute>({
  children,
  ...rest
}: RecordsPageProviderProps<Route> & {
  children: React.ReactNode;
}) {
  const RecordsPageContext = createRecordsContext<Route>();

  const [deltaTimes, setDeltaTimes] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  const nav = useNav();

  const handleClose = () => {
    // Only navigate to previous route if we're not selecting a record
    if (typeof params.recordId !== "undefined") {
      nav(`.?${searchParams.toString()}`);
    }
  };

  const handleLineClick = (id: number) => {
    if (params.recordId === id.toString()) {
      nav(`.?${searchParams.toString()}`);
    } else {
      nav(`${id}?${searchParams.toString()}`);
    }
  };

  return (
    <RecordsPageContext.Provider
      value={
        {
          deltaTimes,
          setDeltaTimes,
          handleClose,
          handleLineClick,
          searchParams,
          setSearchParams,
          ...rest,
        } satisfies RecordsPageContextValue<Route>
      }
    >
      {children}
    </RecordsPageContext.Provider>
  );
}
