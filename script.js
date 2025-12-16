// The provided course information.
const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
        {
            id: 1,
            name: "Declare a Variable",
            due_at: "2023-01-25",
            points_possible: 50
        },
        {
            id: 2,
            name: "Write a Function",
            due_at: "2023-02-27",
            points_possible: 150
        },
        {
            id: 3,
            name: "Code the World",
            due_at: "3156-11-15",
            points_possible: 500
        }
    ]
};

// The provided learner submission data.
const LearnerSubmissions = [
    {
        learner_id: 125,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-25",
            score: 47
        }
    },
    {
        learner_id: 125,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-02-12",
            score: 150
        }
    },
    {
        learner_id: 125,
        assignment_id: 3,
        submission: {
            submitted_at: "2023-01-25",
            score: 400
        }
    },
    {
        learner_id: 132,
        assignment_id: 1,
        submission: {
            submitted_at: "2023-01-24",
            score: 39
        }
    },
    {
        learner_id: 132,
        assignment_id: 2,
        submission: {
            submitted_at: "2023-03-07",
            score: 140
        }
    }
];

function getLearnerData(course, ag, submissions) {
    //Figuring out if the assignments belongs to course
    // try/catch?? 
    try {
        if (ag.course_id !== course.id) {
            throw new Error("Assignments do not match this course");
        }
        //THIS IS CATCH DONT CHANGE YET PLZ
    } catch (error) {
        console.error(error.message);

    }
    // Doesnt seem to work?? Check back later

    //////////////////////////// ASSIGNMENT/SUBMISSION SECTION /////////////////////////////
    let learners = {};
    //Making current date as a string??
    let today = "2025-12-15";

    // Finding out which assignments match  
    // TRY FOR OF   
    for (const s of submissions) {
        let learnerId = s.learner_id;
        const assignment = ag.assignments.find(
            a => a.id === submissions.assignment_id
        );
        // if its not an assignment filter out
        if (!assignment) {
            continue; // filter out
        } else {
            console.log(assignment.name);
        }
        // if for assignments are not due
        if (assignments.due_at > today) {
            continue; //Filter out
        }
        // figuring out the points situation
        if (assignment.points_possible === 0) {
            continue;
        }
        // if (!learners[learnerId]) {
        //     id: learnerId,
        //     tEarned: 0,
        //     tPossible: 0   
        // };

        //take 10% of late assignments
        let score = s.submission.score;
        if (s.submission.submitted_at > assignment.due_at) {
            score -= assignment.points_possible * 0.1;
        }
        
        score = Math.max(score, 0); //no negative numbers
        console.log(score);
    }
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
