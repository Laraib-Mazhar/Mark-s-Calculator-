const calculateFormEL = document.getElementById("calculateForm");
const resultEl = document.getElementById("result");
const heading1 = document.querySelector(".content h1");
const heading2 = document.querySelector(".content h2");

const calculateMarks = (event) => {
    event.preventDefault();

    const formData = new FormData(calculateFormEL);
    let total = 0;

    for (let value of formData.values()) {
        total += Number(value);
    }
    const maxMarks = 400;
    const percentage = (total / maxMarks) * 100;

    heading1.style.display = "none";
    heading2.style.display = "none";
    
    resultEl.textContent = `Total Marks: ${total} / ${maxMarks} | Percentage: ${percentage.toFixed(2)}%`;
};

calculateFormEL.addEventListener("submit", calculateMarks);
