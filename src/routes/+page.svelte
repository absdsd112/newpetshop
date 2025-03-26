<script>
	import ProductList from '$lib/components/ProductList/ProductList.svelte';
	import { t } from '$lib/i18n/i18n.js';

	export let data;
	const products = data.props.products;
	const besteller = products.filter((product) => product.tags.includes('bestseller'));
</script>

<div class="text-center bg-beige">
	<div
		class="p-80 text-4xl w-screen text-white font-snack tracking-wider bg-blue-400"
		style="background-image: url('https://www.pixelstalk.net/wp-content/uploads/wallpapers/dog-and-cat-cocker-spaniel-puppy-small-ginger-kitten-kiss.jpg'); background-size: cover; background-position: center;"
	>
		<div class="bg-gray-800 bg-opacity-20 p-4 inline-block rounded">
			Love Starts with Fresh healthy Food
			<br />
			<br />
			and Grows with Every Moment Together
		</div>
	</div>
	<div class="pt-8">
		<div class="text-2xl">{$t('home.bestseller_title')}</div>
		<ProductList products={besteller} />
	</div>
	<div class="pt-16">
		<div class="text-3xl font-bold mb-8">The Reasons of Choosing Us</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div class="text-center">
				<img src="/meat.png" alt="Meat Icon" class="mx-auto mb-4" />
				<div class="font-bold text-2xl">Meat As Numbers #1</div>
				<br />
				<p class="text-lg">The Most Important Thing In A Carnivore’s Life, 
					<br />
					Next To His Family, Is Meat. It’s Exactly 
					<br />
					What He Needs For A Supple Digestive Process.</p>
			</div>
			<div class="text-center">
				<img src="/factory.png" alt="Factory Icon" class="mx-auto mb-4" />
				<div class="font-bold text-2xl">Local Productions</div>
				<br />
				<p class="text-lg">Our Products Are Locally Produced 
					<br />
					In Our Own Factory In Veldhoven. 
					<br />
					Full Of Virtuous Ingredients. 
					<br />
					That’s Something To Be Truly Proud Of!</p>
			</div>
			<div class="text-center">
				<img src="/Happy-dog.png" alt="Dog Icon" class="mx-auto mb-4" />
				<div class="font-bold text-2xl">Better Flavour For Pets</div>
				<br />
				<p class="text-lg">Thanks To 50 Years Of Knowledge 
					<br />
					And Craft, We Know Exactly What 
					<br />
					Makes Your Dog Truly Happy.</p>
			</div>
			<div class="text-center">
				<img src="/leaf.png" alt="Leaf Icon" class="mx-auto mb-4" />
				<div class="font-bold text-2xl">Organic Products</div>
				<br />
				<p class="text-lg">We Make Sure Our Sourcing 
					<br />
				Of Raw Materials Is Organic.</p>
			</div>
			<br />
		</div>
	</div>
</div>

<style>
	.bg-beige {
		background-color: beige;
	}
</style>
