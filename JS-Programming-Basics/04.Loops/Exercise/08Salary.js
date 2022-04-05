function salary(input) {

    let index = 0;
    let openTabs = Number(input[index]); // Number(input[0]);
    index++;
    let salary = Number(input[index]); // Number(input[1]);
    index++;

    let isPositiveSalary = true;

    for (let i = 0; i < openTabs; i++) {
        let currentTab = input[index];
        index++;

        if (currentTab === "Facebook") {
            salary -= 150;
        } else if (currentTab === "Instagram") {
            salary -= 100;
        } else if (currentTab === "Reddit") {
            salary -= 50;
        }
        if (salary <= 0) {
            console.log("You have lost your salary.");
            isPositiveSalary = false;
            break;
        }
    }
    if (isPositiveSalary) {
        console.log(salary.toFixed(0));
    }
}
salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"])






