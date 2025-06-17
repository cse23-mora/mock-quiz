<script lang='ts'>
	import { onMount } from 'svelte';
	import { processLatexInText } from "$lib/latex";

	export let data; // From +page.ts (contains subject, subjectDisplayableName)
	const { subject, subjectDisplayableName } = data;

	let quizResults = null; // To store { grade, reviewData, totalQuestions, correctCount }
	let isLoading = true;
	let error = null;

	onMount(async () => {
		const storedDataString = localStorage.getItem('quizResults');
		if (!storedDataString) {
			error = "No quiz data found. Please complete a quiz first.";
			isLoading = false;
			// Optionally redirect: goto(`/${subject}/customize`);
			return;
		}

		localStorage.removeItem('quizResults'); // Clear after retrieving

		try {
			const {
				questions: questionIds, // Array of question IDs
				answers, // Array of user's selected answer indices
				timeTaken, // We might display this later
				totalQuestions: submittedTotalQuestions // Count from submission
			} = JSON.parse(storedDataString);

			if (!questionIds || !answers || questionIds.length !== answers.length) {
				throw new Error("Invalid or corrupted quiz data in local storage.");
			}

			const response = await fetch(`/api/submitquiz/${subject}`, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ questionIds, answers })
			});

			if (!response.ok) {
				const errData = await response.json();
				throw new Error(errData.error || `Failed to submit quiz: ${response.statusText}`);
			}

			quizResults = await response.json();
		} catch (e) {
			console.error("Error processing results:", e);
			error = e.message || "An error occurred while fetching your results.";
		} finally {
			isLoading = false;
		}
	});

	// Calculate performance metrics
	$: performanceLevel = quizResults ? 
		quizResults.grade >= 90 ? 'excellent' :
		quizResults.grade >= 80 ? 'good' :
		quizResults.grade >= 70 ? 'average' :
		quizResults.grade >= 60 ? 'below-average' : 'poor'
		: null;

	$: gradeColor = performanceLevel === 'excellent' ? 'from-green-500 to-emerald-500' :
		performanceLevel === 'good' ? 'from-blue-500 to-indigo-500' :
		performanceLevel === 'average' ? 'from-yellow-500 to-orange-500' :
		performanceLevel === 'below-average' ? 'from-orange-500 to-red-500' :
		'from-red-500 to-red-600';
</script>

