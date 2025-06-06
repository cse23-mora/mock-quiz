import { error } from '@sveltejs/kit';

export async function load({ params, url, fetch }) {
  const subject = params.subject;
  const questionsCount = url.searchParams.get('questions') || '5'; // Default to 5 if not specified

  try {
    const response = await fetch(`/api/questions/${subject}?count=${questionsCount}`);
    if (!response.ok) {
      const errorData = await response.json();
      throw error(response.status, errorData.error || 'Failed to fetch questions');
    }
    const questions = await response.json();
    if (!questions || questions.length === 0) {
      throw error(404, `No questions found for subject '${subject}' with count ${questionsCount}. Try selecting fewer questions or check if questions exist for this subject.`);
    }

    // Estimate time: N questions * 1.5 minutes/question = total minutes
    const estimatedTotalSeconds = questions.length * 1.5 * 60;

    return {
      subject: params.subject,
      questions, // These questions do NOT have correctAnswerIndex
      totalQuestions: questions.length, // Actual number of questions received
      estimatedTotalSeconds
    };
  } catch (err) {
    // Handle errors from fetch or if questions are empty
    // SvelteKit's error function will render the nearest +error.svelte
    console.error('Load function error:', err);
    if (err.status) throw err; // Re-throw SvelteKit errors
    throw error(500, err.message || 'An unexpected error occurred while loading quiz data.');
  }
}
