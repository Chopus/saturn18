'use client';

import { useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BasicSNA from "./components/3d-sna";
import LargeSNA from "./components/large-sna";
import D2SNA from "./components/2d-sna";



export default function Sna() {
    const [selectedSNA, setSelectedSNA] = useState("BasicSNA");

    return (
        <div className="flex flex-col mt-4 ml-4">
            <div className="flex mb-8">
                <Tabs defaultValue="BasicSNA" className="w-full">
                    <TabsList>
                        <TabsTrigger value="BasicSNA" onClick={() => setSelectedSNA("BasicSNA")}>Basic SNA</TabsTrigger>
                        <TabsTrigger value="LargeSNA" onClick={() => setSelectedSNA("LargeSNA")}>Large SNA</TabsTrigger>
                        <TabsTrigger value="2DSNA" onClick={() => setSelectedSNA("2DSNA")}>2D SNA</TabsTrigger>
                        <TabsTrigger value="DynamicSNA" onClick={() => setSelectedSNA("DynamicSNA")}>Dynamic SNA</TabsTrigger>
                        <TabsTrigger value="Network5" onClick={() => setSelectedSNA("BasicSNA")}>Network 5</TabsTrigger>
                    </TabsList>
                    <TabsContent value="BasicSNA">
                        <BasicSNA />
                    </TabsContent>
                    <TabsContent value="LargeSNA">
                        <LargeSNA />
                    </TabsContent>
                    <TabsContent value="2DSNA">
                        <D2SNA />
                    </TabsContent>
                    <TabsContent value="Dynamic SNA">
                        <BasicSNA />
                    </TabsContent>
                    <TabsContent value="Network5">
                        <BasicSNA />
                    </TabsContent>
                </Tabs>
                {/* <div className="flex space-x-2">
                    <Button onClick={() => setSelectedSNA("BasicSNA")}>Network 1</Button>
                    <Button onClick={() => setSelectedSNA("LargeSNA")}>Network 2</Button>
                    <Button onClick={() => setSelectedSNA("BasicSNA")}>Network 3</Button>
                    <Button onClick={() => setSelectedSNA("BasicSNA")}>Network 4</Button>
                    <Button onClick={() => setSelectedSNA("BasicSNA")}>Network 5</Button>
                </div> */}
                {/* <select onChange={(e) => setSelectedSNA(e.target.value)} value={selectedSNA}>
                    <option value="BasicSNA">Basic SNA</option>
                    <option value="LargeSNA">Large SNA</option>
                </select> */}
            </div>
            {/* <div className="w-1/2 h-1/2">

                {selectedSNA === "BasicSNA" ? <BasicSNA /> : <LargeSNA />}


                <Card>
                    <CardContent>
                    {selectedSNA === "BasicSNA" ? <BasicSNA /> : <LargeSNA />}
                </CardContent>
                </Card>


            </div> */}
        </div>
    );
}