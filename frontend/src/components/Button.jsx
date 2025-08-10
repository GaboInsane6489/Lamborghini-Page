import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function Button({ className, children, ...props }) {
    return (
        <motion.button
            initial={{ opacity: 0, x: -50, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn(
                "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2",
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    )
}

