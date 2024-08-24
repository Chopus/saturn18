'use client';

import ForceGraph3D from "react-force-graph-3d";
import { genRandomTree } from "./getRandomTree";
import { useBlockData } from "./getBlockData";
import { fetchBlockData } from "./getNewBlockData";
import { useState, useEffect } from "react";

export default function LargeSNA() {
    const [data, setData] = useState();

    useEffect(() => {
        const getData = async () => {
            const fetchedData = await fetchBlockData();
            setData(fetchedData);
        };
        getData();
    }, []);
    return (
    // <ForceGraph3D
    //   graphData={useBlockData()}
    //   linkDirectionalArrowLength={3.5}
    //   linkDirectionalArrowRelPos={1}
    //   linkCurvature={0.25}
    // />
    <ForceGraph3D
    graphData={data}
    nodeLabel={node => `${node.user}: ${node.description}`}
    nodeAutoColorBy="user"
    linkDirectionalParticles={1}
    width={960}
    height={512}
  />
  );
}
