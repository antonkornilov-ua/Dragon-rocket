// ==========================
// Hide loader section \\
setTimeout(() => {
    const loadSection = document.querySelector('.load_screen');
    loadSection.style.transition = 'opacity ' + 3 + 's';
    loadSection.style.opacity = 0;
    loadSection.addEventListener('transitionend', function () {
        console.log('event has been ended');
        loadSection.style.display = 'none';
    });
}, 4000);
// ==========================
// Show main info \\
setTimeout(() => {
    const mainSection = document.querySelector('.main_container');
    console.log('Data has been loaded');
    mainSection.style.display = 'flex';
}, 7300);
// ==========================
// Get info from server \\
const url = 'https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f';
const nameDragon = document.querySelector('.item1_info');
const typeDragon = document.querySelector('.item2_info');
const flyDragon = document.querySelector('.item3_info');
const heightDragon = document.querySelector('.item4_info');
const massDragon = document.querySelector('.item5_info');
const diameterDragon = document.querySelector('.item6_info');
const massPayloadDragon = document.querySelector('.item7_info');
const volPayloadDragon = document.querySelector('.item8_info');
const orbitDragon = document.querySelector('.item9_info');
const wikiLinkDragon = document.querySelector('.wiki_link');
const aboutDragon = document.querySelector('.about');
// ==========================
// Parse info from server \\
document.addEventListener('DOMContentLoaded', function () {
    fetch(url)
        .then((response) => {
            if (response.ok) {
                console.log(response.status);
                return response.json();
            } else throw new Error('Error code: ' + response.status);
        })
        .then((json) => {
            nameDragon.innerHTML = json.name;
            typeDragon.innerHTML = json.type;
            flyDragon.innerHTML = json.first_flight;
            heightDragon.innerHTML = json.height_w_trunk.meters + ' m';
            massDragon.innerHTML = json.dry_mass_kg + ' kg';
            diameterDragon.innerHTML = json.diameter.meters + ' m';
            massPayloadDragon.innerHTML = json.launch_payload_mass.kg + ' kg';
            volPayloadDragon.innerHTML = json.launch_payload_vol.cubic_meters + ' m';
            orbitDragon.innerHTML = json.orbit_duration_yr + ' years';
            wikiLinkDragon.href = json.wikipedia;
            aboutDragon.innerHTML = json.description;
        });
});
// ==========================
// Parse img from server \\
fetch(url)
    .then((r) => r.json())
    .then((d) => {
        document.querySelectorAll('.image_dragon').forEach((el, i) => (el.src = d.flickr_images[i]));
        initCarousel();
    });
// ==========================
// Swiper \\
function initCarousel() {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        keyboard: true,
        mousewheel: true,
    });
}
