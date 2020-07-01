let popup = document.querySelector(".popup");

let profileIntroButtonEdit = document.querySelector(".profile__button-edit");
let popupButtonClose = document.querySelector(".popup__button-close");
let popupButtonSave = document.querySelector(".popup__button-save");

let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");

let formElement = document.querySelector(".popup__form");
let popupName = document.querySelector(".popup__input_type_name");
let popupProfession = document.querySelector(".popup__input_type_profession");


//функция popupToggle проверяет отсутствие класса popup__opened. Если
// отсутствует - заполняет инпуты
// добавляет класс popup__opened если его нет, убирает если класс есть. 
let popupToggle = function() {
    if (!popup.classList.contains("popup_opened")) {
        popupName.value = profileName.textContent; 
        popupProfession.value = profileDescription.textContent; 
    }
    popup.classList.toggle("popup_opened");
}

profileIntroButtonEdit.addEventListener("click", popupToggle);
popupButtonClose.addEventListener("click", popupToggle);


// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = popupName.value; 
    profileDescription.textContent = popupProfession.value;
    popupToggle();                   
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);