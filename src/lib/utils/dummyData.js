const products = [
	{
		id: 1,
		handle: 'organic-dog-food',
		title: {
			en: 'Organic Dog Food',
			de: 'Bio-Hundefutter',
			fr: 'Nourriture bio pour chiens'
		},
		description: {
			en: 'Premium organic dog food made with natural ingredients.',
			de: 'Premium Bio-Hundefutter aus natürlichen Zutaten.',
			fr: 'Nourriture bio premium pour chiens, fabriquée avec des ingrédients naturels.'
		},
		images: ['https://www.dogchef.com/wp-content/uploads/2023/01/565A6930-1536x1024.jpg'],
		price: 25.0,
		currency: '€',
		tags: ['bestseller']
	},
	{
		id: 2,
		handle: 'organic-puppy-food',
		title: {
			en: 'Organic Puppy Food',
			de: 'Bio-Katzenfutter',
			fr: 'Nourriture bio pour chiots'
		},
		description: {
			en: 'Healthy organic cat food for your feline friends.',
			de: 'Gesundes Bio-Katzenfutter für Ihre Katzenfreunde.',
			fr: 'Nourriture bio saine pour vos amis félins.'
		},
		images: ['https://www.dogchef.com/wp-content/uploads/2023/01/565A6930-1536x1024.jpg'],
		price: 20.0,
		currency: '€',
		tags: ['bestseller']
	},
	{
		id: 3,
		handle: 'organic-senior-dog-food',
		title: {
			en: 'Organic Senior Dog Food',
			de: 'Bio-Vogelfutter',
			fr: 'Nourriture bio pour chiens âgés'
		},
		description: {
			en: 'Nutritious organic bird seed for all bird species.',
			de: 'Nahrhaftes Bio-Vogelfutter für alle Vogelarten.',
			fr: 'Graines bio nutritives pour toutes les espèces d’oiseaux.'
		},
		images: ['https://www.dogchef.com/wp-content/uploads/2023/01/565A6930-1536x1024.jpg'],
		price: 15.0,
		currency: '€',
		tags: []
	},
	{
		id: 4,
		handle: 'grain-free-dog-food',
		title: {
			en: 'Grain-Free Dog Food',
			de: 'Getreidefreies Hundefutter',
			fr: 'Nourriture sans céréales pour chiens'
		},
		description: {
			en: 'Delicious grain-free dog food for sensitive stomachs.',
			de: 'Leckeres getreidefreies Hundefutter für empfindliche Mägen.',
			fr: 'Délicieuse nourriture sans céréales pour chiens aux estomacs sensibles.'
		},
		images: ['https://www.dogchef.com/wp-content/uploads/2023/01/565A6930-1536x1024.jpg'],
		price: 30.0,
		currency: '€',
		tags: ['grain-free']
	},
	{
		id: 5,
		handle: 'high-protein-dog-food',
		title: {
			en: 'High-Protein Dog Food',
			de: 'Proteinreiches Hundefutter',
			fr: 'Nourriture riche en protéines pour chiens'
		},
		description: {
			en: 'High-protein dog food for active and energetic dogs.',
			de: 'Proteinreiches Hundefutter für aktive und energiegeladene Hunde.',
			fr: 'Nourriture riche en protéines pour chiens actifs et énergiques.'
		},
		images: ['https://www.dogchef.com/wp-content/uploads/2023/01/565A6930-1536x1024.jpg'],
		price: 35.0,
		currency: '€',
		tags: ['high-protein']
	},
	{
		id: 6,
		handle: 'puppy-starter-kit',
		title: {
			en: 'Puppy Starter Kit',
			de: 'Welpen-Starterpaket',
			fr: 'Kit de démarrage pour chiots'
		},
		description: {
			en: 'A complete starter kit for your new puppy.',
			de: 'Ein komplettes Starterpaket für Ihren neuen Welpen.',
			fr: 'Un kit de démarrage complet pour votre nouveau chiot.'
		},
		images: ['https://www.dogchef.com/wp-content/uploads/2023/01/565A6930-1536x1024.jpg'],
		price: 50.0,
		currency: '€',
		tags: ['starter-kit']
	},
	{
		id: 7,
		handle: 'senior-dog-health',
		title: {
			en: 'Senior Dog Health Food',
			de: 'Senioren-Hundefutter',
			fr: 'Nourriture santé pour chiens âgés'
		},
		description: {
			en: 'Specially formulated food for senior dogs.',
			de: 'Speziell formuliertes Futter für ältere Hunde.',
			fr: 'Nourriture spécialement formulée pour chiens âgés.'
		},
		images: ['https://www.dogchef.com/wp-content/uploads/2023/01/565A6930-1536x1024.jpg'],
		price: 28.0,
		currency: '€',
		tags: ['senior']
	},
	{
		id: 8,
		handle: 'weight-control-dog-food',
		title: {
			en: 'Weight Control Dog Food',
			de: 'Gewichtskontroll-Hundefutter',
			fr: 'Nourriture pour chiens pour le contrôle du poids'
		},
		description: {
			en: 'Helps maintain a healthy weight for your dog.',
			de: 'Hilft, ein gesundes Gewicht für Ihren Hund zu halten.',
			fr: 'Aide à maintenir un poids santé pour votre chien.'
		},
		images: ['https://www.dogchef.com/wp-content/uploads/2023/01/565A6930-1536x1024.jpg'],
		price: 27.0,
		currency: '€',
		tags: ['weight-control']
	},
	{
		id: 9,
		handle: 'organic-kitten-food',
		title: {
			en: 'Organic Kitten Food',
			de: 'Bio-Kittenfutter',
			fr: 'Nourriture bio pour chatons'
		},
		description: {
			en: 'Premium organic food for growing kittens.',
			de: 'Premium Bio-Futter für wachsende Kätzchen.',
			fr: 'Nourriture bio premium pour chatons en croissance.'
		},
		images: ['https://www.mamavation.com/wp-content/uploads/2022/11/best-natural-organic-cat-food-brands.jpg.webp'],
		price: 22.0,
		currency: '€',
		tags: ['organic']
	},
	{
		id: 10,
		handle: 'grain-free-cat-food',
		title: {
			en: 'Grain-Free Cat Food',
			de: 'Getreidefreies Katzenfutter',
			fr: 'Nourriture sans céréales pour chats'
		},
		description: {
			en: 'Delicious grain-free food for cats with sensitive stomachs.',
			de: 'Leckeres getreidefreies Futter für Katzen mit empfindlichem Magen.',
			fr: 'Délicieuse nourriture sans céréales pour chats aux estomacs sensibles.'
		},
		images: ['https://www.mamavation.com/wp-content/uploads/2022/11/best-natural-organic-cat-food-brands.jpg.webp'],
		price: 26.0,
		currency: '€',
		tags: ['grain-free']
	},
	{
		id: 11,
		handle: 'high-protein-cat-food',
		title: {
			en: 'High-Protein Cat Food',
			de: 'Proteinreiches Katzenfutter',
			fr: 'Nourriture riche en protéines pour chats'
		},
		description: {
			en: 'High-protein food for active and energetic cats.',
			de: 'Proteinreiches Futter für aktive und energiegeladene Katzen.',
			fr: 'Nourriture riche en protéines pour chats actifs et énergiques.'
		},
		images: ['https://www.mamavation.com/wp-content/uploads/2022/11/best-natural-organic-cat-food-brands.jpg.webp'],
		price: 30.0,
		currency: '€',
		tags: ['high-protein']
	},
	{
		id: 12,
		handle: 'senior-cat-health',
		title: {
			en: 'Senior Cat Health Food',
			de: 'Senioren-Katzenfutter',
			fr: 'Nourriture santé pour chats âgés'
		},
		description: {
			en: 'Specially formulated food for senior cats.',
			de: 'Speziell formuliertes Futter für ältere Katzen.',
			fr: 'Nourriture spécialement formulée pour chats âgés.'
		},
		images: ['https://www.mamavation.com/wp-content/uploads/2022/11/best-natural-organic-cat-food-brands.jpg.webp'],
		price: 28.0,
		currency: '€',
		tags: ['senior']
	},
	{
		id: 13,
		handle: 'weight-control-cat-food',
		title: {
			en: 'Weight Control Cat Food',
			de: 'Gewichtskontroll-Katzenfutter',
			fr: 'Nourriture pour chats pour le contrôle du poids'
		},
		description: {
			en: 'Helps maintain a healthy weight for your cat.',
			de: 'Hilft, ein gesundes Gewicht für Ihre Katze zu halten.',
			fr: 'Aide à maintenir un poids santé pour votre chat.'
		},
		images: ['https://www.mamavation.com/wp-content/uploads/2022/11/best-natural-organic-cat-food-brands.jpg.webp'],
		price: 25.0,
		currency: '€',
		tags: ['weight-control']
	},
	{
		id: 14,
		handle: 'indoor-cat-food',
		title: {
			en: 'Indoor Cat Food',
			de: 'Katzenfutter für Wohnungskatzen',
			fr: 'Nourriture pour chats d’intérieur'
		},
		description: {
			en: 'Specially designed for indoor cats.',
			de: 'Speziell für Wohnungskatzen entwickelt.',
			fr: 'Conçu spécialement pour les chats d’intérieur.'
		},
		images: ['https://www.mamavation.com/wp-content/uploads/2022/11/best-natural-organic-cat-food-brands.jpg.webp'],
		price: 24.0,
		currency: '€',
		tags: ['indoor']
	},
	{
		id: 15,
		handle: 'kitten-starter-kit',
		title: {
			en: 'Kitten Starter Kit',
			de: 'Kitten-Starterpaket',
			fr: 'Kit de démarrage pour chatons'
		},
		description: {
			en: 'A complete starter kit for your new kitten.',
			de: 'Ein komplettes Starterpaket für Ihr neues Kätzchen.',
			fr: 'Un kit de démarrage complet pour votre nouveau chaton.'
		},
		images: ['https://www.mamavation.com/wp-content/uploads/2022/11/best-natural-organic-cat-food-brands.jpg.webp'],
		price: 45.0,
		currency: '€',
		tags: ['starter-kit']
	},
	{
		id: 16,
		handle: 'hairball-control-cat-food',
		title: {
			en: 'Hairball Control Cat Food',
			de: 'Haarballenkontroll-Katzenfutter',
			fr: 'Nourriture pour chats anti-boules de poils'
		},
		description: {
			en: 'Helps reduce hairballs in cats.',
			de: 'Hilft, Haarballen bei Katzen zu reduzieren.',
			fr: 'Aide à réduire les boules de poils chez les chats.'
		},
		images: ['https://www.mamavation.com/wp-content/uploads/2022/11/best-natural-organic-cat-food-brands.jpg.webp'],
		price: 29.0,
		currency: '€',
		tags: ['hairball-control']
	}
];

export default products;
