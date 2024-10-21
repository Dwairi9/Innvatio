import * as React from "react";
import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { cn } from "@nextui-org/react";

import { ButtonWithBorderGradient } from "../../components/button-with-border-gradient.jsx";

const MultistepNavigationButtons = React.forwardRef(
    ({ className, onBack, onNext, backButtonProps, nextButtonProps, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(
                "mx-auto my-6 flex w-full items-center justify-center gap-x-4 lg:mx-0",
                className,
            )}
            {...props}
        >
            <Button
                className="rounded-medium border-default-200 text-medium font-medium text-default-500 lg:hidden"
                variant="bordered"
                onPress={onBack}
                {...backButtonProps}
            >
                <Icon icon="solar:arrow-left-outline" width={24} />
                Go Back
            </Button>

            <ButtonWithBorderGradient
                className="text-medium font-medium"
                type="submit"
                onPress={onNext}
                {...nextButtonProps}
            >
                {nextButtonProps?.children || "Sign Up for Free"}
            </ButtonWithBorderGradient>
        </div>
    ),
);

MultistepNavigationButtons.displayName = "MultistepNavigationButtons";

export default MultistepNavigationButtons;