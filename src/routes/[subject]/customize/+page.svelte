<script lang='ts'>
	// Get subject from route params (already available via load function's return 'data.subject')
	// However, using $page.params.subject is also common in components.
	// The load function already provides 'subject' in the 'data' prop.
	export let data;
	const subject = data.subject;

	// Give subject a more readable name
	let subjectDisplayableName = '';
	if (subject === 'dsa') {
		subjectDisplayableName = 'Data Structures and Algorithms';
	} else if (subject === 'pc') {
		subjectDisplayableName = 'Program Construction';
	} else if (subject === 'toe') {
		subjectDisplayableName = 'Theory of Electricity';
	} else {
		subjectDisplayableName = 'Unknown Subject';
	}

	let numQuestions = 10; // Default number of questions
	const timePerQuestion = 1.5; // Minutes

	$: estimatedTime = numQuestions * timePerQuestion; // Reactive statement for estimated time

	// Function to handle starting the quiz (for now, just navigates)
	function startQuiz() {
		// Later, this will involve passing numQuestions to the quiz page, perhaps via query params or a store
		window.location.href = `/${subject}/quiz?questions=${numQuestions}`;
	}
</script>

<svelte:head>
	<title>Quiz Customization - {subjectDisplayableName}</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 p-4 sm:p-6 flex flex-col items-center justify-center transition-colors duration-300">
	<div class="bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm shadow-2xl rounded-2xl border border-white/20 dark:border-slate-700/50 p-6 sm:p-8 max-w-lg w-full transition-all duration-300">
		
		<!-- Header Section -->
		<div class="text-center mb-8">
			<div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4 shadow-lg">
				<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
				</svg>
			</div>
			<h1 class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-2">
				Quiz Customization
			</h1>
			<h2 class="text-xl font-medium text-slate-600 dark:text-slate-300">
				Subject: {subjectDisplayableName}
			</h2>
		</div>

		<!-- Customization Form -->
		<div class="space-y-6 mb-8">
			<!-- Number of Questions Input -->
			<div class="space-y-3">
				<label for="numQuestions" class="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300">
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
					</svg>
					Number of Questions:
				</label>
				<div class="relative">
					<input
						type="number"
						id="numQuestions"
						bind:value={numQuestions}
						min="1"
						max="50"
						class="w-full px-4 py-3 bg-white/50 dark:bg-slate-700/50 border-2 border-slate-200 dark:border-slate-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-200 text-slate-800 dark:text-slate-200 placeholder-slate-500 dark:placeholder-slate-400"
						placeholder="Enter number of questions"
					/>
					<div class="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 dark:text-slate-500">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
						</svg>
					</div>
				</div>
				<p class="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
					<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
					</svg>
					Choose between 1-50 questions
				</p>
			</div>

			<!-- Estimated Time Display -->
			<div class="p-4 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-700/50 dark:to-slate-600/50 rounded-xl border border-slate-200 dark:border-slate-600">
				<div class="flex items-center gap-3">
					<div class="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
						<svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
						</svg>
					</div>
					<div>
						<p class="text-sm font-medium text-slate-700 dark:text-slate-300">
							Estimated Time
						</p>
						<p class="text-lg font-bold text-blue-600 dark:text-blue-400">
							{estimatedTime} minutes
						</p>
						<p class="text-xs text-slate-500 dark:text-slate-400">
							Based on {numQuestions} questions at 1.5 min each
						</p>
					</div>
				</div>
			</div>
		</div>

		<!-- Action Buttons -->
		<div class="space-y-4">
			<!-- Start Quiz Button -->
			<button
				on:click={startQuiz}
				class="group w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-4 px-6 rounded-xl text-center transition-all duration-200 hover:shadow-lg hover:scale-105 shadow-lg shadow-green-500/25 relative overflow-hidden"
			>
				<!-- Decorative elements -->
				<div class="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-300"></div>
				<div class="absolute bottom-0 left-0 w-12 h-12 bg-white/10 rounded-full translate-y-6 -translate-x-6 group-hover:scale-150 transition-transform duration-300"></div>
				
				<!-- Content -->
				<div class="relative z-10 flex items-center justify-center gap-3">
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
					</svg>
					<span class="text-lg">Start Quiz</span>
					<svg class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
					</svg>
				</div>
			</button>

			<!-- Back Link -->
			<div class="text-center pt-4 border-t border-slate-200 dark:border-slate-700">
				<a 
					href="/" 
					class="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group"
				>
					<svg class="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
					</svg>
					Back to Subject Selection
				</a>
			</div>
		</div>
	</div>
</div>