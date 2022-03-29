const quotes = [
  {
    quote: "오늘 먹을 치킨을 내일로 미루지 말라.",
    recommend: "네네치킨",
  },
  { quote: "치킨은 가슴이 시킨다.", recommend: "굽네치킨" },
  { quote: "믿음, 소망, 치킨 그 중에 제일은 치킨이다.", recommend: "프라닭" },
  { quote: "후라이드냐 양념이냐 그것이 문제로다.", recommend: "노랑통닭" },
  {
    quote: "양념이냐 후라이드냐 고민할 시간에 한마리라도 더 먹어라.",
    recommend: "호식이 두마리 치킨",
  },
  {
    quote:
      "네가 닭뼈를 보았을 때 먹은 치킨이 양념인지 후라이드인지 모르게 하라.",
    recommend: "지코바치킨",
  },
  {
    quote: "치킨을 먹는 것은 천국을 살짝 엿보는 것이다.",
    recommend: "교촌치킨",
  },
  { quote: "인생은 치킨의 연속이다.", recommend: "멕시카나" },
  { quote: "너희는 먼저 그 다리와 날개를 구하라.", recommend: "BBQ치킨" },
  {
    quote: "인생은 B와 D사이의 C이다.Birth Chicken Death",
    recommend: "깐부치킨",
  },
  {
    quote: "치킨을 단 한 번도 안먹은 사람은 있어도 한 번만 먹어본 사람은 없다.",
    recommend: "부어치킨",
  },
  { quote: "웬만한 슬픔은 치킨으로 승화된다.", recommend: "땅땅치킨" },
];

const quote = document.querySelector("#quote div:first-child");
const recommend = document.querySelector("#quote div:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
recommend.innerText = `오늘의 치킨 : ${todaysQuote.recommend}`;
