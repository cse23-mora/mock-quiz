import { json } from '@sveltejs/kit';
import {pc } from '../../../../data/pc';
import { dsa } from '../../../../data/dsa';
import { toe } from '../../../../data/toe';

// Helper function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export async function GET({ params, url }) {
  const subject = params.subject;
  const requestedCount = parseInt(url.searchParams.get('count') || '10');

  try {
    let allQuestions;
    switch (subject) {
      case 'dsa':
        allQuestions = dsa;
        break;
      case 'toe':
        allQuestions = toe;
        break;
      case 'pc':
        allQuestions = pc;
        break;
      default:
        return json({ error: 'Invalid subject' }, { status: 400 });
    }

    const shuffledQuestions = shuffleArray([...allQuestions]);
    const selectedQuestions = shuffledQuestions.slice(0, requestedCount);

    const questionsForClient = selectedQuestions.map(({ correctAnswerIndex, explanation, ...rest }) => rest);

    if (questionsForClient.length === 0 && allQuestions.length > 0 && requestedCount > 0) {
      return json({ error: 'No questions available for the selected criteria, or requested too many.' }, { status: 404 });
    }

    if (questionsForClient.length < requestedCount && questionsForClient.length < allQuestions.length) {
      console.warn(`Requested ${requestedCount} questions for ${subject}, but only ${questionsForClient.length} were available.`);
    }

    return json(questionsForClient);

  } catch (error) {
    console.error('Error loading question module:', error);
    return json({ error: `Question data for subject '${subject}' not found or failed to load.` }, { status: 404 });
  }
}
