const url = './data.json';
async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}
document.addEventListener('DOMContentLoaded', async (e) =>{
    const data = await getData(url);
    const list = document.querySelector('.cardList');
    data.forEach(element => {
        list.insertAdjacentHTML('beforeend', `<div class="cardItem">
            <img src="${element.img}" alt="${element.title}">
            <div class="decription">
                <h3>${element.title}</h3>
                <p>${element.description}</p>
                <h3 class="price"><span style="color: #f16d7f;"><b>$${element.price}</b></span></h3>
            </div>`)
    });
})


