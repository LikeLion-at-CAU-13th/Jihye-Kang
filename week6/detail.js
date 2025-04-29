const params = new URLSearchParams(window.location.search);

const title = params.get('title');
const place = params.get('place');
const month = params.get('date');
const photographer = params.get('photographer');
const keyword = params.get('keyword');



document.getElementById('detailContainer').innerHTML = `
  <h2>${title}</h2>
  <img src="${params.get("image")}" style="width:50%; height:auto;">
  <p>📍 장소: ${place}</p>
  <p>📅 날짜: ${month}</p>
  <p>📸 촬영자: ${photographer}</p>
  <p>🔎 키워드: ${keyword}</p>
`;
