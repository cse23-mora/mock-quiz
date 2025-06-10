import { subjects } from '$lib/subjects.js'


export async function load({ params }) {
  let subjectDisplayableName = subjects.get(params.subject)?.name || 'Unknown Subject';
  return {
    subject: params.subject,
    subjectDisplayableName
  };
}
