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
        // Doesnt seem to work?? Check back later


        const learners = {};
        //Making current date as a string??
        let today = "2025-12-15";

        // Finding out which assignments match  
        // TRY FOR OF ----> couldnt figure it out
        for (let i = 0; i < submissions.length; i++) {
            const submission = submissions[i];
            const learnerId = submission.learner_id;

            // F
            let assignment = null;
            for (let j = 0; j < ag.assignments.length; j++) {
                if (ag.assignments[j].id === submission.assignment_id) {
                    assignment = ag.assignments[j];
                    break;
                }
            }

            // If 
            if (assignment === null) continue;

            // Skip assignments if they are not yet due
            if (assignment.due_at > today) continue;

            // Make sure points are not zero
            if (assignment.points_possible === 0) {
                throw new Error("points_possible cannot be 0");
            }

            if (!learners[learnerId]) {
                learners[learnerId] = {
                    id: learnerId,
                    tEarned: 0,
                    tPossible: 0
                };
            }

            let score = submission.submission.score;

            // penalty of 10%
            if (submission.submission.submitted_at > assignment.due_at) {
                score = score - (assignment.points_possible * 0.1);
            }

            // No negatives
            if (score < 0) {
                score = 0;
            }
            console.log(score);
            console.log(s);
            // Figuring out precentages
            learners[learnerId][assignment.id] =
                score / assignment.points_possible;

            // Add to totals for average
            learners[learnerId].totalEarned += score;
            learners[learnerId].totalPossible += assignment.points_possible;
        }

        // Build final result array
        const result = [];

        for (const learnerId in learners) {
            const learner = learners[learnerId];

            learner.avg =
                learner.totalEarned / learner.totalPossible;

            delete learner.totalEarned;
            delete learner.totalPossible;

            result.push(learner);
        }

        return result;
    } catch (error) {
        console.log(error.message);
        return [];

    }
}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
