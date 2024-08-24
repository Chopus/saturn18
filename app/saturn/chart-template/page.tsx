'use client'

import { simulateData, ZoomableChart } from "./zoom-chart"
import { ChartMany } from "./chartmany"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Star } from "lucide-react"

export default function ChartTemplate() {
    const data = simulateData
    return (
        <div className="flex flex-col mt-4 ml-4 gap-4">
            <h1>Chart Template 1</h1>
            <div>
                <div className="items-center w-full h-[300px] sm:h-[400px] md:h-[500px] hidden lg:block">
                    <ZoomableChart data={data} />
                </div>
            </div >
            <h1>Chart Template 2</h1>
            <div>
                <ChartMany />
            </div>
        </div >
    )
}