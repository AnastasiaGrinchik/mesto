let popup = document.querySelector(".popup");

let profileIntroButtonEdit = document.querySelector(".profile__button-edit");
let popupButtonClose = document.querySelector(".popup__button-close");
let popupButtonSave = document.querySelector(".popup__button-save");

let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");

let formElement = document.querySelector(".popup__form")
let popupName = document.querySelector(".popup__name");
let popupProfession = document.querySelector(".popup__profession");


//функция добавляет класс если его нет, убирает если класс есть. Также 
// функция заполняет инпуты если есть класс popup__opened
let popupToggle = function() {
    popup.classList.toggle("popup_opened");
    if (popup.classList.contains("popup_opened")) {
        popupName.value = profileName.textContent;
        popupProfession.value = profileDescription.textContent;
    } else {
        popupName.value = "";
        popupProfession.value = "";
    }
}

profileIntroButtonEdit.addEventListener("click", popupToggle);
popupButtonClose.addEventListener("click", popupToggle);

//функция из секции профиль берет значения и вставляет их в инпуты попапа
let popupSave = function() {
    profileName.textContent = popupName.value; 
    profileDescription.textContent = popupProfession.value; 
}

//при нажатии кнопки "Сохранить" выполняются две функции(сохраняются
// данные и закрывается попап)
popupButtonSave.addEventListener("click", function() {
    popupSave();
    popupToggle();
});

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.                       
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);