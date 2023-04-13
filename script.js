const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

[canvas.width, canvas.height] = [innerWidth, innerHeight];

let fontFamily = "Ubuntu";

(async function() {
    await loadFont(fontFamily);

    ctx.font = `80px ${fontFamily}`;
    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillText("Hello!", canvas.width / 2, canvas.height / 2);
})();
