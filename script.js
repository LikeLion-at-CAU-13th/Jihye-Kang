const baseURL = "http://15.165.20.4:8000/";

const modal = document.getElementById('modal');
const writeBtn = document.getElementById('writeBtn');
const submitBtn = document.getElementById('submitBtn');
const closeBtn = document.getElementById('closeModal');
const guestbookForm = document.getElementById('guestbookForm');
const guestbookContainer = document.getElementById('guestbookContainer');

writeBtn.addEventListener('click', () => {
    modal.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
});

async function getGuestbookList() {
    guestbookContainer.innerHTML = ''; 
    
    const response = await fetch(`${baseURL}guestbook/`);
    const result = await response.json();

    result.data.forEach((input) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h3');
        title.innerText = input.title;

        const writer = document.createElement('p');
        writer.innerText = `작성자: ${input.writer}`;

        const content = document.createElement('p');
        content.innerText = input.content;

        card.appendChild(title);
        card.appendChild(writer);
        card.appendChild(content);

        console.log(input);

        const time = document.createElement('p');
        const createdAt = new Date(input.created); 
        time.innerText = `🐾 ${createdAt.toLocaleString()}`; 
        card.appendChild(time);
                

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = '삭제';
        deleteBtn.classList.add('deleteBtn');

        deleteBtn.addEventListener('click', async () => {
            const password = prompt('비밀번호를 입력하세요');
            if (password !== null) {
                await deleteGuestbook(input.id, password);
            }
        });

        card.appendChild(deleteBtn);

        guestbookContainer.appendChild(card);
    });
}

async function deleteGuestbook(id, password) {
    try {
        const response = await fetch(`${baseURL}guestbook/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password }),
        });

        if (response.ok) {
            alert('삭제되었습니다!');
            await getGuestbookList();
        } else {
            alert('비밀번호를 확인해주세요!');
        }
    } catch (error) {
        alert('서버 연결 실패🚨');
    }
}

guestbookForm.addEventListener('submit', async (event) => {
    event.preventDefault();  

    const username = guestbookForm.username.value;
    const title = guestbookForm.title.value;
    const message = guestbookForm.message.value;
    const password = guestbookForm.password.value;

    const data = {
        writer: username,
        title: title,
        content: message,
        password: password
    };

    try {
        const response = await fetch(`${baseURL}guestbook/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert('방명록 작성 완료!');
            modal.classList.remove('open');
            guestbookForm.reset();
            await getGuestbookList(); 
        } else {
            const errorData = await response.json();
            alert('작성 실패! 다시 시도해주세요.');
        }
    } catch (error) {
        alert('서버 연결 실패🚨');
    }
});

getGuestbookList();
