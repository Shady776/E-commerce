const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-icon');
const closeMenuIcon = document.querySelector('.close-menu');

const openMenu = () => {
    menu.style.display = "grid"; // Show the menu as a grid
    menuIcon.style.display = "none"; // Hide the open button
    closeMenuIcon.style.display = "block"; // Show the close button
}

const closeMenu = () => {
    menu.style.display = "none"; // Hide the menu
    menuIcon.style.display = "block"; // Show the open button
    closeMenuIcon.style.display = "none"; // Hide the close button
}
