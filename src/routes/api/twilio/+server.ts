import { json } from "@sveltejs/kit";
import { fortunes } from "$lib/shared.svelte.js";
import { generateFortune, isNameSafe } from "$lib/ai";

export async function POST({ request }) {
	const payload = await request.json();

	const from = payload.From;
	const message = payload.Body;
	console.log(`Message received from ${from}: ${message}`);

	let name = message.split(/\s+/)[0];
	let numberName = false;
	const safe = await isNameSafe(name);
	// if the name is unsafe, just use the last 4 digits of the phone number
	if (!name || !safe) {
		name = from.slice(-4);
		numberName = true;
	}

	fortunes.unshift({
		name,
		numberName,
		fortune: await generateFortune(),
	});

	return json({ success: true });
}
