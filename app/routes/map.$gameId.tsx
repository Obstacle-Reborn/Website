import { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { RankedRecordOfMap } from "src/RankedRecord";
import { gql } from "src/__generated__";
import { GetMapInfoQuery, SortState } from "src/__generated__/graphql";
import { fetchGraphql } from "src/utils";

export const MAP_RECORDS_FRAGMENT = gql(/* GraphQL */ `
  fragment MapRecords on Map {
    records(rankSortBy: $rankSortBy, dateSortBy: $dateSortBy) {
      player {
        login
        name
      }
      ...RecordBase
    }
  }
`);

const GET_MAP_INFO = gql(/* GraphQL */ `
  query GetMapInfo(
    $gameId: String!
    $dateSortBy: SortState
    $rankSortBy: SortState
  ) {
    map(gameId: $gameId) {
      gameId
      name
      cpsNumber
      reversed
      player {
        login
        name
      }
      ...MapRecords
    }
  }
`);

const SORT_MAP_RECORDS = gql(/* GraphQL */ `
  query SortMapRecords(
    $gameId: String!
    $dateSortBy: SortState
    $rankSortBy: SortState
  ) {
    map(gameId: $gameId) {
      ...MapRecords
    }
  }
`);

type MapRecordsProperty = GetMapInfoQuery["map"] & {
  records: RankedRecordOfMap[];
};

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const dateSortBy =
    SortState[url.searchParams.get("dateSort") as keyof typeof SortState] ??
    null;
  const rankSortBy =
    SortState[url.searchParams.get("rankSort") as keyof typeof SortState] ??
    null;

  const info = await fetchGraphql(GET_MAP_INFO, {
    gameId: params.gameId!,
    dateSortBy,
    rankSortBy,
  });

  return info;
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const mapName = "salut";
  return [
    { title: `Obstacle | Leaderboard of ${mapName}` },
    {
      name: "description",
      content: `Obstacle leaderboard for the map: ${mapName}`,
    },
  ];
};

export default function MapPage() {
  return (<></>);
}
