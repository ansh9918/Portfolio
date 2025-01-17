import React from "react";
import PropTypes from "prop-types";
import { cn } from "../utils";

const Input = React.forwardRef(
    ({ className, type = "text", ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    "sm:h-8 sm:px-2 sm:text-xs", // Small screen adjustments
                    "md:h-10 md:px-3 md:text-sm", // Medium screen adjustments
                    "lg:h-12 lg:px-4 lg:text-base", // Large screen adjustments
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);

Input.displayName = "Input";

Input.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
};

export { Input };
