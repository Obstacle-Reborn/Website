/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Escaped: { input: any; output: any; }
  /**
   * ISO 8601 combined date and time without timezone.
   *
   * # Examples
   *
   * * `2015-07-01T08:59:60.123`,
   */
  NaiveDateTime: { input: any; output: any; }
};

export type Banishment = {
  __typename?: 'Banishment';
  banishedBy: Player;
  dateBan: Scalars['NaiveDateTime']['output'];
  duration: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  player: Player;
  reason: Scalars['String']['output'];
  wasReprieved: Scalars['Boolean']['output'];
};

export type CheckpointTimes = {
  __typename?: 'CheckpointTimes';
  cpNum: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
};

export type Event = {
  __typename?: 'Event';
  admins: Array<Player>;
  categories: Array<EventCategory>;
  cooldown?: Maybe<Scalars['Int']['output']>;
  edition: EventEdition;
  editions: Array<EventEdition>;
  handle: Scalars['String']['output'];
};


export type EventEditionArgs = {
  editionId: Scalars['Int']['input'];
};

export type EventCategory = {
  __typename?: 'EventCategory';
  bannerImgUrl?: Maybe<Scalars['String']['output']>;
  handle: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type EventEdition = {
  __typename?: 'EventEdition';
  admins: Array<Player>;
  bannerImgUrl?: Maybe<Scalars['String']['output']>;
  categories: Array<EventCategory>;
  event: Event;
  id: Scalars['Int']['output'];
  mappack?: Maybe<Mappack>;
  name: Scalars['String']['output'];
  startDate: Scalars['NaiveDateTime']['output'];
};

export type Map = Node & {
  __typename?: 'Map';
  averageRating: Array<PlayerRating>;
  cpsNumber?: Maybe<Scalars['Int']['output']>;
  gameId: Scalars['Escaped']['output'];
  id: Scalars['ID']['output'];
  medalFor?: Maybe<MedalPrice>;
  name: Scalars['Escaped']['output'];
  player: Player;
  playerId: Scalars['ID']['output'];
  ratings: Array<Rating>;
  records: Array<RankedRecord>;
  reversed: Scalars['Boolean']['output'];
};


export type MapMedalForArgs = {
  reqLogin: Scalars['String']['input'];
};


export type MapRecordsArgs = {
  dateSortBy?: InputMaybe<SortState>;
  rankSortBy?: InputMaybe<SortState>;
};

export type MapConnection = {
  __typename?: 'MapConnection';
  /** A list of edges. */
  edges: Array<MapEdge>;
  /** A list of nodes. */
  nodes: Array<Map>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MapEdge = {
  __typename?: 'MapEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Map;
};

export type Mappack = {
  __typename?: 'Mappack';
  leaderboard: Array<MappackPlayer>;
  nbMaps: Scalars['Int']['output'];
  player: MappackPlayer;
};


export type MappackPlayerArgs = {
  login: Scalars['String']['input'];
};

export type MappackMap = {
  __typename?: 'MappackMap';
  lastRank: Scalars['Int']['output'];
  map: Map;
  rank: Scalars['Int']['output'];
};

export type MappackPlayer = {
  __typename?: 'MappackPlayer';
  mapFinished: Scalars['Int']['output'];
  player: Player;
  rank: Scalars['Int']['output'];
  rankAvg: Scalars['Float']['output'];
  ranks: Array<MappackMap>;
  worstRank: Scalars['Int']['output'];
};

export enum Medal {
  Bronze = 'BRONZE',
  Champion = 'CHAMPION',
  Gold = 'GOLD',
  Silver = 'SILVER'
}

export type MedalPrice = {
  __typename?: 'MedalPrice';
  map: Map;
  medal: Medal;
  player: Player;
  priceDate: Scalars['NaiveDateTime']['output'];
};

export type MutationRoot = {
  __typename?: 'MutationRoot';
  calcMappackScores: Mappack;
  updateResourcesContent: ResourcesContent;
};


export type MutationRootCalcMappackScoresArgs = {
  mappackId: Scalars['String']['input'];
};


export type MutationRootUpdateResourcesContentArgs = {
  text: Scalars['String']['input'];
};

export type Node = {
  id: Scalars['ID']['output'];
};

/** Information about pagination in a connection */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Player = Node & {
  __typename?: 'Player';
  banishments: Array<Banishment>;
  id: Scalars['ID']['output'];
  login: Scalars['Escaped']['output'];
  maps: MapConnection;
  name: Scalars['Escaped']['output'];
  records: Array<RankedRecord>;
  role: PlayerRole;
  zonePath?: Maybe<Scalars['String']['output']>;
};


export type PlayerMapsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type PlayerRecordsArgs = {
  dateSortBy?: InputMaybe<SortState>;
};

export type PlayerConnection = {
  __typename?: 'PlayerConnection';
  /** A list of edges. */
  edges: Array<PlayerEdge>;
  /** A list of nodes. */
  nodes: Array<Player>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PlayerEdge = {
  __typename?: 'PlayerEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Player;
};

export type PlayerRating = {
  __typename?: 'PlayerRating';
  kind: RatingKind;
  rating: Scalars['Float']['output'];
};

export enum PlayerRole {
  Admin = 'ADMIN',
  Moderator = 'MODERATOR',
  Player = 'PLAYER'
}

export type QueryRoot = {
  __typename?: 'QueryRoot';
  banishments: Array<Banishment>;
  event: Event;
  events: Array<Event>;
  map: Map;
  mappack: Mappack;
  maps: MapConnection;
  node?: Maybe<Node>;
  player: Player;
  players: PlayerConnection;
  record: RankedRecord;
  records: Array<RankedRecord>;
  resourcesContent: ResourcesContent;
};


export type QueryRootEventArgs = {
  handle: Scalars['String']['input'];
};


export type QueryRootMapArgs = {
  gameId: Scalars['String']['input'];
};


export type QueryRootMappackArgs = {
  mappackId: Scalars['String']['input'];
};


export type QueryRootMapsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRootNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRootPlayerArgs = {
  login: Scalars['String']['input'];
};


export type QueryRootPlayersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRootRecordArgs = {
  recordId: Scalars['Int']['input'];
};


export type QueryRootRecordsArgs = {
  dateSortBy?: InputMaybe<SortState>;
};

export type RankedRecord = {
  __typename?: 'RankedRecord';
  averageCpsTimes: Array<CheckpointTimes>;
  cpsTimes: Array<CheckpointTimes>;
  flags: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  map: Map;
  player: Player;
  rank: Scalars['Int']['output'];
  recordDate: Scalars['NaiveDateTime']['output'];
  respawnCount: Scalars['Int']['output'];
  time: Scalars['Int']['output'];
  tryCount: Scalars['Int']['output'];
};

export type Rating = {
  __typename?: 'Rating';
  map: Map;
  player: Player;
  ratingDate: Scalars['NaiveDateTime']['output'];
  ratings: Array<PlayerRating>;
};

export enum RatingKind {
  Deco = 'DECO',
  Difficulty = 'DIFFICULTY',
  Route = 'ROUTE',
  Smoothness = 'SMOOTHNESS'
}

export type ResourcesContent = {
  __typename?: 'ResourcesContent';
  content: Scalars['String']['output'];
  lastModified: Scalars['NaiveDateTime']['output'];
};

export enum SortState {
  Reverse = 'REVERSE',
  Sort = 'SORT'
}

export type GetCampaignLeaderboardQueryVariables = Exact<{
  eventHandle: Scalars['String']['input'];
  editionId: Scalars['Int']['input'];
}>;


export type GetCampaignLeaderboardQuery = { __typename?: 'QueryRoot', event: { __typename?: 'Event', admins: Array<{ __typename?: 'Player', login: any, name: any }>, edition: { __typename?: 'EventEdition', name: string, startDate: any, bannerImgUrl?: string | null, admins: Array<{ __typename?: 'Player', login: any, name: any }>, mappack?: { __typename?: 'Mappack', nbMaps: number, leaderboard: Array<{ __typename?: 'MappackPlayer', rank: number, rankAvg: number, mapFinished: number, worstRank: number, player: { __typename?: 'Player', login: any, name: any } }> } | null } } };

export type GetCampaignPlayerInfoQueryVariables = Exact<{
  eventHandle: Scalars['String']['input'];
  editionId: Scalars['Int']['input'];
  login: Scalars['String']['input'];
}>;


export type GetCampaignPlayerInfoQuery = { __typename?: 'QueryRoot', event: { __typename?: 'Event', edition: { __typename?: 'EventEdition', mappack?: { __typename?: 'Mappack', player: { __typename?: 'MappackPlayer', ranks: Array<{ __typename?: 'MappackMap', rank: number, lastRank: number, map: { __typename?: 'Map', gameId: any, name: any } }> } } | null } } };

export type GetRecordsQueryVariables = Exact<{
  dateSortBy?: InputMaybe<SortState>;
}>;


export type GetRecordsQuery = { __typename?: 'QueryRoot', records: Array<(
    { __typename?: 'RankedRecord', player: { __typename?: 'Player', login: any, name: any }, map: { __typename?: 'Map', gameId: any, name: any } }
    & { ' $fragmentRefs'?: { 'RecordBaseFragment': RecordBaseFragment } }
  )> };

export type GetResourcesContentQueryVariables = Exact<{ [key: string]: never; }>;


export type GetResourcesContentQuery = { __typename?: 'QueryRoot', resourcesContent: { __typename?: 'ResourcesContent', content: string, lastModified: any } };

export type MapRecordsFragment = { __typename?: 'Map', records: Array<(
    { __typename?: 'RankedRecord', player: { __typename?: 'Player', login: any, name: any } }
    & { ' $fragmentRefs'?: { 'RecordBaseFragment': RecordBaseFragment } }
  )> } & { ' $fragmentName'?: 'MapRecordsFragment' };

export type GetMapInfoQueryVariables = Exact<{
  gameId: Scalars['String']['input'];
  dateSortBy?: InputMaybe<SortState>;
  rankSortBy?: InputMaybe<SortState>;
}>;


export type GetMapInfoQuery = { __typename?: 'QueryRoot', map: (
    { __typename?: 'Map', gameId: any, name: any, cpsNumber?: number | null, reversed: boolean, player: { __typename?: 'Player', login: any, name: any } }
    & { ' $fragmentRefs'?: { 'MapRecordsFragment': MapRecordsFragment } }
  ) };

export type SortMapRecordsQueryVariables = Exact<{
  gameId: Scalars['String']['input'];
  dateSortBy?: InputMaybe<SortState>;
  rankSortBy?: InputMaybe<SortState>;
}>;


export type SortMapRecordsQuery = { __typename?: 'QueryRoot', map: (
    { __typename?: 'Map' }
    & { ' $fragmentRefs'?: { 'MapRecordsFragment': MapRecordsFragment } }
  ) };

export type PlayerRecordsFragment = { __typename?: 'Player', records: Array<(
    { __typename?: 'RankedRecord', map: { __typename?: 'Map', gameId: any, name: any } }
    & { ' $fragmentRefs'?: { 'RecordBaseFragment': RecordBaseFragment } }
  )> } & { ' $fragmentName'?: 'PlayerRecordsFragment' };

export type GetPlayerInfoQueryVariables = Exact<{
  login: Scalars['String']['input'];
  dateSortBy?: InputMaybe<SortState>;
}>;


export type GetPlayerInfoQuery = { __typename?: 'QueryRoot', player: (
    { __typename?: 'Player', login: any, name: any, zonePath?: string | null, role: PlayerRole }
    & { ' $fragmentRefs'?: { 'PlayerRecordsFragment': PlayerRecordsFragment } }
  ) };

export type SortPlayerRecordsQueryVariables = Exact<{
  login: Scalars['String']['input'];
  dateSortBy?: InputMaybe<SortState>;
}>;


export type SortPlayerRecordsQuery = { __typename?: 'QueryRoot', player: (
    { __typename?: 'Player' }
    & { ' $fragmentRefs'?: { 'PlayerRecordsFragment': PlayerRecordsFragment } }
  ) };

export type RecordBaseFragment = { __typename?: 'RankedRecord', id: number, rank: number, time: number, recordDate: any } & { ' $fragmentName'?: 'RecordBaseFragment' };

export const RecordBaseFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecordBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RankedRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"recordDate"}}]}}]} as unknown as DocumentNode<RecordBaseFragment, unknown>;
export const MapRecordsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapRecords"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Map"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"records"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"rankSortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rankSortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateSortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateSortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecordBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecordBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RankedRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"recordDate"}}]}}]} as unknown as DocumentNode<MapRecordsFragment, unknown>;
export const PlayerRecordsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlayerRecords"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"records"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateSortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateSortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"map"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gameId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecordBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecordBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RankedRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"recordDate"}}]}}]} as unknown as DocumentNode<PlayerRecordsFragment, unknown>;
export const GetCampaignLeaderboardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCampaignLeaderboard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventHandle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"handle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventHandle"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"admins"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"bannerImgUrl"}},{"kind":"Field","name":{"kind":"Name","value":"admins"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mappack"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nbMaps"}},{"kind":"Field","name":{"kind":"Name","value":"leaderboard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rankAvg"}},{"kind":"Field","name":{"kind":"Name","value":"mapFinished"}},{"kind":"Field","name":{"kind":"Name","value":"worstRank"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCampaignLeaderboardQuery, GetCampaignLeaderboardQueryVariables>;
export const GetCampaignPlayerInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCampaignPlayerInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventHandle"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"editionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"handle"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventHandle"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edition"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"editionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"editionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mappack"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"player"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ranks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"map"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gameId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastRank"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCampaignPlayerInfoQuery, GetCampaignPlayerInfoQueryVariables>;
export const GetRecordsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRecords"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateSortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SortState"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"records"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateSortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateSortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"map"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gameId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecordBase"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecordBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RankedRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"recordDate"}}]}}]} as unknown as DocumentNode<GetRecordsQuery, GetRecordsQueryVariables>;
export const GetResourcesContentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetResourcesContent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resourcesContent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"lastModified"}}]}}]}}]} as unknown as DocumentNode<GetResourcesContentQuery, GetResourcesContentQueryVariables>;
export const GetMapInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMapInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gameId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateSortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SortState"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rankSortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SortState"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"map"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gameId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gameId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gameId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"cpsNumber"}},{"kind":"Field","name":{"kind":"Name","value":"reversed"}},{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapRecords"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecordBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RankedRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"recordDate"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapRecords"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Map"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"records"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"rankSortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rankSortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateSortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateSortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecordBase"}}]}}]}}]} as unknown as DocumentNode<GetMapInfoQuery, GetMapInfoQueryVariables>;
export const SortMapRecordsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SortMapRecords"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gameId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateSortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SortState"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rankSortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SortState"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"map"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"gameId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gameId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapRecords"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecordBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RankedRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"recordDate"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapRecords"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Map"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"records"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"rankSortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rankSortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"dateSortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateSortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"player"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecordBase"}}]}}]}}]} as unknown as DocumentNode<SortMapRecordsQuery, SortMapRecordsQueryVariables>;
export const GetPlayerInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPlayerInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateSortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SortState"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"player"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"zonePath"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PlayerRecords"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecordBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RankedRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"recordDate"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlayerRecords"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"records"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateSortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateSortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"map"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gameId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecordBase"}}]}}]}}]} as unknown as DocumentNode<GetPlayerInfoQuery, GetPlayerInfoQueryVariables>;
export const SortPlayerRecordsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SortPlayerRecords"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dateSortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SortState"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"player"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PlayerRecords"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RecordBase"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RankedRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rank"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"recordDate"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlayerRecords"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Player"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"records"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dateSortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dateSortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"map"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"gameId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"RecordBase"}}]}}]}}]} as unknown as DocumentNode<SortPlayerRecordsQuery, SortPlayerRecordsQueryVariables>;