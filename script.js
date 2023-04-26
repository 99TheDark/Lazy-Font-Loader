const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

[canvas.width, canvas.height] = [innerWidth, innerHeight];

let fontFamily = "Teko";

(async () => {
    await loadFont(fontFamily);

    ctx.font = `150px ${fontFamily}`;
    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText("Hello!", canvas.width / 2, canvas.height / 2);
})();
