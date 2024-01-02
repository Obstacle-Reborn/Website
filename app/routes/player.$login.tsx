import { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { RankedRecordOfPlayer } from "src/RankedRecord";
import { gql } from "src/__generated__";
import { GetPlayerInfoQuery, SortState } from "src/__generated__/graphql";
import { fetchGraphql } from "src/utils";

export const PLAYER_RECORDS_FRAGMENT = gql(/* GraphQL */ `
  fragment PlayerRecords on Player {
    records(dateSortBy: $dateSortBy) {
      map {
        gameId
        name
      }
      ...RecordBase
    }
  }
`);

const GET_PLAYER_INFO = gql(/* GraphQL */ `
  query GetPlayerInfo($login: String!, $dateSortBy: SortState) {
    player(login: $login) {
      login
      name
      zonePath
      role
      ...PlayerRecords
    }
  }
`);

const SORT_PLAYER_RECORDS = gql(/* GraphQL */ `
  query SortPlayerRecords($login: String!, $dateSortBy: SortState) {
    player(login: $login) {
      ...PlayerRecords
    }
  }
`);

type PlayerRecordsProperty = GetPlayerInfoQuery["player"] & {
  records: RankedRecordOfPlayer[];
};

export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const dateSortBy =
    SortState[url.searchParams.get("dateSort") as keyof typeof SortState] ??
    null;

  const info = await fetchGraphql(GET_PLAYER_INFO, {
    login: params.login!,
    dateSortBy,
  });

  return info;
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const playerName = "salut";
  return [
    { title: `Obstacle | Leaderboard of ${playerName}` },
    {
      name: "description",
      content: `Obstacle leaderboard for the player: ${playerName}`,
    },
  ];
};

export default function PlayerPage() {
  return (<></>);
}
