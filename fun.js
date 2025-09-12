// ====== داده‌ها ======
let Nationality = [
    "Nationality",
    "Portugal",
    "France",
    "Italy",
    "Spain",
    "England",
    "Argentina",
    "Germany",
    "Brazil"
];

let Position = [
    "Position",
    "GK","CB","RB","LB",
    "CDM","CM","CAM",
    "RM","LM","LW","ST","RW"
];

let players = [
    {name: "Erling Haaland", img: "./img/download.jpg", Club: "Manchester City", age: 24, ovr: 92, national: "Norway", Position: "ST"},
    {name: "Kylian Mbappé", img: "./img/342229-1682683695.webp", Club: "Paris Saint-Germain", age: 26, ovr: 91, national: "France", Position: "ST"},
    {name: "Lionel Messi", img: "./img/28003-1740766555.webp", Club: "Inter Miami", age: 38, ovr: 93, national: "Argentina", Position: "RW"},
    {name: "Cristiano Ronaldo", img: "./img/images.jpg", Club: "Al Nassr", age: 40, ovr: 94, national: "Portugal", Position: "ST"},
    {name: "Kevin De Bruyne", img: "./img/download (1).jpg", Club: "Manchester City", age: 34, ovr: 90, national: "Belgium", Position: "CM"},
    {name: "Robert Lewandowski", img: "./img/download (2).jpg", Club: "FC Barcelona", age: 37, ovr: 91, national: "Poland", Position: "ST"},
    {name: "Neymar Jr", img: "./img/images(1).jpg", Club: "Al Hilal", age: 33, ovr: 92, national: "Brazil", Position: "LW"},
    {name: "Mohamed Salah", img: "./img/download (3).jpg", Club: "Liverpool", age: 33, ovr: 90, national: "Egypt", Position: "RW"},
    {name: "Luka Modrić", img: "./img/download (4).jpg", Club: "Real Madrid", age: 40, ovr: 89, national: "Croatia", Position: "CM"},
    {name: "Karim Benzema", img: "./img/18922-1702414196.webp", Club: "Al Ittihad", age: 37, ovr: 90, national: "France", Position: "ST"},
    {name: "Joshua Kimmich", img: "./img/download (5).jpg", Club: "Bayern Munich", age: 30, ovr: 89, national: "Germany", Position: "CDM"},
    {name: "Harry Kane", img: "./img/download (6).jpg", Club: "Bayern Munich", age: 31, ovr: 90, national: "England", Position: "ST"},
    {name: "Vinícius Júnior", img: "./img/download (7).jpg", Club: "Real Madrid", age: 24, ovr: 89, national: "Brazil", Position: "LW"},
    {name: "Jude Bellingham", img: "./img/download (8).jpg", Club: "Real Madrid", age: 22, ovr: 88, national: "England", Position: "CM"},
    {name: "Thibaut Courtois", img: "./img/download (9).jpg", Club: "Real Madrid", age: 33, ovr: 91, national: "Belgium", Position: "GK"},
    {name: "Alisson Becker", img: "./img/download (10).jpg", Club: "Liverpool", age: 33, ovr: 90, national: "Brazil", Position: "GK"},
    {name: "Jan Oblak", img: "./img/download (11).jpg", Club: "Atletico Madrid", age: 32, ovr: 89, national: "Slovenia", Position: "GK"},
    {name: "Sadio Mané", img: "./img/download (12).jpg", Club: "Al Nassr", age: 33, ovr: 88, national: "Senegal", Position: "LW"},
    {name: "Bruno Fernandes", img: "./img/download (13).jpg", Club: "Manchester United", age: 31, ovr: 88, national: "Portugal", Position: "CAM"},
    {name: "Riyad Mahrez", img: "./img/download (14).jpg", Club: "Al Ahli", age: 34, ovr: 87, national: "Algeria", Position: "RW"},
    {name: "Hakim Ziyech", img: "./img/download (15).jpg", Club: "Al Nassr", age: 32, ovr: 86, national: "Morocco", Position: "RW"},
    {name: "Toni Kroos", img: "./img/31909-1700638741.webp", Club: "Real Madrid", age: 35, ovr: 88, national: "Germany", Position: "CM"},
    {name: "Sergio Ramos", img: "./img/download (16).jpg", Club: "Al Ittihad", age: 39, ovr: 85, national: "Spain", Position: "CB"},
    {name: "Gerard Piqué", img: "./img/download (17).jpg", Club: "Retired", age: 38, ovr: 86, national: "Spain", Position: "CB"},
    {name: "David De Gea", img: "./img/download (18).jpg", Club: "Free Agent", age: 34, ovr: 87, national: "Spain", Position: "GK"},
    {name: "Pierre-Emerick Aubameyang", img: "./img/download (19).jpg", Club: "Olympique Marseille", age: 36, ovr: 85, national: "Gabon", Position: "ST"},
    {name: "Zlatan Ibrahimović", img: "./img/download (20).jpg", Club: "Retired", age: 44, ovr: 85, national: "Sweden", Position: "ST"},
    {name: "Luis Suárez", img: "./img/download (21).jpg", Club: "Grêmio", age: 38, ovr: 84, national: "Uruguay", Position: "ST"},
    {name: "Edinson Cavani", img: "./img/download (22).jpg", Club: "Valencia", age: 38, ovr: 86, national: "Uruguay", Position: "ST"},
    {name: "Alexis Sánchez", img: "./img/download (23).jpg", Club: "Olympique Marseille", age: 36, ovr: 84, national: "Chile", Position: "RW"},
    {name: "Gareth Bale", img: "./img/download (24).jpg", Club: "Retired", age: 36, ovr: 85, national: "Wales", Position: "RW"},
    {name: "James Rodríguez", img: "./img/download (25).jpg", Club: "Al Rayyan", age: 34, ovr: 83, national: "Colombia", Position: "CAM"},
    {name: "Andrés Iniesta", img: "./img/download (26).jpg", Club: "Vissel Kobe", age: 41, ovr: 84, national: "Spain", Position: "CM"},
    {name: "Xavi Hernández", img: "./img/download (27).jpg", Club: "Al Sadd", age: 45, ovr: 85, national: "Spain", Position: "CM"},
    {name: "Franck Ribéry", img: "./img/download (28).jpg", Club: "Retired", age: 42, ovr: 83, national: "France", Position: "LW"},
    {name: "Arjen Robben", img: "./img/download (29).jpg", Club: "Retired", age: 41, ovr: 84, national: "Netherlands", Position: "RW"},
    {name: "Santi Cazorla", img: "./img/download (30).jpg", Club: "Al Sadd", age: 41, ovr: 83, national: "Spain", Position: "CM"},
    {name: "David Villa", img: "./img/download (31).jpg", Club: "Retired", age: 43, ovr: 85, national: "Spain", Position: "ST"},
    {name: "Fernando Torres", img: "./img/download (32).jpg", Club: "Retired", age: 41, ovr: 84, national: "Spain", Position: "ST"},
    {name: "Cesc Fàbregas", img: "./img/download (33).jpg", Club: "Como", age: 38, ovr: 83, national: "Spain", Position: "CM"},
    {name: "Juan Mata", img: "./img/download (34).jpg", Club: "Retired", age: 37, ovr: 82, national: "Spain", Position: "CAM"},
    {name: "Sergio Agüero", img: "./img/download (35).jpg", Club: "Retired", age: 37, ovr: 85, national: "Argentina", Position: "ST"},
    {name: "Carlos Tévez", img: "./img/download (36).jpg", Club: "Retired", age: 41, ovr: 84, national: "Argentina", Position: "ST"},
    {name: "Radamel Falcao", img: "./img/download (37).jpg", Club: "Retired", age: 39, ovr: 83, national: "Colombia", Position: "ST"}
]
 


