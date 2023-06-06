const createMenuPage = () => {

    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const heading = document.createElement('h1');
    heading.textContent = "Menu";

    const menuList = document.createElement('ul');
    const menuItem1 = document.createElement('li');
    menuItem1.textContent = "Pomodoro";
    const menuItem2 = document.createElement('li');
    menuItem2.textContent = "Bolognesa";
    const menuItem3 = document.createElement('li');
    menuItem3.textContent = "Alfredo";
    menuList.append(menuItem1, menuItem2, menuItem3);

    pageContent.append(heading, menuList);
    content.appendChild(pageContent);
}

export default createMenuPage;