<svelte:head>
    <title>Quiz Results - {subjectDisplayableName}</title>
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 p-4 sm:p-6 flex flex-col items-center transition-colors duration-300">
	<div class="bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm shadow-2xl rounded-2xl border border-white/20 dark:border-slate-700/50 p-6 sm:p-8 max-w-4xl w-full transition-all duration-300">
		
		<!-- Header Section -->
		<div class="text-center mb-8">
			<div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mb-4 shadow-lg">
				<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
				</svg>
			</div>
			<h1 class="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-2">
				Quiz Results
			</h1>
			<h2 class="text-xl font-medium text-slate-600 dark:text-slate-300">
				{subjectDisplayableName}
			</h2>
		</div>

		{#if isLoading}
			<!-- Loading State -->
			<div class="text-center py-16">
				<div class="w-16 h-16 mx-auto mb-6 border-4 border-blue-200 dark:border-blue-800 border-t-blue-500 dark:border-t-blue-400 rounded-full animate-spin"></div>
				<h3 class="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">Processing Your Results</h3>
				<p class="text-slate-600 dark:text-slate-400">Please wait while we calculate your score...</p>
			</div>
		{:else if error}
			<!-- Error State -->
			<div class="text-center py-16">
				<div class="w-16 h-16 mx-auto mb-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
					<svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
					</svg>
				</div>
				<h3 class="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">Oops! Something went wrong</h3>
				<p class="text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto">{error}</p>
				<a 
					href="/" 
					class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-105"
				>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
					</svg>
					Go to Homepage
				</a>
			</div>
		{:else if quizResults}
			<!-- Results Display -->
			
			<!-- Grade Card -->
			<div class="mb-10 p-8 bg-gradient-to-r {gradeColor} rounded-2xl text-white shadow-xl relative overflow-hidden">
				<div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
				<div class="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
				<div class="relative z-10 text-center">
					<h3 class="text-4xl sm:text-5xl font-bold mb-2">
						{quizResults.grade.toFixed(1)}%
					</h3>
					<p class="text-xl opacity-90 mb-4">
						{quizResults.correctCount} out of {quizResults.totalQuestions} questions correct
					</p>
					<div class="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
						{#if performanceLevel === 'excellent'}
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
							</svg>
							<span class="font-medium">Excellent Work!</span>
						{:else if performanceLevel === 'good'}
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
							</svg>
							<span class="font-medium">Good Job!</span>
						{:else if performanceLevel === 'average'}
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
							</svg>
							<span class="font-medium">Keep Practicing!</span>
						{:else}
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
							</svg>
							<span class="font-medium">Room for Improvement</span>
						{/if}
					</div>
				</div>
			</div>

			<!-- Review Section -->
			<div class="mb-8">
				<div class="flex items-center gap-3 mb-6">
					<div class="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
						<svg class="w-5 h-5 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
						</svg>
					</div>
					<h3 class="text-2xl font-bold text-slate-800 dark:text-slate-100">Review Your Answers</h3>
				</div>

				<div class="space-y-6">
					{#each quizResults.reviewData as item, index (item.id)}
						<div class="border-2 border-slate-200 dark:border-slate-600 rounded-2xl p-6 bg-white dark:bg-slate-800 shadow-sm hover:shadow-md transition-shadow duration-200">
							
							<!-- Question Header -->
							<div class="flex items-start gap-4 mb-6">
								<div class="flex-shrink-0 w-10 h-10 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
									<span class="text-sm font-bold text-slate-700 dark:text-slate-300">
										{index + 1}
									</span>
								</div>
								<div class="flex-1">
									<p class="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3">
										Question {index + 1}
									</p>
									<div class="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
										{@html processLatexInText(item.questionText)}
									</div>
								</div>
								<div class="flex-shrink-0">
									{#if item.isCorrect}
										<div class="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
											<svg class="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
												<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
											</svg>
										</div>
									{:else}
										<div class="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
											<svg class="w-5 h-5 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
												<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
											</svg>
										</div>
									{/if}
								</div>
							</div>

							<!-- Your Answer -->
							<div class="mb-4">
								<p class="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
									</svg>
									Your Answer:
								</p>
								<div class="p-4 rounded-xl border-2 bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400">
									{#if item.userAnswerIndex !== null && item.options[item.userAnswerIndex]}
										<div class="prose prose-sm max-w-none">
											{@html processLatexInText(item.options[item.userAnswerIndex])}
										</div>
									{:else if item.userAnswerIndex === null}
										<span class="italic">Not answered</span>
									{:else}
										<span class="italic">Invalid answer recorded</span>
									{/if}
								</div>
							</div>

							<!-- Correct Answer (if wrong) -->
							{#if !item.isCorrect}
								<div class="mb-4">
									<p class="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
										<svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
										</svg>
										Correct Answer:
									</p>
									<div class="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800">
										{#if item.options[item.correctAnswerIndex]}
											<div class="prose prose-sm max-w-none text-green-800 dark:text-green-200">
												{@html processLatexInText(item.options[item.correctAnswerIndex])}
											</div>
										{:else}
											<span class="italic text-green-700 dark:text-green-300">Correct answer data missing</span>
										{/if}
									</div>
								</div>
							{/if}

							<!-- Explanation -->
							<div>
								<p class="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
									</svg>
									Explanation:
								</p>
								<div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600">
									{#if item.explanation}
										<div class="prose prose-sm prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
											{@html processLatexInText(item.explanation)}
										</div>
									{:else}
										<span class="italic text-slate-600 dark:text-slate-400">No explanation available.</span>
									{/if}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Action Buttons -->
			<div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 border-t border-slate-200 dark:border-slate-700">
				<a 
					href={`/${subject}/customize`} 
					class="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-105 shadow-lg shadow-blue-500/25"
				>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
					</svg>
					Try Another Quiz
				</a>
				<a 
					href="/" 
					class="inline-flex items-center gap-2 bg-slate-500 hover:bg-slate-600 dark:bg-slate-600 dark:hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:scale-105"
				>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5a2 2 0 012-2h2a2 2 0 012 2v2H8V5z"></path>
					</svg>
					Choose Different Subject
				</a>
			</div>
		{:else}
			<!-- No Results State -->
			<div class="text-center py-16">
				<div class="w-16 h-16 mx-auto mb-6 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center">
					<svg class="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
					</svg>
				</div>
				<h3 class="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">No Results Available</h3>
				<p class="text-slate-600 dark:text-slate-400">No results to display at this time.</p>
			</div>
		{/if}
	</div>
</div>