<script lang="ts">
	import CrystalBall from './../lib/CrystalBall.svelte';

    const phoneNumber = "11235556789"
    const fortunes = [
        [9824, "A splinter is in your future."],
        [2938, "You are lucky to have lived this long."],
        [6642, "Nose hairs will become a problem."],
        [7076, "You are not illiterate."],
        [1025, "Error 404: Fortune not found"],
    ]

    function formatPhoneNumber(phoneNumber: string) {
		const cleaned = ('' + phoneNumber).replace(/\D/g, '');
		const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{4})$/);
		if (match) return `(${match[2]}) ${match[3]}-${match[4]}`;
		return phoneNumber;
	}
</script>

<div class="fixed inset-0 bg-gray-950 overflow-hidden">
    <div class="fixed inset-0 -z-50 opacity-20">
        {#each Array(100) as _}
            <div class="star" style={`--x: ${Math.random() * 100}%; --y: ${Math.random() * 100}%; --size: ${3 + Math.random() * 5}px`}></div>
        {/each}
    </div>
    
    <div class="flex flex-col gap-5 justify-center">
        <h1 class="font-sans font-bold text-gray-800 text-[8rem] uppercase text-center leading-none h-12">Find Your Fortune</h1>
        <h1 class="font-sans text-white text-[6rem] text-center leading-none z-10">
            Text <span class="font-bold text-transparent bg-gradient-to-br from-brand-orange to-brand-red bg-clip-text">{formatPhoneNumber(phoneNumber)}</span>
        </h1>
    </div>

    <div class="bg-gray-900 w-2/3 mx-auto my-10 p-5 rounded-lg border-gray-800 border-2 text-3xl text-white">
        {fortunes[0][0]}: {fortunes[0][1]}
    </div>
    {#each fortunes.slice(1) as fortune}
        <div class="bg-gray-900 w-2/3 mx-auto my-5 p-5 rounded-lg border-gray-800 border-2 text-3xl scale-[90%] text-white">{fortune[0]}: {fortune[1]}</div>
    {/each}

    <img src="hands-on-ball1.png" alt="" class="absolute h-[80%] -bottom-[20%] left-1/2 -translate-x-1/2">
    <div class="scale-75 translate-y-20">
        <div class="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[40%] w-[90vh] h-[90vh]">
            <CrystalBall />
        </div>
    </div>
</div>

<style>
    .star {
        position: absolute;
        z-index: -50;
        left: var(--x);
        top: var(--y);
        width: var(--size);
        height: var(--size);
        background-color: white;
        border-radius: var(--size);
    }
</style>