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
    // here, we would process this data to achieve the desired result.
    const learners = {};
    const todayDate = "2025-12-15"


    /////////////////Submission////////////////////
    for (let i = 0; i < submissions.length; i++) {
        let submission = submissions[i];
        let learnerId = submission.learner_id;
        console.log(submission); // Grabbing all of submisstion

        let assignment = null;
        for (let j = 0; j < ag.assignments.length; j++) {
            if (ag.assignments[j].id === submission.assignment_id) {
                assignment = ag.assignments[j]
            }


            // Tried using try/catch
            // try {
            //     if (assignment === null) {
            //         throw new Error("Assignment not found")
            //     }
            // } catch (error) {
            //     console.log("Something occured:", error.message);
            // }
            //  console.log(assignment);
        }

        if (assignment.due_at > todayDate) {
            continue;
        }
        // console.log(assignment.due_at);

        if (assignment.points_possible === 0) {
            console.log("Points possible cant be 0");
        }
    }

    if (!learners[learnerId]) {
        learners[learnerId] = {
            id: learnerId,
            tEarned: 0,
            tPossible: 0
        };

        //Penalty scores
        let score = submission.submission.score;

        if (submission.submission.submitted_at > assignment.due_at) {
            score = score - (assignment.points_possible * 0.1)
        }
        // no negatives
        if (score < 0) {
            score = 0;
        }

        // Figuring out average

    }




















    const result = [];
    return result;

}

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);

console.log(result);
