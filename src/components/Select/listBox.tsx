import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import classNames from "classnames";

export const ListBox = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      align="start" // ✅ Ensures dropdown aligns with input
      className={classNames(
        "absolute z-50 w-full rounded-xl border border-grey-200 bg-white shadow-lg",
        "mt-1 max-h-60 overflow-y-auto transition-all duration-200",
        className
      )}
      {...props}
    >
      <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
ListBox.displayName = "ListBox";