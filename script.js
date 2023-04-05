// Your JS goes here
let container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '800px';
container.style.height = '800px';



for (let i = 1; i <= 64; i++) {
    let tile = document.createElement('div');
    if (Math.floor((i - 1) / 8) % 2 === 0) {
        if (i % 2 === 1) {
        tile.style.background = 'black'
    } else {
        tile.style.background = 'red'
    }
    } else {
        if (i % 2 === 1) {
            tile.style.background = 'red'
        } else {
            tile.style.background = 'black'
        }
    }
    tile.style.width = '12.5%';
    tile.style.height = '12.5%';
    container.append(tile);
}

document.body.append(container)