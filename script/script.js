let page = document.querySelector(".page");
let popup = document.querySelector(".popup");
let popupName = document.querySelector(".popup__name");
let popupProfession = document.querySelector(".popup__profession");

let profileIntroButtonEdit = document.querySelector(".profile-intro__button-edit");
let popupButtonClose = document.querySelector(".popup__button-close");
let popupButtonSave = document.querySelector(".popup__button-save");

let profileIntroName = document.querySelector(".profile-intro__name");
let profileIntroDescription = document.querySelector(".profile-intro__description");

profileIntroButtonEdit.addEventListener("click", function() {
    popup.classList.add("popup_opened");
    page.classList.add("page_dark")
})

popupButtonClose.addEventListener("click", function() {
    popup.classList.remove("popup_opened");
    page.classList.remove("page_dark");
})

popupName.value = profileIntroName.textContent;
popupProfession.value = profileIntroDescription.textContent;

popupButtonSave.addEventListener("click", function() {
    profileIntroName.textContent = popupName.value;
    profileIntroDescription.textContent = popupProfession.value;

    popup.classList.remove("popup_opened");
    page.classList.remove("page_dark");

})