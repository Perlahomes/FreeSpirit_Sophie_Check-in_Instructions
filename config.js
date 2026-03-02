// Centralized site data
const SITE_CONFIG = {
    mainHeading: "Welcome FreeSpirit Sophie",
    mapLink: "https://maps.app.goo.gl/HEBMN48xzXetUvZX6",
    touristLink: "https://messinia.mobi/el/article/upiresies/management-upiresies-sumbouleutikis/perla-homes-diaxeirisi-katalumaton/9493",
    wifi: {
        network: "FreeSpirit_2nd",
        password: "welcometofs2"
    },
    entranceCode: "0598",
    keyBoxCode: "0598"
};

// Populate HTML dynamically
window.addEventListener('DOMContentLoaded', () => {
    // Heading
    const heading = document.getElementById('main-heading');
    if (heading) heading.textContent = SITE_CONFIG.mainHeading;

    // Sidebar links
    const mapLinks = document.querySelectorAll('.map-link');
    mapLinks.forEach(a => a.href = SITE_CONFIG.mapLink);

    const touristLinks = document.querySelectorAll('.tourist-link');
    touristLinks.forEach(a => a.href = SITE_CONFIG.touristLink);

    // Wi-Fi info
    const wifiNetworkEls = document.querySelectorAll('#wifiNetwork');
    wifiNetworkEls.forEach(el => el.textContent = SITE_CONFIG.wifi.network);

    const wifiPasswordEls = document.querySelectorAll('#wifiPassword');
    wifiPasswordEls.forEach(el => el.textContent = SITE_CONFIG.wifi.password);

    // Entrance / Key Box code
    const entranceEls = document.querySelectorAll('#entranceCode');
    entranceEls.forEach(el => el.textContent = SITE_CONFIG.entranceCode);

    const keyBoxEls = document.querySelectorAll('#keyBoxCode');
    keyBoxEls.forEach(el => el.textContent = SITE_CONFIG.keyBoxCode);
});
