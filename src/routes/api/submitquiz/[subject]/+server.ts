import { json } from '@sveltejs/kit';
import {pc } from '../../../../data/pc';
import { dsa } from '../../../../data/dsa';
import { toe } from '../../../../data/toe';
import { codd } from '../../../../data/codd';

export async function POST({ request, params }) {
  const subject = params.subject;
  const submission = await request.json(); // { questionIds: string[], answers: number[] }

  if (!submission || !submission.questionIds || !submission.answers) {
    return json({ error: 'Invalid submission data' }, { status: 400 });
  }

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
      case 'codd':
        allQuestions = codd;
        break;
      default:
        return json({ error: 'Invalid subject' }, { status: 400 });
    }

  try {
    let correctCount = 0;
    const reviewData = [];

    for (let i = 0; i < submission.questionIds.length; i++) {
      const questionId = submission.questionIds[i];
      const userAnswerIndex = submission.answers[i]; // User's selected option index

      const questionData = allQuestions.find(q => q.id === questionId);

      if (questionData) {
        const isCorrect = (userAnswerIndex === questionData.correctAnswerIndex);
        if (isCorrect) {
          correctCount++;
        }
        reviewData.push({
          id: questionData.id,
          questionText: questionData.questionText,
          options: questionData.options,
          userAnswerIndex: userAnswerIndex,
          correctAnswerIndex: questionData.correctAnswerIndex,
          explanation: questionData.explanation,
          isCorrect: isCorrect
        });
      } else {
        // Handle case where a submitted question ID is not found (shouldn't happen ideally)
        reviewData.push({
          id: questionId,
          questionText: 'Question data not found.',
          options: [],
          userAnswerIndex: userAnswerIndex,
          correctAnswerIndex: null,
          explanation: 'N/A',
          isCorrect: false
        });
      }
    }

    const grade = (submission.questionIds.length > 0) ? (correctCount / submission.questionIds.length) * 100 : 0;

    return json({
      grade: grade,
      reviewData: reviewData, // Array of objects for each question's review
      totalQuestions: submission.questionIds.length,
      correctCount: correctCount
    });

  } catch (error) {
    console.error('Error processing quiz submission:', error);
    if (error.code === 'ENOENT') {
        return json({ error: `Question file for subject '${subject}' not found.` }, { status: 404 });
    }
    return json({ error: 'Failed to process quiz submission.' }, { status: 500 });
  }
}
