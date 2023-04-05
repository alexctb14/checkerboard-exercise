// Your JS goes here
let container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '800px';
container.style.height = '800px';
container.style.position = 'relative'
container.style.border = "thick solid black"



for (let i = 0; i < 64; i++) {
    let tile = document.createElement('div');
    tile.style.width = '12.5%';
    tile.style.height = '12.5%';
    let color1 = 'blue'
    let color2 = 'red'

    if ((i + Math.floor(i / 8)) % 2 === 0) {
        tile.style.background = color1
    } else {
        tile.style.background = color2
    }
    //tile.style.background = `linear-gradient(to bottom right, ${color1}, ${color2})`
    container.append(tile);
}
let color1 = 'red';
let color2 = 'transparent'
let gradientOverlay = document.createElement('div');
gradientOverlay.style.display = 'flex';
gradientOverlay.style.flexWrap = 'wrap';
gradientOverlay.style.width = '800px';
gradientOverlay.style.height = '800px';
gradientOverlay.style.background = `linear-gradient(to bottom right, ${color1}, ${color2})`;
gradientOverlay.style.position = 'absolute'
gradientOverlay.style.opacity = '1'
gradientOverlay.style.zIndex = '10'



document.body.append(container)
container.append(gradientOverlay)
console.log(container)