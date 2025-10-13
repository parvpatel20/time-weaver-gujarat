import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function Calendar({ className, classNames = {}, showOutsideDays = true, ...props }) {
  const merged = {
    months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
    month: "space-y-4",
    caption: "flex items-center justify-between",
    caption_label: "text-sm font-medium",
    nav: "flex items-center gap-2",
    nav_button: cn(buttonVariants({ variant: "ghost", size: "sm" }), "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),
    nav_button_previous: "",
    nav_button_next: "",
    table: "w-full border-collapse",
    head_row: "flex",
    head_cell: "text-xs font-medium text-muted-foreground",
    row: "flex",
    cell: "p-0",
    day: cn("h-9 w-9 p-0 font-normal", "aria-selected:opacity-100 inline-flex items-center justify-center rounded-md"),
    day_selected: "bg-accent text-accent-foreground",
    day_today: "bg-muted text-muted-foreground",
    day_outside: "opacity-50",
    day_disabled: "opacity-30 pointer-events-none",
    day_range_middle: "bg-accent/60",
    day_range_start: "rounded-l-md",
    day_range_end: "rounded-r-md",
    ...classNames,
  };

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={merged}
      components={{
        IconLeft: (p) => <ChevronLeft className="h-4 w-4" {...p} />,
        IconRight: (p) => <ChevronRight className="h-4 w-4" {...p} />,
      }}
      {...props}
    />
  );
}

Calendar.displayName = "Calendar";

export { Calendar };
