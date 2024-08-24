'use client';

import ForceGraph3D from "react-force-graph-3d";
import { genRandomTree } from "./getRandomTree";

export default function BasicSNA() {
  return (
    <ForceGraph3D
      graphData={genRandomTree(40)}
      linkDirectionalArrowLength={3.5}
      linkDirectionalArrowRelPos={1}
      linkCurvature={0.25}
      width={960}
      height={512}
    />
  );
}
