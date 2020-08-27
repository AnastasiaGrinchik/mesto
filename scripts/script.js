

let popup = document.querySelectorAll(".popup");
let popupProfile = document.querySelector(".popup_type_profile");
let popupAddCard = document.querySelector(".popup_type_add-card");
let popupImage = document.querySelector(".popup_type_image");


let profileIntroButtonEdit = document.querySelector(".profile__button-edit");
let popupButtonCloseProfile = document.querySelector(".popup__button-close");
let popupButtonCloseAddCard= document.querySelector(".popup__button-close_type_add-card");
let popupButtonCloseImage = document.querySelector(".popup__button-close_type_image");
let popupButtonSave = document.querySelector(".popup__button-save");
let popupButtonAdd = document.querySelector(".profile__button-add");
let popupButtonCreate = document.querySelector(".popup__button-create");

let profileName = document.querySelector(".profile__name");
let profileDescription = document.querySelector(".profile__description");

let formElement = document.querySelector(".popup__form");
let popupName = document.querySelector(".popup__input_type_name");
let popupProfession = document.querySelector(".popup__input_type_profession");
let popupTitle = document.querySelector(".popup__input_type_title");
let popupLink = document.querySelector(".popup__input_type_link");

let gallery = document.querySelector(".elements");


let popupShowAddCard = function() {
    popupAddCard.classList.add("popup_opened");
}

let popupShowProfile = function() {
    popupProfile.classList.add("popup_opened");
}


let popupCloseProfile = function() {
 popupProfile.classList.remove("popup_opened");
}

let popupCloseAddCard = function() {
    popupAddCard.classList.remove("popup_opened");
   }

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandlerProfile (event) { 
    event.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = popupName.value; 
    profileDescription.textContent = popupProfession.value;
    popupCloseProfile();                 
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandlerProfile);

// Массив с объектами, с которым будем работать в функции addСard(добавляя данные);
let initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

//Создаем карточки и заполняем их данными из массива
function createCard(arr) {
    let cardTemplate = document.querySelector("#cards").content;
    

//пробежались по циклу, для каждого i создается html заготовка. копируются данные из массива в каждую крточку и 
//вставляется
    for(i = 0; i < arr.length; i++) {

        let cardEmptyCopy = cardTemplate.cloneNode(true);

        let cardName = cardEmptyCopy.querySelector(".element__title");
        let cardImage = cardEmptyCopy.querySelector(".element__image");
        let cardDeleteButton = cardEmptyCopy.querySelector("button");
            cardDeleteButton.setAttribute("index", i);

        cardName.textContent = arr[i].name;
        cardImage.src = arr[i].link;

        gallery.prepend(cardEmptyCopy);
 
        console.log()
    }
// функция добавления лайка. прошлись через цикл по лайкам и добавили класс на активный
    let buttonLike = document.querySelectorAll(".element__button");
        function addLike() {
            for(i = 0; i < buttonLike.length; i++) {
                buttonLike[i].addEventListener("click", function(event) {
                    this.classList.add("element__like_active");
                })
            }
    }
    addLike();
}

createCard(initialCards);

//создаем новый объект и добавляем его в массив. createCard вызываем эту функцию - она создает карточки на основе 
//уже нового массива
function formAddCard(cardName, cardImage) {
    gallery.innerHTML = "";
    let popupTitleValue = popupTitle.value;
    let popupLinkValue = popupLink.value;

    let newObject = {
        name: popupTitleValue,
        link: popupLinkValue
    }

    initialCards.unshift(newObject);
    createCard(initialCards);
}


let buttonDeleteCard = document.querySelectorAll(".element__button-delete");

//прошлись по кнопкам удаления, отловили активный, удалили его
function deleteCard() {
    for(i = 0; i < buttonDeleteCard.length; i++) {
        buttonDeleteCard[i].addEventListener("click", function() {
            let cardActive = this.parentNode;
            cardActive.parentNode.removeChild(cardActive);
            
            let index = this.getAttribute("index");
            initialCards.splice(index, 1);      
        });
    }
}
deleteCard();

function openFullPopupImage() {
    let cardImage = document.querySelectorAll(".element__image");
        for(i = 0; i < cardImage.length; i++) {
            cardImage[i].addEventListener("click", function() {
                popupImage.classList.add("popup_opened");
                let cardImageLink = event.target.src;
                let img= popupImage.querySelector(".popup__image");
                img.src = cardImageLink;
                let subtitle = popupImage.querySelector(".popup__subtitle");
                subtitle.textContent = this.parentNode.querySelector(".element__title").textContent;
            })          
        }
}

openFullPopupImage();

let popupImageClose = function() {
    popupImage.classList.remove("popup_opened");
}

profileIntroButtonEdit.addEventListener("click", popupShowProfile);
popupButtonCloseProfile.addEventListener("click", popupCloseProfile);
popupButtonCloseAddCard.addEventListener("click", popupCloseAddCard);
popupButtonAdd.addEventListener("click", popupShowAddCard);
popupButtonCreate.addEventListener("click", popupCloseAddCard);
popupButtonCreate.addEventListener("click", formAddCard);
popupButtonCloseImage.addEventListener("click", popupImageClose)




