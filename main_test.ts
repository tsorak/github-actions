import { assertEquals } from "https://deno.land/std@0.180.0/testing/asserts.ts";
import { main } from "./main.ts";

Deno.test(function mainTest() {
	const result = main();
	console.log("Running main:", result);

	assertEquals(result, "Hello World!");
});
