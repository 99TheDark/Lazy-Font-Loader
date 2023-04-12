var loadFont = async function(name) {
    let url = `https://fonts.googleapis.com/css2?family=${name.replace(/\s/g, "+")}`;
    let stylesheet = await fetch(url)
        .then(file => file.text())
        .catch(error => console.error(error));

    let fonturls = [];
    for(let i = 0; i < 100; i++) {
        let start = stylesheet.indexOf("url(");
        let end = stylesheet.indexOf(") format");

        if(start == -1 || end == -1) break;

        start += 4;

        fonturls.push(stylesheet.substring(start, end));

        stylesheet = stylesheet.substring(end + 8);
    }

    fonturls.forEach(loc => {
        let font = new FontFace(name, `url(${loc})`);
        font.load();
        document.fonts.add(font);
    });
};