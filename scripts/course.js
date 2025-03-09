const courses = [
    { code: "CSE 110", name: "Intro to Programming", completed: true, credits: 3 },
    { code: "CSE 111", name: "Data Structures", completed: false, credits: 3 },
    { code: "CSE 210", name: "OOP", completed: true, credits: 3 },
    { code: "WDD 130", name: "Web Fundamentals", completed: true, credits: 3 },
    { code: "WDD 131", name: "JavaScript Basics", completed: false, credits: 3 },
    { code: "WDD 231", name: "Advanced Web Dev", completed: false, credits: 3 }
]

function displayCourses(filter = "all") {
    const container = document.getElementById("course-container");
    container.innerHTML = "";
    let totalCredits = 0;

    const filteredCourses = courses.filter(course =>
        filter === "all" ? true : course.code.startsWith(filter)
    );

    filteredCourses.forEach(course => {
        totalCredits += course.credits;
        const courseDiv = document.createElement("div");
        courseDiv.textContent = `${course.code} - ${course.name}`;
        courseDiv.style.background = course.completed ? "green" : "brown";
        courseDiv.style.color = "white";
        courseDiv.style.padding = "10px";
        courseDiv.style.margin = "5px";
        courseDiv.style.borderRadius = "5px";
        container.appendChild(courseDiv);
    });

    document.getElementById("total-credits").textContent = totalCredits;
}

document.getElementById("filter-all").addEventListener("click", () => displayCourses("all"));
document.getElementById("filter-cse").addEventListener("click", () => displayCourses("CSE"));
document.getElementById("filter-wdd").addEventListener("click", () => displayCourses("WDD"));

displayCourses();