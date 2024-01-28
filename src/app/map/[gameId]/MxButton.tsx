"use client";

import { useRef } from "react";

export default function MxButton({ gameId }: { gameId: string }) {
  const mxUrl = useRef<string | null>(null);

  const openMxUrl = () => {
    window.open(mxUrl.current!, "_blank");
  };

  const handleMxClick = async () => {
    if (typeof mxUrl.current === "string") {
      openMxUrl();
    } else {
      const mapsIds: { TrackID: number }[] = await fetch('https://sm.mania.exchange/api/maps/get_map_info/multi/' + gameId)
        .then(res => res.json());

      if (mapsIds.length > 0) {
        mxUrl.current = 'https://sm.mania-exchange.com/maps/' + mapsIds[0].TrackID;
        openMxUrl();
      } else {
        alert('this map does not seem to be uploaded to sm.mania.exchange');
      }
    }
  };

  return (
    <input onClick={handleMxClick} type="image" src="/img/planet_mx_logo.png" />
  );
}