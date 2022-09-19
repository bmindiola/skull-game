const canvas = document.querySelector('#game')

const game = canvas.getContext('2d')

window.addEventListener('load', gameMain)
window.addEventListener('resize', gameMain)


function gameMain() {
    elementSize = adjustCanva()
    renderMap(elementSize)
}

function renderMap(elementSize) {

    game.font = `${elementSize * 0.85}px Verdana`

    let map = maps[2]
    let mapp = map.trim().split('\n')
    let mapClean = mapp.map(element => element.trim().split(''))

    console.log(mapClean)

    mapClean.forEach((row, rowI) => {
        row.forEach(
            (col, colI) => {
                let emoji = emojis[col]
                posX = colI * elementSize
                posY = (rowI + 1) * elementSize
                game.fillText(emoji, posX, posY)
            })
    })

    // for (let row = 1; row <= 10; row++) {
    //     mapRow = mapp[row - 1]
    //   for (let col = 0; col < 10; col++) {
    //         game.fillText(emojis[mapRow[col]], col * elementSize, row * elementSize)
    //     }
    // }
}

function adjustCanva() {
    let sWidth = window.innerWidth
    let sHeight = window.innerHeight

    let canvaSize = sWidth > sHeight ? sHeight * 0.6 : sWidth * 0.6
    let corr = 0.015 * canvaSize

    canvas.setAttribute('width', canvaSize - corr)
    canvas.setAttribute('height', canvaSize + corr)

    let elementSize = ( canvaSize * 0.98 ) / 10

    return elementSize
}