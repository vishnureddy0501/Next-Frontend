import { NextResponse } from "next/server"
export default function checkThemeCookie(request) {
    console.log("middleware");
    const response = NextResponse.next();
    if(!request.cookies.get("theme")) {
        response.cookies.set("theme", "white");
    }
    response.headers.set("custom-header", "custom-value");
    return response;
}