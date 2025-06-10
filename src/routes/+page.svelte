<script lang='ts'>
	export let data;
	const subjects = data.subjects;

</script>

<div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 p-4 sm:p-6 flex flex-col items-center justify-center transition-colors duration-300">
	<div class="bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm shadow-2xl rounded-2xl border border-white/20 dark:border-slate-700/50 p-6 sm:p-8 max-w-md w-full transition-all duration-300">
		
		<!-- Header Section -->
		<div class="text-center mb-8">
			<div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4 shadow-lg">
				<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
				</svg>
			</div>
			<h1 class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-2">
				CSE 23 ByteQuiz
			</h1>
			<h2 class="text-xl font-medium text-slate-600 dark:text-slate-300">
				Choose a Subject
			</h2>
		</div>

		<!-- Subject List -->
		<div class="space-y-4">
			{#each subjects as subject}
				<a
					href={`/${subject.slug}/customize`}
					class="group block w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-4 px-6 rounded-xl text-center transition-all duration-200 hover:shadow-lg hover:scale-105 shadow-lg shadow-blue-500/25 relative overflow-hidden"
				>
					<!-- Decorative elements -->
					<div class="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-300"></div>
					<div class="absolute bottom-0 left-0 w-12 h-12 bg-white/10 rounded-full translate-y-6 -translate-x-6 group-hover:scale-150 transition-transform duration-300"></div>
					
					<!-- Content -->
					<div class="relative z-10 flex items-center justify-center gap-3">
						<svg class="w-5 h-5 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
						</svg>
						<span>{subject.name}</span>
						<svg class="w-4 h-4 opacity-60 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
						</svg>
					</div>
				</a>
			{/each}
		</div>

		<!-- Footer -->
		<div class="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
			<p class="text-center text-sm text-slate-500 dark:text-slate-400">
				Select a subject to begin your quiz journey
			</p>
		</div>
	</div>
</div>