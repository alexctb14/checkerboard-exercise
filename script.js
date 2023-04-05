// Your JS goes here
let container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '800px';
container.style.height = '800px';



for (let i = 1; i <= 64; i++) {
    let tile = document.createElement('div');
    tile.style.width = '12.5%';
    tile.style.height = '12.5%';

    let randomR = Math.floor(Math.random() * 256);
    let randomG = Math.floor(Math.random() * 256);
    let randomB = Math.floor(Math.random() * 256);

    tile.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    container.append(tile);
}

document.body.append(container)