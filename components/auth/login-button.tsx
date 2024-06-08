"use client"

import { useRouter } from "next/navigation";

interface LoginButtonProps {
    children: React.ReactElement;
    mode?: "modal" | "redirect",
    asChild?: boolean;
}


const LoginButton = ({ children, mode = "redirect", asChild }: LoginButtonProps) => {
    const router = useRouter();

    const onclick = () => {
        router.push("/auth/login")
    }

    if (mode === "modal") {
        return (
            <span>
                TODO : Implement modal
            </span>
        )
    }
    return (
        <span onClick={onclick}>{children}</span>
    )
}

export default LoginButton