/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetRecords($dateSortBy: SortState) {\n    records(dateSortBy: $dateSortBy) {\n      player {\n        login\n        name\n      }\n      map {\n        gameId\n        name\n      }\n      ...RecordBase\n    }\n  }\n": types.GetRecordsDocument,
    "\n  fragment MapRecords on Map {\n    records(rankSortBy: $rankSortBy, dateSortBy: $dateSortBy) {\n      player {\n        login\n        name\n      }\n      ...RecordBase\n    }\n  }\n": types.MapRecordsFragmentDoc,
    "\n  query GetMapInfo(\n    $gameId: String!\n    $dateSortBy: SortState\n    $rankSortBy: SortState\n  ) {\n    map(gameId: $gameId) {\n      gameId\n      name\n      cpsNumber\n      reversed\n      player {\n        login\n        name\n      }\n      ...MapRecords\n    }\n  }\n": types.GetMapInfoDocument,
    "\n  query SortMapRecords(\n    $gameId: String!\n    $dateSortBy: SortState\n    $rankSortBy: SortState\n  ) {\n    map(gameId: $gameId) {\n      ...MapRecords\n    }\n  }\n": types.SortMapRecordsDocument,
    "\n  fragment PlayerRecords on Player {\n    records(dateSortBy: $dateSortBy) {\n      map {\n        gameId\n        name\n      }\n      ...RecordBase\n    }\n  }\n": types.PlayerRecordsFragmentDoc,
    "\n  query GetPlayerInfo($login: String!, $dateSortBy: SortState) {\n    player(login: $login) {\n      login\n      name\n      zonePath\n      role\n      ...PlayerRecords\n    }\n  }\n": types.GetPlayerInfoDocument,
    "\n  query SortPlayerRecords($login: String!, $dateSortBy: SortState) {\n    player(login: $login) {\n      ...PlayerRecords\n    }\n  }\n": types.SortPlayerRecordsDocument,
    "\n  fragment RecordBase on RankedRecord {\n    id\n    rank\n    time\n    recordDate\n  }\n": types.RecordBaseFragmentDoc,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetRecords($dateSortBy: SortState) {\n    records(dateSortBy: $dateSortBy) {\n      player {\n        login\n        name\n      }\n      map {\n        gameId\n        name\n      }\n      ...RecordBase\n    }\n  }\n"): (typeof documents)["\n  query GetRecords($dateSortBy: SortState) {\n    records(dateSortBy: $dateSortBy) {\n      player {\n        login\n        name\n      }\n      map {\n        gameId\n        name\n      }\n      ...RecordBase\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment MapRecords on Map {\n    records(rankSortBy: $rankSortBy, dateSortBy: $dateSortBy) {\n      player {\n        login\n        name\n      }\n      ...RecordBase\n    }\n  }\n"): (typeof documents)["\n  fragment MapRecords on Map {\n    records(rankSortBy: $rankSortBy, dateSortBy: $dateSortBy) {\n      player {\n        login\n        name\n      }\n      ...RecordBase\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetMapInfo(\n    $gameId: String!\n    $dateSortBy: SortState\n    $rankSortBy: SortState\n  ) {\n    map(gameId: $gameId) {\n      gameId\n      name\n      cpsNumber\n      reversed\n      player {\n        login\n        name\n      }\n      ...MapRecords\n    }\n  }\n"): (typeof documents)["\n  query GetMapInfo(\n    $gameId: String!\n    $dateSortBy: SortState\n    $rankSortBy: SortState\n  ) {\n    map(gameId: $gameId) {\n      gameId\n      name\n      cpsNumber\n      reversed\n      player {\n        login\n        name\n      }\n      ...MapRecords\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SortMapRecords(\n    $gameId: String!\n    $dateSortBy: SortState\n    $rankSortBy: SortState\n  ) {\n    map(gameId: $gameId) {\n      ...MapRecords\n    }\n  }\n"): (typeof documents)["\n  query SortMapRecords(\n    $gameId: String!\n    $dateSortBy: SortState\n    $rankSortBy: SortState\n  ) {\n    map(gameId: $gameId) {\n      ...MapRecords\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment PlayerRecords on Player {\n    records(dateSortBy: $dateSortBy) {\n      map {\n        gameId\n        name\n      }\n      ...RecordBase\n    }\n  }\n"): (typeof documents)["\n  fragment PlayerRecords on Player {\n    records(dateSortBy: $dateSortBy) {\n      map {\n        gameId\n        name\n      }\n      ...RecordBase\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetPlayerInfo($login: String!, $dateSortBy: SortState) {\n    player(login: $login) {\n      login\n      name\n      zonePath\n      role\n      ...PlayerRecords\n    }\n  }\n"): (typeof documents)["\n  query GetPlayerInfo($login: String!, $dateSortBy: SortState) {\n    player(login: $login) {\n      login\n      name\n      zonePath\n      role\n      ...PlayerRecords\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query SortPlayerRecords($login: String!, $dateSortBy: SortState) {\n    player(login: $login) {\n      ...PlayerRecords\n    }\n  }\n"): (typeof documents)["\n  query SortPlayerRecords($login: String!, $dateSortBy: SortState) {\n    player(login: $login) {\n      ...PlayerRecords\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment RecordBase on RankedRecord {\n    id\n    rank\n    time\n    recordDate\n  }\n"): (typeof documents)["\n  fragment RecordBase on RankedRecord {\n    id\n    rank\n    time\n    recordDate\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;