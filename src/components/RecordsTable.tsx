import { gql } from "src/__generated__";

export type ObsRoute = "latest" | "map" | "player";

export const RECORD_BASE_FRAGMENT = gql(/* GraphQL */ `
  fragment RecordBase on RankedRecord {
    id
    rank
    time
    recordDate
  }
`);