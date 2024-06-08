"use cleint"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Header from "@/components/auth/header";
import { Social } from "@/components/auth/social";

interface CardWrappProps {
    children: React.ReactNode;
    headrLable: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

const CardWrapper = (
    {
        children,
        headrLable,
        backButtonHref,
        backButtonLabel,
        showSocial
    }
        : CardWrappProps
) => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                <Header label={headrLable} />
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            {
                showSocial && (
                    <CardFooter>
                        <Social />
                    </CardFooter>
                )
            }
        </Card>
    )
}

export default CardWrapper