// ====== انتخاب عناصر HTML ======
let Nationalityvar = document.querySelector(".Nationality");
let Positionvar = document.querySelector(".Position");
let myplayers = document.querySelector(".myplayers");
let searchInput = document.querySelector("input[type=search]");
let filterBtn = document.querySelector("button");
let sortRadios = document.querySelectorAll(".inputchack");

// ====== پر کردن select ها ======
Nationality.forEach(e => {
    Nationalityvar.innerHTML += `<option value="${e}">${e}</option>`;
});

Position.forEach(e => {
    Positionvar.innerHTML += `<option value="${e}">${e}</option>`;
});

// ====== تابع رندر جدول ======
function renderPlayers(list) {
    myplayers.innerHTML = "";
    let num = 1;
    list.forEach(p => {
        myplayers.innerHTML += `
            <tr>
                <th scope="row">${num++}</th>
                <td><img src="${p.img}" width="35" alt="${p.name}"></td>
                <td>${p.name}</td>
                <td>${p.Club}</td>
                <td>${p.age}</td>
                <td>${p.ovr}</td>
                <td>${p.national}</td>
                <td>${p.Position}</td>
            </tr>
        `;
    });
}

// ====== نمایش اولیه همه بازیکنان ======
renderPlayers(players);

// ====== فیلتر + سرچ ======
function getFilteredPlayers() {
    let natVal = Nationalityvar.value;
    let posVal = Positionvar.value;
    let searchVal = searchInput.value.toLowerCase();

    return players.filter(p => {
        let matchNat = (natVal === "Nationality") || (p.national === natVal);
        let matchPos = (posVal === "Position") || (p.Position === posVal);
        let matchSearch = p.name.toLowerCase().includes(searchVal);
        return matchNat && matchPos && matchSearch;
    });
}

// ====== Submit فیلتر ======
filterBtn.addEventListener("click", () => {
    renderPlayers(getFilteredPlayers());
});

// ====== سرچ لحظه‌ای ======
searchInput.addEventListener("input", () => {
    renderPlayers(getFilteredPlayers());
});

// ====== مرتب‌سازی ======
sortRadios.forEach(radio => {
    radio.addEventListener("change", () => {
        let criteria = radio.nextSibling.textContent.trim();
        let sorted = getFilteredPlayers();

        if(criteria === "Overall"){
            sorted.sort((a,b)=> b.ovr - a.ovr);
        } else if(criteria === "Name"){
            sorted.sort((a,b)=> a.name.localeCompare(b.name));
        } else if(criteria === "Age"){
            sorted.sort((a,b)=> a.age - b.age);
        }

        renderPlayers(sorted);
    });
});
