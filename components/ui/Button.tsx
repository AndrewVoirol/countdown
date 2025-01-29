import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"

const Button = React.forwardRef<React.ComponentProps<"button", {}>>(({
  asChild,
  children,
  ...props
}, ref) => {
  const Label = LabelPrimitive.forwardRef<React.ComponentProps<typeof LabelPrimitive.Root, {}>>((props, ref) => {
    return <LabelPrimitive.Root {...props} />
  })
  return (
    <button
      className={cn("bg-primary-foreground hover:bg-primary-foreground/50 text-primary-foreground/90 rounded-full")}
      {...props}
      ref={ref}
    >
      {children}
      {Label}
    </button>
  )
})
Button.displayName = "Button"

export { Button }
