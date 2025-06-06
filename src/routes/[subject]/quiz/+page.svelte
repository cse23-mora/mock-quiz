<script lang='ts'>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { latexRender } from '$lib/actions/katex';

	export let data; // Loaded by +page.ts

	const { subject, questions, totalQuestions, estimatedTotalSeconds } = data;

	let currentQuestionIndex = 0;
	let selectedAnswers = new Array(totalQuestions).fill(null); // Store index of selected option
	let timeLeft = estimatedTotalSeconds;
	let timerInterval;

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

	$: currentQuestion = questions[currentQuestionIndex];
	$: progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

	function selectAnswer(optionIndex) {
		selectedAnswers[currentQuestionIndex] = optionIndex;
	}

	function nextQuestion() {
		if (currentQuestionIndex < totalQuestions - 1) {
			currentQuestionIndex++;
		} else {
			submitQuiz();
		}
	}

	function formatTime(seconds) {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
	}

	function submitQuiz() {
		clearInterval(timerInterval);
		// For now, store answers in localStorage to pass to results page
		// Later, this will be a POST request to a server endpoint for grading
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem('quizResults', JSON.stringify({
				subject: subject,
				questions: questions.map(q => q.id), // Send only question IDs
				answers: selectedAnswers,
				timeTaken: estimatedTotalSeconds - timeLeft,
				totalQuestions: totalQuestions
			}));
		}
		goto(`/${subject}/results`);
	}

	onMount(() => {
		timerInterval = setInterval(() => {
			if (timeLeft > 0) {
				timeLeft--;
			} else {
				submitQuiz();
			}
		}, 1000);

		return () => {
			clearInterval(timerInterval);
		};
	});
</script>

<div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 flex flex-col items-center p-4 sm:p-6 transition-colors duration-300">
	<div class="bg-white/80 dark:bg-slate-800/90 backdrop-blur-sm shadow-2xl rounded-2xl border border-white/20 dark:border-slate-700/50 p-6 sm:p-8 max-w-3xl w-full transition-all duration-300">
		<!-- Header Section -->
		<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
			<div>
				<h1 class="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
					{subjectDisplayableName} Quiz
				</h1>
				<p class="text-sm text-slate-600 dark:text-slate-400 mt-1">
					Test your knowledge and track your progress
				</p>
			</div>
			<div class="flex items-center gap-3 bg-red-50 dark:bg-red-900/20 px-4 py-2 rounded-xl border border-red-200 dark:border-red-800">
				<div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
				<div class="text-lg font-bold text-red-600 dark:text-red-400">
					{formatTime(timeLeft)}
				</div>
			</div>
		</div>

		<!-- Progress Section -->
		<div class="mb-8">
			<div class="flex justify-between items-center mb-3">
				<span class="text-sm font-medium text-slate-700 dark:text-slate-300">Progress</span>
				<span class="text-sm text-slate-600 dark:text-slate-400">
					{currentQuestionIndex + 1} of {totalQuestions}
				</span>
			</div>
			<div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 shadow-inner">
				<div 
					class="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-500 ease-out shadow-sm" 
					style="width: {progressPercentage}%"
				></div>
			</div>
			<div class="flex justify-between mt-2 text-xs text-slate-500 dark:text-slate-400">
				<span>Started</span>
				<span>{Math.round(progressPercentage)}% Complete</span>
				<span>Finish</span>
			</div>
		</div>

		{#if currentQuestion}
			<!-- Question Section -->
			<div class="mb-8 p-6 border border-slate-200 dark:border-slate-600 rounded-2xl bg-gradient-to-r from-slate-50 to-white dark:from-slate-700 dark:to-slate-800 shadow-sm" use:latexRender>
				<div class="flex items-start gap-4">
					<div class="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
						<span class="text-sm font-bold text-blue-600 dark:text-blue-400">
							{currentQuestionIndex + 1}
						</span>
					</div>
					<div class="flex-1">
						<h2 class="text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6 leading-relaxed" id="questionText">
							{@html currentQuestion.questionText}
						</h2>
						
						<!-- Options -->
						<ul class="space-y-3">
							{#each currentQuestion.options as option, i}
								<li>
									<button
										on:click={() => selectAnswer(i)}
										class="w-full text-left p-4 rounded-xl border-2 transition-all duration-200 group hover:scale-[1.02] hover:shadow-md
											   {selectedAnswers[currentQuestionIndex] === i
												? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-blue-500 shadow-lg shadow-blue-500/25 dark:shadow-blue-500/20'
												: 'bg-white dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-600 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-blue-300 dark:hover:border-blue-500'
											   }"
									>
										<div class="flex items-center gap-3">
											<div class="flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center
														{selectedAnswers[currentQuestionIndex] === i
															? 'border-white bg-white/20'
															: 'border-slate-300 dark:border-slate-500 group-hover:border-blue-400'
														}">
												{#if selectedAnswers[currentQuestionIndex] === i}
													<div class="w-2 h-2 bg-white rounded-full"></div>
												{/if}
											</div>
											<div class="flex-1">
												{@html option}
											</div>
										</div>
									</button>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>

			<!-- Navigation Section -->
			<div class="flex justify-between items-center">
				<div class="text-sm text-slate-500 dark:text-slate-400">
					{selectedAnswers[currentQuestionIndex] !== null ? 'Answer selected' : 'Select an answer to continue'}
				</div>
				<button
					on:click={nextQuestion}
					disabled={selectedAnswers[currentQuestionIndex] === null}
					class="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 
						   disabled:from-slate-300 disabled:to-slate-400 dark:disabled:from-slate-600 dark:disabled:to-slate-700
						   text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 
						   hover:shadow-lg hover:scale-105 disabled:hover:scale-100 disabled:hover:shadow-none
						   shadow-lg shadow-green-500/25 disabled:shadow-none
						   disabled:cursor-not-allowed disabled:text-slate-500 dark:disabled:text-slate-400"
				>
					<div class="flex items-center gap-2">
						<span>{currentQuestionIndex < totalQuestions - 1 ? 'Next Question' : 'Submit Quiz'}</span>
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
						</svg>
					</div>
				</button>
			</div>
		{:else if questions && questions.length === 0}
			<!-- Error State -->
			<div class="text-center py-12">
				<div class="w-16 h-16 mx-auto mb-4 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
					<svg class="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
					</svg>
				</div>
				<h3 class="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">No Questions Available</h3>
				<p class="text-slate-600 dark:text-slate-400 mb-6">No questions could be loaded for this quiz. Please go back and try again.</p>
				<a 
					href={`/${subject}/customize`} 
					class="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200"
				>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
					</svg>
					Back to Customization
				</a>
			</div>
		{:else}
			<!-- Loading State -->
			<div class="text-center py-12">
				<div class="w-16 h-16 mx-auto mb-4 border-4 border-blue-200 dark:border-blue-800 border-t-blue-500 dark:border-t-blue-400 rounded-full animate-spin"></div>
				<h3 class="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">Loading Questions</h3>
				<p class="text-slate-600 dark:text-slate-400">Please wait while we prepare your quiz...</p>
			</div>
		{/if}
	</div>

	<!-- Footer -->
	<div class="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
		<p>Need help? Press <kbd class="px-2 py-1 bg-slate-200 dark:bg-slate-700 rounded text-xs">?</kbd> for shortcuts</p>
	</div>
</div>

<svelte:head>
    <title>{subjectDisplayableName} Quiz</title>
</svelte:head>