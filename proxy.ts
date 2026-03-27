import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
    const token = request.cookies.get("token")?.value;

    if (!token) {
        return NextResponse.redirect(new URL("/registro/iniciosesion", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/User/:path*", "/Admin/:path*"],
};
