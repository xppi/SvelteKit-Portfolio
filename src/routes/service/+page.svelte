<script>
</script>

<svelte:head>
	<title>AIMinds - Dienstleistungen</title>
</svelte:head>

<div class="servicesContainer">
	<div class="services">
		<h1>Dienstleistungen</h1>
		<div class="service">
			<div class="header">
				<h2>Homepage Erstellung</h2>
				<div>Homepage, Frontend, SO</div>
			</div>
			<p>
				Wir bei AIMinds bieten maßgeschneiderte Homepage-Lösungen. Unser erfahrenes Team sorgt für
				eine moderne, benutzerfreundliche und SEO-optimierte Website, die Ihr Online-Markenimage
				stärkt und Ihre Zielkunden anspricht. Kontaktieren Sie uns jetzt für eine erfolgreiche
				Homepage!
			</p>

			<a href="blog" target="_self">
				<div class="button">Jetzt Kontaktieren =></div>
			</a>
		</div>
		<div class="service">
			<div class="header">
				<h2>SEO Optimierung</h2>
				<div>Google Rankings,</div>
			</div>
			<p>
				Wir optimieren Ihre Website bei AIMinds nach den neuesten SEO-Standards. Unser erfahrenes
				Team sorgt für eine gute Sichtbarkeit und hohe Suchmaschinen-Rankings.
			</p>

			<a href="blog" target="_self">
				<div class="button">Jetzt Kontaktieren =></div>
			</a>
		</div>
		<div class="service">
			<div class="header">
				<h2>Content Erstellung</h2>
				<div>Artikel, Blog Posts, Produkt Beschreibungen</div>
			</div>
			<p>
				Wir bei AIMinds bieten professionelle Content-Erstellung, inklusive Texte, Bilder und
				Videos, an. Unser Team sorgt dafür, dass Ihre Inhalte relevant, ansprechend und auf Ihre
				Zielgruppe abgestimmt sind. Verlassen Sie sich auf uns für Ihre erfolgreiche
				Content-Erstellung!
			</p>

			<a href="blog" target="_self">
				<div class="button">Jetzt Kontaktieren =></div>
			</a>
		</div>
	</div>
</div>

<style>
	.servicesContainer {
		width: 100%;
		max-width: 900px;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		text-align: center;
	}

	a {
		text-decoration: none;
	}

	.servicesContainer .services {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 40px;
		margin-top: 30px;
	}

	h2 {
		display: flex;
	}

	.services > h1 {
		font-weight: 700;
		text-align: start;
		margin: 0;
		font-size: 36px;
	}

	.service {
		text-align: start;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		color: white;
		background: #111;
		padding: 2rem;
		width: 100%;
		border-radius: 5px;
		transition: transform 0.2s ease-in-out;
		border-radius: 25px;
	}

	.service p {
		font-weight: 100;
		color: #708090;
	}

	.services {
		width: 100%;
		margin: 50px auto;
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 1fr;
	}

	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		border: 2px solid white;
		padding: 10px;
	}

	@media (min-width: 900px) {
		.servicesContainer {
			padding: 0;
		}
		.services > h1 {
			font-size: 48px;
			margin: 0 0 50px 0;
		}

		.services {
			grid-template-columns: 1fr;
		}

		.services .service {
			min-height: 200px;
		}

		.button {
			max-width: 200px;
		}
	}

	@media (min-width: 600px) {
		.services {
			grid-template-columns: 1fr;
		}
	}
</style>
