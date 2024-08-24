import React from "react";
import {
  LayoutDashboard,
  ChartArea,
  ChartNoAxesColumn,
  Barcode,
  Drill,
  Link2,
  LogIn,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Blend } from "lucide-react";


export default function SidebarNavComponent() {
  return (
    <nav className="flex flex-col w-64 h-screen p-4 border-r sticky top-0 gap-2">
      <div className="flex flex-row h-12">
        <Blend />
        <h1 className="font-black ml-8">Saturn</h1>
      </div>
    <div className="flex flex-col gap-4">  
      <Link href="/saturn/home">
      <div className="flex flex-row items-center">
          <LayoutDashboard/>
          <span className="ml-4">Dashboard</span>
      </div>
      </Link>

      <Link href="/saturn/chart">
        <div className="flex flex-row items-center">
          <ChartArea/>
          <span className="ml-4">Chart</span>
        </div>
      </Link>

      <Link href="/saturn/chart-template">
        <div className="flex flex-row items-center">
          <ChartNoAxesColumn/>
          <span className="ml-4">Chart Template</span>
        </div>
      </Link>

      <Link href="/saturn/sna">
        <div className="flex flex-row items-center">
          <Link2/>
          <span className="ml-4">Network</span>
        </div>
      </Link>

      <Link href="/saturn/tools">
        <div className="flex flex-row items-center">
          <Drill/>
          <span className="ml-4">Tools</span>
        </div>
      </Link>

      <Link href="/saturn/debug">
        <div className="flex flex-row items-center">
          <Barcode/>
          <span className="ml-4">Debug</span>
        </div>
      </Link>

      <Link href="/login">
        <div className="flex flex-row items-center">
          <LogIn/>
          <span className="ml-4">Login</span>
        </div>
      </Link>
      </div>
      {/* <div className="font-mono">MONO</div> */}
    </nav>
  );
}

