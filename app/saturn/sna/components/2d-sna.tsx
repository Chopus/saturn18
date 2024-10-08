'use client';

import ForceGraph2D from "react-force-graph-2d";
import { genRandomTree } from "./getRandomTree";
import { useState, useEffect } from "react";
import { fetchMiserables } from "./getMiserables";

export default function D2SNA() {
  const [data, setData] = useState();

  useEffect(() => {
      const getData = async () => {
          const fetchedData = await fetchMiserables();
          setData(fetchedData);
      };
      getData();
  }, []);

  return (
    <ForceGraph2D
      graphData={data}
      width={960}
      height={512}
      nodeAutoColorBy="group"
      nodeCanvasObject={(node, ctx, globalScale) => {
        const label = node.id;
        const fontSize = 12/globalScale;
        ctx.font = `${fontSize}px Sans-Serif`;
        const textWidth = ctx.measureText(label).width;
        const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2); // some padding

        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);

        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = node.color;
        ctx.fillText(label, node.x, node.y);

        node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
      }}
      nodePointerAreaPaint={(node, color, ctx) => {
        ctx.fillStyle = color;
        const bckgDimensions = node.__bckgDimensions;
        bckgDimensions && ctx.fillRect(node.x - bckgDimensions[0] / 2, node.y - bckgDimensions[1] / 2, ...bckgDimensions);
      }}
    />
  );
}
