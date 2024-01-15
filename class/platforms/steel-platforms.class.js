import { canvasParams } from "../../canvas.js";



function createPlateformBigSteel() {
    const plateformBigS = new Image()
    plateformBigS.src = "../../images/plateform-steel01.png"
    return plateformBigS
}


function createPlateformLittleSteel() {
    const plateformLittleS = new Image()
    plateformLittleS.src = "../../images/plateform-steel02.png"
    return plateformLittleS
}



export let plateformLittleS = createPlateformLittleSteel("../../images/plateform-steel02.png")
export let plateformBigS = createPlateformBigSteel("../../images/plateform-steel01.png")

export let plateformBigSteel = new PlatformBigSteel();
export let plateformBigSteel02 = new PlatformBigSteel02();
export let plateformBigSteel03 = new PlatformBigSteel03();
export let plateformBigSteel04 = new PlatformBigSteel04();



export class PlatformBigSteel {
    constructor() {
        this.position = {
            x: 15920,
            y: 0,  // the position there is managed in the DisepearSteelPlatform() function
        }

        this.image = createPlateformBigSteel(plateformBigS)
        this.width = 89,
        this.height = 320
    }
    draw() {
        canvasParams.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw() 
        }
}

export class PlatformBigSteel02 {
    constructor() {
        this.position = {
            x: 17230,
            y: 0  // the position there is managed in the DisepearSteelPlatform() function
        }

        this.image = createPlateformBigSteel(plateformBigS)
        this.width = 89,
        this.height = 320
    }
    draw() {
        canvasParams.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw() 
        }
}


export class PlatformBigSteel03 {
    constructor() {
        this.position = {
            x: 18280,
            y: 0  // the position there is managed in the DisepearSteelPlatform() function
        }

        this.image = createPlateformBigSteel(plateformBigS)
        this.width = 89,
        this.height = 320
    }
    draw() {
        canvasParams.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw() 
        }
}


export class PlatformBigSteel04 {
    constructor() {
        this.position = {
            x: 18680,
            y: 0  // the position there is managed in the DisepearSteelPlatform() function
        }

        this.image = createPlateformBigSteel(plateformBigS)
        this.width = 89,
        this.height = 320
    }
    draw() {
        canvasParams.c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw() 
        }
}
