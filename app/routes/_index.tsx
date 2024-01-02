import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { gql } from "src/__generated__";
import { SortState } from "src/__generated__/graphql";
import { fetchGraphql } from "src/utils";

const GET_RECORDS = gql(/* GraphQL */ `
  query GetRecords($dateSortBy: SortState) {
    records(dateSortBy: $dateSortBy) {
      player {
        login
        name
      }
      map {
        gameId
        name
      }
      ...RecordBase
    }
  }
`);

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const dateSortBy =
    SortState[url.searchParams.get("dateSort") as keyof typeof SortState] ??
    null;
  return await fetchGraphql(GET_RECORDS, { dateSortBy });
};

export const meta: MetaFunction = () => {
  return [
    { title: "Obstacle Leaderboards" },
    { name: "description", content: "Obstacle Leaderboards" },
  ];
};

export default function Index() {
  const { records } = useLoaderData<typeof loader>();

  return (
    <>
    </>
  );
}
