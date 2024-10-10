function Save(event) {
    event.preventDefault();

    var goal = document.getElementById("goal").value;
    var days = document.getElementById("days").value;
    var exercises = Array.from(document.getElementById("exercises").selectedOptions).map(option => option.text).join(", ");
    var sets = document.getElementById("sets-reps").value;
    var duration = document.getElementById("duration").value;
    var rest = document.getElementById("rest").value;
    var notes = document.getElementById("notes").value;

    // document.getElementById("goal1").innerHTML = goal;
    // document.getElementById("day1").innerHTML = days;
    // document.getElementById("exe1").innerHTML = exercises;
    // document.getElementById("set1").innerHTML = sets;
    // document.getElementById("dur1").innerHTML = duration;
    // document.getElementById("rest1").innerHTML = rest;
    // document.getElementById("notes1").innerHTML = notes;

    var row = document.createElement("tr")
    var grow = document.createElement("td")
    grow.innerHTML = goal;

    var drow = document.createElement("td")
    drow.innerHTML = days;

    var erow = document.createElement("td")
    erow.innerHTML = exercises;

    var srow = document.createElement("td")
    srow.innerHTML = sets;

    var durow = document.createElement("td")
    durow.innerHTML = duration;

    var rrow = document.createElement("td")
    rrow.innerHTML = rest;

    var nrow = document.createElement("td")
    nrow.innerHTML = notes;

    row.appendChild(grow);
    row.appendChild(drow);
    row.appendChild(erow);
    row.appendChild(srow);
    row.appendChild(durow);
    row.appendChild(rrow);
    row.appendChild(nrow);

    document.querySelector("#routine tbody").appendChild(row);
    document.getElementById("routine-form").reset();
}