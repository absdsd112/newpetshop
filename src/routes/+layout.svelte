<script>
	import '../app.css';
	import AppBar from '$lib/components/AppBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { Cart } from '../stores/Cart.js';
	import { onMount } from 'svelte';
	import { init } from 'svelte-i18n';
	import { browser } from '$app/environment';
	import Banner from '$lib/components/Banner.svelte';
	import LogoBanner from '$lib/components/LogoBanner.svelte';
	let cart;

	export const prerender = true;

	onMount(async () => {
		// get cart details from localStorage
		console.log('get cart details from localStorage');
		cart = JSON.parse(localStorage.getItem('cart'));
		if (cart) {
			Cart.set(cart);
			console.log('cartItems');
			console.log(cart);
		}
	});

	// init language
	init({
		fallbackLocale: 'de',
		initialLocale: 'de'
	});
</script>

<header>
	<Banner message="Get 15% off for your first order ! Using the code SURPRISE" />
	<LogoBanner />
	<AppBar />
</header>
<main>
	<slot />
</main>
<footer>
	<Footer />
</footer>
