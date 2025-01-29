import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cn } from "@/lib/utils"

const Label = React.forwardRef<React.ComponentProps<typeof LabelPrimitive.Root>>(({
  className,
  ...props
}, ref) => {
  return <LabelPrimitive.Root className={cn("text-sm font-medium text-muted-foreground", className)} ref={ref} {...props} />
})
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
