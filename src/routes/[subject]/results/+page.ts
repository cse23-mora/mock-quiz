import { subjects } from '$lib/subjects'

export async function load({ params }) {
  // Give subject a more readable name
  let subjectDisplayableName = subjects.get(params.subject)?.name || 'Unknown Subject';

  return {
    subject: params.subject,
    subjectDisplayableName
  };
}
