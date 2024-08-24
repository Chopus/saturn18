"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const links = [
  {
    name: "Area Chart",
    href: "/saturn/chart#area-chart",
  },
  {
    name: "Bar Chart",
    href: "/saturn/chart#bar-chart",
  },
  {
    name: "Line Chart",
    href: "/saturn/chart#line-chart",
  },
  {
    name: "Pie Chart",
    href: "/saturn/chart#pie-chart",
  },
  {
    name: "Radar Chart",
    href: "/saturn/chart#radar-chart",
  },
  {
    name: "Radial Chart",
    href: "/saturn/chart#radial-chart",
  },
  {
    name: "Tooltip",
    href: "/saturn/chart#tooltip",
  },
]

export default function ChartsNav({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const pathname = usePathname()

  return (
    <ScrollArea className="max-w-[600px] lg:max-w-none">
      <div className={cn("flex items-center", className)} {...props}>
        {links.map((example, index) => (
          <Link
            href={example.href}
            key={example.href}
            className={cn(
              "flex h-7 shrink-0 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
              pathname?.startsWith(example.href) ||
                (index === 0 && pathname === "/")
                ? "bg-muted font-medium text-primary"
                : "text-muted-foreground"
            )}
          >
            {example.name}
          </Link>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="invisible" />
    </ScrollArea>
  )
}