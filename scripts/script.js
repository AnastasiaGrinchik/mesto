

const popup = document.querySelectorAll(".popup");
const popupProfile = document.querySelector(".popup_type_profile");
const popupAddCard = document.querySelector(".popup_type_add-card");
const popupImage = document.querySelector(".popup_type_image");


const profileIntroButtonEdit = document.querySelector(".profile__button-edit");
const popupButtonCloseProfile = document.querySelector(".popup__button-close");
const popupButtonCloseAddCard= document.querySelector(".popup__button-close_type_add-card");
const popupButtonCloseImage = document.querySelector(".popup__button-close_type_image");
const popupButtonSave = document.querySelector(".popup__button-save");
const popupButtonAdd = document.querySelector(".profile__button-add");
const popupButtonCreate = document.querySelector(".popup__button-create");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const formElement = document.querySelector(".popup__form");
const popupName = document.querySelector(".popup__input_type_name");
const popupProfession = document.querySelector(".popup__input_type_profession");
const popupTitle = document.querySelector(".popup__input_type_title");
const popupLink = document.querySelector(".popup__input_type_link");

const gallery = document.querySelector(".elements");


const popupShowAddCard = function() {
    popupAddCard.classList.add("popup_opened");
}

const popupShowProfile = function() {
    popupProfile.classList.add("popup_opened");
}


const popupCloseProfile = function() {
 popupProfile.classList.remove("popup_opened");
}

const popupCloseAddCard = function() {
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
    const card = document.querySelector("#cards")
    const cardTemplate = card.content;
    

//пробежались по циклу, для каждого i создается html заготовка. копируются данные из массива в каждую крточку и 
//вставляется
    for(i = 0; i < arr.length; i++) {

        const cardEmptyCopy = cardTemplate.cloneNode(true);

        const cardName = cardEmptyCopy.querySelector(".element__title");
        const cardImage = cardEmptyCopy.querySelector(".element__image");
        const cardDeleteButton = cardEmptyCopy.querySelector("button");
              cardDeleteButton.setAttribute("index", i);

        cardName.textContent = arr[i].name;
        cardImage.src = arr[i].link;

        const buttonLike = cardEmptyCopy.querySelector(".element__button");
        const buttonDeleteCard = cardEmptyCopy.querySelector(".element__button-delete");
        const cardImageFull = cardEmptyCopy.querySelector(".element__image");

        //функция добавления лайка
        function addLike() {
            buttonLike.addEventListener("click", function(event) {
                event.target.classList.add("element__like_active");
            })
        }
        
        //функция удаления лайка
        function deleteCard() {
            buttonDeleteCard.addEventListener("click", function(event) {
                const cardActive = this.parentNode;
                cardActive.parentNode.removeChild(cardActive);
                const index = this.getAttribute("index");
                initialCards.splice(index, 1);      
            });
        }
        
        //функция открытия попапа с картинкой
        function openFullPopupImage() {
            cardImageFull.addEventListener("click", function(event) {
                popupImage.classList.add("popup_opened");
                let cardImageLink = event.target.src;
                const img = popupImage.querySelector(".popup__image");
                img.src = cardImageLink;
                const subtitle = popupImage.querySelector(".popup__subtitle");
                subtitle.textContent = this.parentNode.querySelector(".element__title").textContent;
            })                 
        }

        addLike();
        deleteCard();
        openFullPopupImage();     
        gallery.prepend(cardEmptyCopy);     
    }
}

createCard(initialCards);

//создаем новый объект и добавляем его в массив. createCard вызываем эту функцию - она создает карточки на основе 
//уже нового массива
function formAddCard(cardName, cardImage) {
    gallery.innerHTML = "";
    const popupTitleValue = popupTitle.value;
    const popupLinkValue = popupLink.value;

    const newObject = {
        name: popupTitleValue,
        link: popupLinkValue
    }

    initialCards.unshift(newObject);
    createCard(initialCards);
}


const popupImageClose = function() {
    popupImage.classList.remove("popup_opened");
}

profileIntroButtonEdit.addEventListener("click", popupShowProfile);
popupButtonCloseProfile.addEventListener("click", popupCloseProfile);
popupButtonCloseAddCard.addEventListener("click", popupCloseAddCard);
popupButtonAdd.addEventListener("click", popupShowAddCard);
popupButtonCreate.addEventListener("click", popupCloseAddCard);
popupButtonCreate.addEventListener("click", formAddCard);
popupButtonCloseImage.addEventListener("click", popupImageClose);