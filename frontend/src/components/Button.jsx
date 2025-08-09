import { cn } from "@/lib/utils"

export function Button({ className, children, ...props }) {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2",
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}
