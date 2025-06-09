export async function load({ params }) {
  // Give subject a more readable name
  let subjectDisplayableName = '';
  if (params.subject === 'dsa') {
	subjectDisplayableName = 'Data Structures and Algorithms';
  } else if (params.subject === 'pc') {
	subjectDisplayableName = 'Program Construction';
  } else if (params.subject === 'toe') {
	subjectDisplayableName = 'Theory of Electricity';
  } else if (params.subject === 'codd') {
	subjectDisplayableName = 'Computer Organization';
  } else {
	subjectDisplayableName = 'Unknown Subject';
  }
  return {
    subject: params.subject,
    subjectDisplayableName
  };
}
