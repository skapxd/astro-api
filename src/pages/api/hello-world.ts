import type { EndpointHandler } from "astro";
export const prerender = false;

// Outputs: /builtwith.json
export async function GET(props: any) {
  console.log({ props });
  const random = Math.random();
  return new Response(`Hello, world! ${random}`);
}
