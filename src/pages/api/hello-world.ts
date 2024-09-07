import type { EndpointHandler } from "astro";
export const prerender = false;

// Outputs: /builtwith.json
export async function GET(props: any) {
  console.log({ props });

  return new Response("Hello, world!");
}
