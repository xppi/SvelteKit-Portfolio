<script>
	import skills from '$lib/Skills';
</script>

<svelte:head>
	<title>AIMinds — Über Uns</title>
</svelte:head>

<div class="container">
	<main>
		<h1>Über Uns</h1>
		<p>
			Wir sind AIMinds, eine innovative Werbeagentur aus Wipperfürth. Als Full-Service-Anbieter
			bieten wir alles, was Sie für eine erfolgreiche Online-Präsenz benötigen. Von der Erstellung
			von Homepages über die Programmierung von Apps bis hin zur Optimierung von Bezahlprozessen und
			dem Einsatz neuester Kassensysteme und Kryptowährungen - bei uns sind Sie in den besten
			Händen. Unser Team aus erfahrenen Designern und Programmierern sorgt dafür, dass Ihr
			Online-Auftritt modern, benutzerfreundlich und ansprechend gestaltet ist. Auch im Bereich
			Grafikdesign und Druck bieten wir Ihnen ein breites Spektrum an Leistungen an. Eines unserer
			besonderen Stärken ist das Thema SEO und Google Rankings. Wir sorgen dafür, dass Ihre Website
			gut sichtbar ist und von Ihren Zielkunden gefunden wird. Vertrauen Sie auf unsere Expertise
			und lassen Sie uns gemeinsam Ihr Online-Business auf die nächste Stufe bringen!
		</p>
		<h2>Skills</h2>
		{#each Object.entries(skills) as [section, technologies]}
			<ul>
				<li>
					<h4>
						{section}:
					</h4>
					<div class="list">
						{#each technologies as technology}
							<div>
								{technology}
							</div>
						{/each}
					</div>
				</li>
			</ul>
		{/each}
	</main>
</div>

<style>
	.container {
		max-width: 900px;
		padding: 0;
		display: flex;
		justify-content: center;
	}

	main {
		max-width: 100%;
		min-height: 500px;
		text-align: left;
		margin: 0 auto;
		box-sizing: border-box;
	}

	h1 {
		font-weight: 700;
		margin: 0 0 50px 0;
		font-size: 36px;
		text-align: start;
	}

	h2 {
		margin-top: 50px;
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	@media (min-width: 900px) {
		.list {
			flex-direction: row;
		}
		main > h1 {
			font-size: 48px;
		}
	}
</style>
