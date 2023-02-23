const menuItems = document.querySelectorAll('.menu-item');

// messages
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.right .messages');
const message = document.querySelectorAll('.message');
const messageSearchBox = document.querySelector('#message-search');
let root = document.querySelector(':root');

// MiddleWare Functions
// Remove active class from all menu items
const toggleActiveClassesInAnArr = (arr) => {
    arr.forEach((item) => {
        item.classList.remove('active');
    });
};

// End of MiddleWares Functions
//////////////////////

// this adds the active class to the clicked item

menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        toggleActiveClassesInAnArr(menuItems);
        item.classList.add('active');
        if (item.id != 'notifications') {
            // this removes the display of notifications
            document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            // this adds the display of the notifications
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector(
                '#notifications .notification-count'
            ).style.display = 'none';
        }
    });
});

// Messages

messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display =
        'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
});

// Individual Message
const searchMessage = () => {
    const val = messageSearchBox.value.toLowerCase();
    message.forEach((chat) => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            console.log(val);
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    });
};

messageSearchBox.addEventListener('keyup', searchMessage);

// Theme Customization

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.theme-customization');

// theme Modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
};

const closeThemeModal = (e) => {
    if (e.target.classList.contains('theme-customization')) {
        themeModal.style.display = 'none';
    }
};

themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);

// Setting the Font Sizes
const fontSizes = document.querySelectorAll('.choose-size span');
fontSizes.forEach((size) => {
    let fontSize;
    size.addEventListener('click', () => {
        toggleActiveClassesInAnArr(fontSizes);
        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-10rem');
            root.style.setProperty('----sticky-top-right', '-33rem');
        }
        // change all font sizes
        document.querySelector('html').style.fontSize = fontSize;
        size.classList.add('active');
    });
});

// Change Primary Colors
const colorPalette = document.querySelectorAll('.choose-color span');
colorPalette.forEach((color) => {
    color.addEventListener('click', () => {
        toggleActiveClassesInAnArr(colorPalette);
        let primaryHue;
        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        root.style.setProperty('--primary-color-hue', primaryHue);
        color.classList.add('active');
    });
});

// THEME BACKGROUND

const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
};

Bg1.addEventListener('click', () => {
    Bg1.classList.add('active');

    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    window.location.reload();
});

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '15%';

    Bg2.classList.add('active');

    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});
Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '0%';

    Bg3.classList.add('active');

    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBG();
});