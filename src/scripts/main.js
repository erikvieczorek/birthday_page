AOS.init();

document.addEventListener("DOMContentLoaded", function () {

    // Rolar a página até a seção "confirmar"
    const scrollToConfirmationButton = document.getElementById("scroll-to-confirmation");
    const confirmationSection = document.getElementById("confirmation");
    if (scrollToConfirmationButton && confirmationSection) {
        scrollToConfirmationButton.addEventListener("click", function () {
            confirmationSection.scrollIntoView({ behavior: "smooth" });
        });
    }


    // Mensagens de erro nas lacunas vazias
    const form = document.querySelector(".event__confirmation");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    form.addEventListener("submit", function (event) {
        let hasError = false;

        if (nameInput.value.trim() === "") {
            nameError.textContent = "*Campo obrigatório";
            hasError = true;
        } else {
            nameError.textContent = "";
        }

        if (emailInput.value.trim() === "") {
            emailError.textContent = "*Campo obrigatório";
            hasError = true;
        } else {
            emailError.textContent = "";
        }

        if (hasError) {
            event.preventDefault();
        } else {
            alert("Confirmado com sucesso!");
        }
    });

    nameInput.addEventListener("input", function () {
        nameError.textContent = "";
    });

    emailInput.addEventListener("input", function () {
        emailError.textContent = "";
    });

    // Função de ocultar header e verificar scroll da página
    window.addEventListener('scroll', verificarScroll);

    function verificarScroll() {
        if (window.scrollY > 20) {
            exibeElementosDoHeader();
        } else {
            ocultaElementosDoHeader();
        }
    }

    function ocultaElementosDoHeader() {
        const header = document.querySelector('header');
        header.classList.remove('header--is-hidden');
    }

    function exibeElementosDoHeader() {
        const header = document.querySelector('header');
        header.classList.add('header--is-hidden');
    }


    //  Função de contagem regressiva
    const dataDoEvento = new Date("Nov 26, 2023 19:00:00");
    const timeStampDoEvento = dataDoEvento.getTime();

    const contaAsHoras = setInterval(function() {
        const agora = new Date();
        const timeStampAtual = agora.getTime();

        const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

        const diaEmMs = 1000 * 60 * 60 * 24;
        const horaEmMs = 1000 * 60 * 60;
        const minutoEmMs = 1000 * 60;

        const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
        const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
        const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
        const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

        document.getElementById('contador').innerHTML = `Meu aniversário é daqui: </br> ${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

        if (distanciaAteOEvento < 0) {
            clearInterval(contaAsHoras);
            document.getElementById('contador').innerHTML = 'Evento expirado';
        }
    }, 1000);
});
