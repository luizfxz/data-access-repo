const openModalButton = document.querySelector("#open-modal");
const linkOpenFaq = document.querySelector("#linkOpenFaq");
        const closeModalButton = document.querySelector("#close-modal");

        const modal = document.querySelector("#modal");
        const fade = document.querySelector("#fade");

        const toggleModal = () => {

            [modal, fade].forEach((el) => el.classList.toggle("hide"));


        };

        [linkOpenFaq,openModalButton, closeModalButton, fade].forEach((el) => {

            el.addEventListener("click", () => toggleModal());
            
        });