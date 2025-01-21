let menu = document.querySelector("#menu");
let html = document.querySelector("html");
let body = document.querySelector("body");

let menuIsOpen = false;

let toggleMenu = () => {
    menuIsOpen ? closeMenu() : openMenu();
}

function openMenu() {
    menu.classList.add("--show-menu");
    html.classList.add("--overflow-hidden");
    body.classList.add("--overflow-hidden");

    menuIsOpen = true;
}

function closeMenu() {
    menu.classList.remove("--show-menu");
    html.classList.remove("--overflow-hidden");
    body.classList.remove("--overflow-hidden");

    menuIsOpen = false;
}


// LOGISTICS
const image = document.getElementById('logistics-smart-img');
const info_label = document.getElementById('label-info');
const container = document.querySelector('.logistics-img-cont');

let currentStep = 0;

// Определяем шаги как относительные значения
const steps = [
    {scale: 1, translateX: 0, translateY: 0}, // Шаг 1: начальная позиция
    {scale: 3.5, translateX: -160, translateY: -430}, // Шаг 2
    {scale: 3.2, translateX: -30, translateY: -330}, // Шаг 3
    {scale: 3.2, translateX: 0, translateY: -210}, // Шаг 4
    {scale: 3.6, translateX: -40, translateY: -110}, // Шаг 5
    {scale: 3.2, translateX: -120, translateY: -10}, // Шаг 6
    {scale: 3.5, translateX: -285, translateY: -20}, // Шаг 7
    {scale: 3.5, translateX: -380, translateY: -110}, // Шаг 8
    {scale: 3.2, translateX: -400, translateY: -210}, // Шаг 9
    {scale: 3.2, translateX: -390, translateY: -330}, // Шаг 10
    {scale: 3.5, translateX: -270, translateY: -430}, // Шаг 11
];

function changeLocationLabel() {
    if (currentStep) {
        info_label.innerText = `Шаг ${currentStep}`;
        container.classList.add('--box-card-shadow')
    } else {
        info_label.innerText = 'Карта';
        container.classList.remove('--box-card-shadow');
    }
}

function updateImage() {
    const step = steps[currentStep];
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Рассчитываем относительные координаты и масштаб
    const scale = step.scale;
    const translateX = (step.translateX / 600) * containerWidth; // 600 - исходная ширина
    const translateY = (step.translateY / 600) * containerHeight; // 600 - исходная высота

    image.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
}

document.getElementById('nextStep').addEventListener('click', () => {
    if (currentStep < steps.length - 1) {
        currentStep++;
    } else {
        currentStep = 0;
    }
    updateImage();
    changeLocationLabel();
});

document.getElementById('prevStep').addEventListener('click', () => {
    if (currentStep > 0) {
        currentStep--;
    } else {
        currentStep = steps.length - 1;
    }
    updateImage();
    changeLocationLabel();
});

document.getElementById('label-info').addEventListener('click', () => {
    currentStep = 0;
    updateImage();
    changeLocationLabel();
});

// Начальное обновление
updateImage();