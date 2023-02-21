const cohort = {
    name: 'Dec2022',
    id: 1234,
    students: ['raaya', 'neveya', 'tanay'] 
};

studentDetails = (cohort) => {
    console.log(`${cohort.id} - ${cohort.name} - ${cohort.students.length} students in the cohort.`);
};

studentDetails(cohort);