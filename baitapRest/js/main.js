let averaged = (...score) => {
    let sum = 0;
    score.map((item) => {
        sum += item;
    });
    return sum / score.length;
};

let getScore1 = () => {
    let toan = document.getElementById("inpToan").value;
    let ly = document.getElementById("inpLy").value;
    let hoa = document.getElementById("inpHoa").value;

    document.getElementById("tbKhoi1").innerHTML = averaged(
        Number(toan),
        Number(ly),
        Number(hoa)
    ).toFixed(2);
};
document.getElementById("btnKhoi1").onclick = getScore1;

let getScore2 = () => {
    let van = document.getElementById("inpVan").value;
    let su = document.getElementById("inpSu").value;
    let dia = document.getElementById("inpDia").value;
    let english = document.getElementById("inpEnglish").value;

    document.getElementById("tbKhoi2").innerHTML = averaged(
        Number(van),
        Number(su),
        Number(dia),
        Number(english)
    ).toFixed(2);
};
document.getElementById("btnKhoi2").onclick = getScore2;
