import { type NextRequest, NextResponse } from "next/server";
import { auth} from "@/lib/auth";
import { headers } from "next/headers";
 
export async function middleware(request: NextRequest) {
    const session = await auth.api.getSession({
        headers: await headers()
    });
 
	if (!session?.user) {
		return NextResponse.redirect(new URL("/", request.url));
	}
 
	return NextResponse.next();
}
 
export const config = {
	matcher: ["/dashboard", "/account", "/cart", "/checkout"],
};