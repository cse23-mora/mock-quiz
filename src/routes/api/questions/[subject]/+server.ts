import { json } from '@sveltejs/kit';
import fs from 'fs/promises'; // Using fs/promises for async file reading
import path from 'path';

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

  const validSubjects = ['dsa', 'pc', 'toe'];
  if (!validSubjects.includes(subject)) {
    return json({ error: 'Invalid subject' }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), 'questions', `${subject}.json`);

  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const allQuestions = JSON.parse(fileContent);

    // Shuffle all questions for randomization
    const shuffledQuestions = shuffleArray([...allQuestions]);

    // Select the requested number of questions
    const selectedQuestions = shuffledQuestions.slice(0, requestedCount);

    // IMPORTANT: Remove correctAnswerIndex and explanation before sending to client for the quiz
    const questionsForClient = selectedQuestions.map(q => {
      const { correctAnswerIndex, explanation, ...rest } = q; // Destructure to omit fields
      return rest; // Return only id, questionText, and options
    });

    if (questionsForClient.length === 0 && allQuestions.length > 0 && requestedCount > 0) {
        // This case might happen if requestedCount is valid but somehow slicing results in empty
        // Or if allQuestions was empty to begin with
        return json({ error: 'No questions available for the selected criteria, or requested too many.' }, { status: 404 });
    }

    if (questionsForClient.length < requestedCount && questionsForClient.length < allQuestions.length) {
      // If we couldn't fulfill the full request, but had some questions
      // Inform the client, but still send what we have.
      // This part can be refined based on desired behavior.
      console.warn(`Requested ${requestedCount} questions for ${subject}, but only ${questionsForClient.length} were available after filtering.`);
    }


    return json(questionsForClient);

  } catch (error) {
    console.error('Error reading or parsing question file:', error);
    // Check if the error is due to file not found
    if (error.code === 'ENOENT') {
        return json({ error: `Question file for subject '${subject}' not found.` }, { status: 404 });
    }
    return json({ error: 'Failed to load questions.' }, { status: 500 });
  }
}
