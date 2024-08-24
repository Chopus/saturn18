import * as React from "react"

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "@/components/ui/label";
import { Settings, Rabbit, Bird, Turtle, Share } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/provider/theme-toggle";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Combobox } from "../ui/combobox";
import SearchBar from "./searchBar";
import {
  Tv,
  Lightbulb,
  StickyNote,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import ClickAvatar from "@/components/nav/click-avatar";
import DateRangePickerV0 from "../customui/date-range-picker-v0";

export default function HeaderNavComponent() {
  return (
    <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
      {/* <h1 className="text-xl font-semibold">Playground</h1> */}
      {/* <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/app">App</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator/>
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb> */}
      {/* <Combobox /> */}

      <div className="flex flex-row w-full justify-between">
        <div className="pr-8">
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Select Workspace" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Workspace 1</SelectLabel>
                <SelectItem value="pemilu">Pemilu</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Workspace 2</SelectLabel>
                <SelectItem value="IKN">IKN</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Workspace 3</SelectLabel>
                <SelectItem value="Parpol">Parpol</SelectItem>
                </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-row gap-2 pr-8 items-center">
          <Tv />
          <span>General</span>
        </div>
        <div className="flex flex-row gap-2 pr-8 items-center">
          <Lightbulb />
          <span>Topik</span>
        </div>
        <div className="flex flex-row gap-2 pr-8 items-center">
          <StickyNote />
          <span>Daily</span>
        </div>
        <DateRangePickerV0 />
        <SearchBar />
        <div className="pl-4">
          {/* <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar> */}
          <ClickAvatar />
        </div>

      </div>
    </header>
  );
}
