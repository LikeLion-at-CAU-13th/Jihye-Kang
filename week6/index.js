const baseURL ="http://apis.data.go.kr/B551011/PhotoGalleryService1";

const option = {
    serviceKey:
      "yy%2Bd%2Fw3aQEsBxwvD%2FAGfRjfaqhIq3GeYrg6goQn2us3QOCQpqiAsnkZ4sVs0kaHLe7a0cqUJl41BhR2gN7BKOQ%3D%3D",
    numofRows: 6,
    MobileApp: "test",
    MobileOS: "ETC",
    arrange: "A",
    _type: "json",
  };

const container = document.getElementById('container');

let shownPages = [];
let count = 0;
let indexNum = 0; 

// 📅 날짜 포맷 변경 함수
function formatDate(dateString) {
  const year = dateString.substring(0, 4);
  const month = dateString.substring(4, 6);
  const day = dateString.substring(6, 8);

  return `${year}년 ${month}월 ${day}일`;
}

async function getData() {
    do {
      count = Math.floor(Math.random() * 50) + 1;
    } while (shownPages.includes(count)); 

    shownPages.push(count);

    const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${count}&serviceKey=${option.serviceKey}`
    
    const fetchData = await fetch(url);
    //container.innerHTML = '' ;
    console.log(fetchData);

    const toJson = await fetchData.json();
    console.log(toJson);

    const datas = await toJson.response.body.items.item;
    console.log(datas);

    datas.map((data)=>{
        const list = document.createElement('div');
        list.id = 'list';
        
        const image = document.createElement('img');

        image.src = data.galWebImageUrl;

        const info = document.createElement('span');
        info.innerText = `
        ${indexNum +1}번째 사진
        제목 : ${data.galTitle}
        장소 : ${data.galPhotographyLocation}`;

        indexNum ++;
        
        list.appendChild(image);
        list.appendChild(info);

        container.appendChild(list);

        const detailBtn = document.createElement('button');
        detailBtn.innerText = "더보기";
  
        list.appendChild(detailBtn);

        const formattedDate = formatDate(data.galCreatedtime);

        detailBtn.addEventListener('click', () => {
          const params = new URLSearchParams({
            title: data.galTitle,
            place: data.galPhotographyLocation,
            photographer: data.galPhotographer,
            date: formattedDate,
            keyword: data.galSearchKeyword,
            image: data.galWebImageUrl
          });
          
          window.location.href = `detail.html?${params.toString()}`; 
          
          
      });
    }
  )
}