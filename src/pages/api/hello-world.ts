import type { EndpointHandler } from "astro";
export const prerender = false;

// Outputs: /builtwith.json
export async function GET({ params, request }) {
  return new Response("Hello, world!");
}
