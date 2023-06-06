const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

   /*  const image = document.createElement('img');
    image.src = './src/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg';
    image.height = '300';
    pageContent.appendChild(image);
 */
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to our restaurant!';
    pageContent.appendChild(headline);

    const copy = document.createElement('p');
    copy.textContent = "als;dfasdfaslkjd falsjdf lakdf laksd flkaj dfaslkfda fd";
    pageContent.appendChild(copy);
    content.appendChild(pageContent);
}
export default createRestaurantHomePage