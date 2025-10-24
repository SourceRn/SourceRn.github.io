import { redirect } from "next/navigation";
import StudioClient from "./studio-client";

export const dynamicParams = false;


export function generateStaticParams() {
  return [{ index: [] as string[] }];
}

export const revalidate = false;

export default function StudioPage() {
  if (process.env.NODE_ENV === "production") {
    return redirect("/"); 
  }
  return <StudioClient />; 
}
