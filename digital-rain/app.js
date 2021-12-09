const code = `IFヨウアLレアDYハVエWハTヨウンエエD１WHYアSKFオRモレか

OンLYアSKFオRモレTハンWハTヨウレQウイレイFヨウPラントギVエイTトTヘンエエDY０

0BウTヨウCアンンエVエRハVエエンオウGH０0
JウSTアSヨウCアンンエVエRハVエンオTヒンG０

TヘレイSアLワYSソメTヒンG１ソプTソメTヒンG１アンYTヒンGオRエVエRYTヒンGヨウポSセSSトゴオDウセ０

FオRイTイSTヒエVイSHトベリケアDラゴンWホエSタBリSヘSTヘイRンエSTインTヘイRライRオンアモウンタインオFゴLDアンDヂエSウポンイT０

TヘYサVエFオRTヘMセLVエSアンDアFエWブTオウGHTトベアFオウンダTイオンオFレソウRCエSFオRTヘWオRLD０

WエSタレンオTイントアミRロRインFロンTオFオウR0VアンイTY0;
レFレCTイオンSアレCアSTBYTヘダイLYエXイSテンTイアLアンGSTWエFエエLWヘンWエガゼイントオウRオWンアBYSセS０
`;

const addLinesOfCode = async () => {
  new Array(99).fill(0).forEach(async (element, i) => {
    code.split("\n").forEach(async (line, j) => {
      const p = document.createElement("p");

      p.setAttribute("class", "line-of-code");
      p.setAttribute("id", `${i}${j}`);
      p.style.right = `${Math.random() * 200}vw`;

      revealCodeLikeRain(p, line, i, j);
    });
  });
};

const revealCodeLikeRain = (p, line, i, j) => {
  let characters = "";
  line.split("").forEach(async (char, k) => {
    await new Promise(async (resolve) => {
      await setTimeout(() => {
        characters += char;
        p.textContent = characters;
        document.getElementById("root").appendChild(p);
        resolve();
      }, (100 * (i + 1 + j + 1 + k + 1)) + (250 * (i + 1)) + (200 * (j + 1)));
      clearTimeout();
    });
  });
};

const main = () => {
  addLinesOfCode();
};

main();
