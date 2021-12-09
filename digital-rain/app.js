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
  new Array(199).fill(0).forEach(async (element, i) => {
    code.split("\n").forEach(async (line, j) => {
      const p = document.createElement("p");

      p.setAttribute("class", "line-of-code");
      p.setAttribute("id", `${i}${j}`);
      p.style.right = `${Math.random() * 200}vw`;
      const sign = Math.round(Math.random() * 1) === 0;
      p.style.top = `${sign ? "-" : ""}${
        sign ? Math.random() * 5 : Math.random() * 75
      }vh`;

      const timeouts = await revealCodeLikeRain(p, line, i, j);

      await timeouts.forEach((t) => clearTimeout(t));
    });
  });
};

const revealCodeLikeRain = async (p, line, i, j) => {
  let characters = "";
  let timeouts = [];
  await line.split("").forEach(async (char, k) => {
    await new Promise(async (resolve) => {
      const timeout = setTimeout(() => {
        let top = parseFloat(p.style.top.split("v")[0]);

        characters += char;
        p.textContent = characters;

        top += 0.4 * (k + 0.4);
        p.style.top = `${top}vh`;

        document.getElementById("root").appendChild(p);

        resolve();
      }, 111 * (i + 1 + j + 1 + k + 1) + 333 * (i + 1) + 333 * (j + 1));
      timeouts.push(timeout);
    });
  });
  return new Promise(() => timeouts);
};

const main = () => {
  addLinesOfCode();
};

main();
