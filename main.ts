export function main(): string {
	return "Hello Deno!";
}

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
	console.log("Running main:", main());
}
