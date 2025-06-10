import {subjects} from '$lib/subjects'

export async function load() {
return {
    subjects: Array.from(subjects).map(([slug, subject]) => ({
        slug,
        name: subject.name
    }))
};
}