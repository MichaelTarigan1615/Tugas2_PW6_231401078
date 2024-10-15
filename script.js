const root = document.querySelector('.root');
alert("Selamat Datang! Silakan isi form di bawah.");
const container = document.createElement('div');
container.classList.add('container', 'd-flex', 'justify-content-center', 'align-items-center');

const formContainer = document.createElement('div');
formContainer.classList.add('col-md-6');

const form = document.createElement('form');

const titleContainer = document.createElement('div');
titleContainer.style.textAlign = 'center';
titleContainer.style.marginBottom = '20px';

const title = document.createElement('h1');
title.innerText = 'Tugas-2 Praktikum Pemrograman Web';
title.style.fontFamily = 'Times New Roman, sans-serif';
title.style.fontWeight = 'bold';
title.style.marginBottom = '10px';

const hr = document.createElement('hr');
hr.style.border = '1px solid black';  
hr.style.width = '80%'; 
hr.style.margin = 'auto'; 

titleContainer.appendChild(title);
titleContainer.appendChild(hr);

root.appendChild(titleContainer);

const usernameLabel = document.createElement('label');
usernameLabel.setAttribute('for', 'username');
usernameLabel.classList.add('form-label');
usernameLabel.textContent = 'Username';
usernameLabel.style.fontFamily = 'Times New Roman, sans-serif';
const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.classList.add('form-control', 'mb-3');
usernameInput.id = 'username';
usernameInput.placeholder = 'Michael Pranata Tarigan';

const nimLabel = document.createElement('label');
nimLabel.setAttribute('for', 'nim');
nimLabel.classList.add('form-label');
nimLabel.textContent = 'NIM';
nimLabel.style.fontFamily = 'Times New Roman, sans-serif';
const nimInput = document.createElement('input');
nimInput.type = 'text';
nimInput.classList.add('form-control', 'mb-3');
nimInput.id = 'nim';
nimInput.placeholder = '231401078';

const komLabel = document.createElement('label');
komLabel.setAttribute('for', 'kom');
komLabel.classList.add('form-label');
komLabel.textContent = 'KOM';
komLabel.style.fontFamily = 'Times New Roman, sans-serif';
const komInput = document.createElement('input');
komInput.type = 'text';
komInput.classList.add('form-control', 'mb-3');
komInput.id = 'kom';
komInput.placeholder = 'C   ';

const fileLabel = document.createElement('label');
fileLabel.setAttribute('for', 'photo');
fileLabel.classList.add('form-label');
fileLabel.textContent = 'Upload Photo';
fileLabel.style.fontFamily = 'Times New Roman, sans-serif';
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.classList.add('form-control', 'mb-3');
fileInput.id = 'photo';

const submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.classList.add('btn', 'btn-dark', 'mb-3');
submitBtn.textContent = 'Kirim';


form.appendChild(usernameLabel);
form.appendChild(usernameInput);
form.appendChild(nimLabel);
form.appendChild(nimInput);
form.appendChild(komLabel);
form.appendChild(komInput);
form.appendChild(fileLabel);
form.appendChild(fileInput);
form.appendChild(submitBtn);

formContainer.appendChild(form);

const cardContainer = document.createElement('div');
cardContainer.classList.add('col-md-6', 'd-none');
cardContainer.id = 'output-section';

const outputCard = document.createElement('div');
outputCard.classList.add('output-card');
outputCard.id = 'output-card';

cardContainer.appendChild(outputCard);

container.appendChild(formContainer);
container.appendChild(cardContainer);

root.appendChild(container);

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    alert("Form berhasil disubmit!");
    const username = usernameInput.value;
    const nim = nimInput.value;
    const kom = komInput.value;
    const photoFile = fileInput.files[0];

    if (!username || !nim || !kom || !photoFile) {
        alert('Please fill all the fields and upload a photo');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        outputCard.innerHTML = `
            <img src="${e.target.result}" alt="Profile Photo">
            <p>Username: ${username}</p>
            <p>NIM: ${nim}</p>
            <p>KOM: ${kom}</p>
        `;

        cardContainer.classList.remove('d-none');
    };

    reader.readAsDataURL(photoFile);
});