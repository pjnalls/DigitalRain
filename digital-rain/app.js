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

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const addLinesOfCode = async () => {
  (new Array(49).fill(0)).forEach(async (element, i) => {
    code.split("\n").forEach(async (line, index) => {
      const p = document.createElement("p");

      p.setAttribute("class", "line-of-code");
      p.setAttribute("id", `${i}${index}`);
      p.style.right = `${Math.random() * 100}vw`;

      await revealCodeLikeRain(p, line);
    });
  });
};

const revealCodeLikeRain = async (p, line) => {
  let characters = "";
  await line.split("").forEach(async (char) => {
    characters += char;
    p.textContent = characters;
    await new Promise(r => setTimeout(r, 2000));
    document.getElementById("root").appendChild(p);
  });
};

const main = () => {
  addLinesOfCode();
};

main();
