export interface RankedRecord {
  id: number;
  rank: number;
  time: number;
  recordDate: string;
}

export type PlayerInfo = {
  login: string;
  name: string;
};

export type MapInfo = {
  gameId: string;
  name: string;
};

export interface RankedRecordOfMap extends RankedRecord {
  // We already know the map, so we show the player
  player: PlayerInfo;
}

export interface RankedRecordOfPlayer extends RankedRecord {
  // We already know the player, so we show the map
  map: MapInfo;
}

export interface GlobalRankedRecord extends RankedRecord {
  player: PlayerInfo;
  map: MapInfo;
}
