/* =========================================
   EDULEARN STUDENT MANAGEMENT
   student-management.js
========================================= */

const studentSearch =
    document.getElementById("studentSearch");

const programmeFilter =
    document.getElementById("programmeFilter");

const statusFilter =
    document.getElementById("statusFilter");


/*
    Student records will eventually
    come from the backend/database.

    Example structure:

    {
        id: "EDU20260001",
        name: "Student Name",
        programme: "Web Development",
        status: "active"
    }
*/


/* =========================================
   SEARCH INTERFACE
========================================= */

if (studentSearch) {

    studentSearch.addEventListener("input", function () {

        console.log(
            "Searching for:",
            studentSearch.value
        );

        /*
            Backend/API filtering will be
            connected here later.
        */

    });

}


/* =========================================
   PROGRAMME FILTER
========================================= */

if (programmeFilter) {

    programmeFilter.addEventListener("change", function () {

        console.log(
            "Programme:",
            programmeFilter.value
        );

    });

}


/* =========================================
   STATUS FILTER
========================================= */

if (statusFilter) {

    statusFilter.addEventListener("change", function () {

        console.log(
            "Status:",
            statusFilter.value
        );

    });

}
