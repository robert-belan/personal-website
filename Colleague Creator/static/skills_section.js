import { fadeOutFadeIn, unavailableItemMessage } from "/static/helpers.js";


export function skills() {
    fadeOutFadeIn(createSkills, document.querySelector("#text"))
}



function createSkills() {

    // creates foundation layout code
    const skills_layout = `
    <div class="skills-container">
        <div id="skills" class="skills"></div>
        <h3>Zvolené úrovně dovedností</h3>
        <div id="skills-description" class="skills-description">
            <ol></ol>
        </div>
    </div>
    `
    document.querySelector("#text").insertAdjacentHTML("beforeend", skills_layout);

    createSkillsTable();
    skillsToggle();
}



function createSkillsTable() {
    const table_ = document.createElement("table");
    table_.classList.add("skills-table")
    const tbody_ = document.createElement("tbody");

    // inserting to DOM
    const destination = document.querySelector("#skills");
    destination.insertAdjacentElement("beforeend", table_)
    table_.insertAdjacentElement("beforeend", tbody_);

    // generates table data
    for (let counter = 0; counter < skillsData.length; counter++) {
        tbody_.insertAdjacentHTML("beforeend", `
            <tr id="skill-${counter}">
                <td class="skill-logo"><img src="/static/logos/${skillsData[counter].logo}"></td>
                <td class="skill-label">${skillsData[counter].skill}</td>
                <td class="sign">&#43;</td>
                <td class="level">${skillsData[counter].completed}</td>
                <td class="sign">&#8722;</td>
            </tr>`);
    }

    document.querySelectorAll(".sign").forEach(sign => {
        sign.addEventListener("click", unavailableItemMessage)
    })
}



// generates skill description after skill selection
function skillsToggle() {
    const destination = document.querySelector("#skills-description ol");
    const skills = document.querySelectorAll("#skills tr");

    for (let counter = 0; counter < skills.length; counter++) {
        skills[counter].addEventListener("click", () => {

            //smooth changing effect
            fadeOutFadeIn(() => {
                destination.insertAdjacentHTML("beforeend", `
                    ${getSkillDescription(counter)}
                    `)
            }, destination)
        })
    }
}



// Creates skills description using skillsData object (data.js)
function getSkillDescription(selectedSkill) {

    const skill = skillsData[selectedSkill]; //array with levels text
    const result = []

    for (let counter = 0; counter < skill.levels.length; counter++) {
        if (counter < skill.completed) {
            result.push(`<li class="achieved">${skill.levels[counter]}</li>`)
            if (counter < (skill.completed - 1)) {
                result.push(`<li class="down-arrow">&#8675;</li>`);    // down arrow sign
            }
            else if (counter === skill.completed - 1 && counter !== skill.levels.length - 1) {
                result.push(`<li class="down-stop-arrow">&#10515;</li>`); // down arrow with bottom line
            }
        }
        else {
            result.push(`<li class="unachieved">${skill.levels[counter]}</li>`)
        }
    }
    return result.join("");
}



export const skillsData = [
    {
        logo: "c.png",
        skill: "C/C++",
        levels: ["Rozhodnutí naučit se programovat",
            "První printf('Hello World!')",
            "Poznávání vnitřního fungování PC",
            "Ztráta praktické schopnosti používání jazyka"
        ],
        completed: 4
    },

    {
        logo: "cs50.png",
        skill: "Obecné základy programování",
        levels: ["Schopen zapnout počítač",
            "První printf('Hello World')",
            "Hotový první menší projekt(y)",
            "Hotové CS50 by Harvard",
            "Komerční praxe",
            "'Připraven do <span class='g1'>G</span><span class='o1'>o</span><span class='o2'>o</span><span class='g2'>g</span><span class='l'>l</span><span class='u'>u</span>'"
        ],
        completed: 4
    },

    {
        logo: "html.png",
        skill: "HTML",
        levels: ["Rozpozná zkratku",
            "První &lt;h1&gt;Hello World!&lt;/h1&gt;",
            "První jednodušší web",
            "Praktické využívání",
            "Nic ho nemůže zaskočit",
        ],
        completed: 4
    },

    {
        logo: "css.png",
        skill: "CSS",
        levels: ["Rozliší CSS a CCS",
            "První vystylovaný Hello World",
            "Začíná používat proměnné a funkce v CCS",
            "Věc se komplikuje s SCCS",
            "Přestane všude psát CCS místo CSS"
        ],
        completed: 4
    },

    {
        logo: "js.png",
        skill: "JavaScript",
        levels: ["Rozliší JavaScript od Jawy",
            "První >alert('Hello World')",
            "První praktické používání",
            "Začíná rozpoznávat a používat různé Web API",
            "Stačí krátké nahlédnutí do dokumentace",
            "Nahlážení do dokumentace už jen zdržuje"
        ],
        completed: 4
    },

    {
        logo: "react.png",
        skill: "React",
        levels: ["Upřednostnil React nad Svelt",
            "První &lt;HelloWorld /&gt;",
            "Uvedení znalostí do praxe",
            "První projekt postavený na Reactu"
        ],
        completed: 2
    },

    {
        logo: "python.png",
        skill: "Python",
        levels: ["Přechod z C/C++ na Python",
            "První print('Hello World!')",
            "Uvedení znalostí do praxe a první menší projekty",
            "Počátek průzkumu Python 'vnitřností'",
            "Mírné schlazení znalostí kvůli JS"
        ],
        completed: 5
    },

    {
        logo: "flask.png",
        skill: "Flask",
        levels: ["Přičichnutí k Flasku",
            "První menší loky",
            "Vlastní menší večírek a první vystřízlivění",
            "... *první ztráty paměti*",
            "... *další ztráty paměti*",
            "Zkušený pijan",
        ],
        completed: 3
    },

    {
        logo: "sqlite.png",
        skill: "SQL",
        levels: ["Seznámení s SQLite",
            "První SELECT * FROM greetings WHERE greeting = 'Hello World';",
            "Drobná praxe",
            "Nějakou dobu nic",
            "SQL engineer"
        ],
        completed: 3
    },

    {
        logo: "git.png",
        skill: "GIT",
        levels: ["Cože? Gastrointestinální trakt?",
            "git commit greeting.html -m 'Hello world!';",
            "Průběžná praxe",
            "Pokročilejší používání GIT"
        ],
        completed: 3
    },

    {
        logo: "DOPLNIT.png",
        skill: "Testování",
        levels: ["Mělo by se testovat"],
        completed: 0
    },

    {
        logo: "linux.png",
        skill: "Linux",
        levels: ["První krůčky v Ubuntu",
            "Rok s Ubuntu",
            "Zpět k W10 + WSL",
        ],
        completed: 3
    },
]