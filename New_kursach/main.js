// записываем в переменные типа const тэги с HTML-документа, с которыми будем работать
const addBox = document.querySelector(".add-box"),
popupBox = document.querySelector(".popup-box"),
popupTitle = popupBox.querySelector("header p"),
closeIcon = popupBox.querySelector("header i"),
titleTag = popupBox.querySelector("input"),
descTag = popupBox.querySelector("textarea"),
addBtn = popupBox.querySelector("button");
const titleChange = document.querySelector(".note div");
const audio = new Audio('SUIII.mp3');


//Постоянная переменная, в которой записаны названия месяцев
const months = ["Январь","Февраль","Март","Апрель","Май","Июнь","Июль",
                "Август","Сентябрь","Октябрь","Ноябрь","Декабрь"];

//получаем заметку и парсим ее. То есть получаем какой-то объект и "расшифровываем его"
const notes = JSON.parse(localStorage.getItem("notes") || "[]") 
let isUpdate = false, updateId;

//Функция, которая вызывает окно добавления заметки, также срабатывает при событии click на элемент addBox
addBox.addEventListener("click", () => {
    titleTag.focus(); // titleTag берется в "фокус", во время выполнения функции
    popupBox.classList.add("show"); // к элементу popupBox добавляется класс show
})

closeIcon.addEventListener("click", () => { //функция закрытия окна, которая срабатывает при событии click на эдемент closeIcon
    isUpdate = false; // присваиваем значение false переменной isUpdate
    titleTag.value = "" // обнуляем значение value у titleTag
    descTag.value = "" // обнуляем значение value у descTag
    addBtn.innerText = "Добавить заметку" // На кнопке написано  "Добавить заметку"
    popupTitle.innerText = "Добавить новую заметку"// В загаловке написано "Добавить новую заметку"
    popupBox.classList.remove("show"); // Удаляем класс show у popupBox
})

function showNotes() { // Функция показа заметок
    document.querySelectorAll(".note").forEach(note => note.remove()); //Находим все элементы с классом note, и удаляем их
    notes.forEach((note,index) => { // в массиве notes для каждого note и index отображаем liTag, но с нужными полями title, description, date
        let liTag = `<li class="note">
                        <div class="details"> 
                            <p>${note.title}</p>
                            <span>${note.description}</span>
                        </div>
                        <div class="bottom-content">
                            <span>${note.date}</span>
                            <div class="settings">
                                <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                                <ul class="menu">
                                    <li onclick="markNote(${index})"><i class="uil uil-bolt">Сделать важной</i></li>
                                    <li onclick="completeNote(${index})"><i class="uil uil-check-circle">Завершить</i></li>
                                    <li onclick="updateNote(${index}, '${note.title}', '${note.description}')"><i class="uil uil-pen">Редактировать</i></li>
                                    <li onclick="deleteNote(${index})"><i class="uil uil-trash">Удалить</i></li>
                                </ul>
                            </div>
                        </div>
                    </li>`;
        addBox.insertAdjacentHTML("afterend", liTag); // Вставляет liTag после addBox
    })
}
showNotes();

function showMenu(elem) {  // функция показа меню
    elem.parentElement.classList.add("show") // при клике добавляем класс show
    document.addEventListener("click", e => {
        // удаляем класс show из меню если был сделан клик либо на меню, либо на любое другое место
        if(e.target.tagName != "I" || e.target != elem) {
            elem.parentElement.classList.remove("show");
        }
    }) 
}

function deleteNote(noteId) { // Функция удаления заметки
    let confirmDel = confirm("Вы уверены, что хотите удалить эту заметку?"); // выводим сообщение, точно ли хотят удалить заметку
    if(!confirmDel) return; // если не тыкнули, то возвращаем
    notes.splice(noteId, 1); // удаляем выбранную заметку из массива
    // сохраняем обновленные заметки в localstorage
    localStorage.setItem("notes",JSON.stringify(notes)); // сохраняем заметки в localstorage 
    showNotes() // отображаем заметки
}

function completeNote(noteId){
    notes.splice(noteId, 1);
    confirm("Поздравляем, вы завершили заметку!")
    localStorage.setItem("notes",JSON.stringify(notes));
    showNotes()
}


function updateNote(noteId, title, desc) { //Функция редактирования заметки
    isUpdate = true; // Переменная редактирования заметки равна true
    updateId = noteId; // получаем ID нужной нам заметки, над которой происходит редактирование
    addBox.click(); // тригерим функцию addBox, которая вызывает меню добавления заметки
    titleTag.value = title; // значение загаловка равно загаловку, которое мы напишем
    descTag.value = desc; // значение описания равно значению описания, которое мы напишем
    addBtn.innerText = "Обновить заметку" // Надпись у кнопки равна "обновить заметку"
    popupTitle.innerText = "Обновление заметки" // Надпись у загаловка равна "Обновление заметки"
}

addBtn.addEventListener("click", e => { //Функция добавления заметки 
    e.preventDefault();  // Отменяем действие браузера по умолчанию, которое отправляет форму 
    let noteTitle = titleTag.value, // получаем значение загаловка у заметки в переменную noteTitle
    noteDesc = descTag.value; // получаем значение описания у заметки в переменную noteDesc

    if(!noteTitle && !noteDesc) {
        confirm("Вы ничего не написали в заметку! Напишите что-нибудь, пожалуйста");
    }

    if(noteTitle || noteDesc) { // Если хоть что-то есть в noteTitle или в noteDesc
        //Получаем дату
        let dateObj = new Date(), 
        month = months[dateObj.getMonth()],
        day = dateObj.getDate(),
        year = dateObj.getFullYear()

        let noteInfo = { // в переменную noteInfo записываем всю информацию о заметке, такую как: название, описание и дату
            title: noteTitle,
            description: noteDesc,
            date: `${month} ${day}, ${year}`
        }

        if(!isUpdate) { // Если isUpdate false то 
            notes.push(noteInfo); // добавляем новую заметку в заметки
        } else { // Если isUpdate true, то
            isUpdate = false; // говорим, что isUpdate теперь false
            notes[updateId] = noteInfo // обновляем заметку
        }
        // Сохраняем заметку в localstorage
        localStorage.setItem("notes",JSON.stringify(notes));
        closeIcon.click(); // тригерим функцию закрытия окна
        showNotes(); // отображаем заметки
    }
    audio.play();
})
