interface Rect {
    readonly id: string | number
    color?: string
    size: {
        width: number
        height: number
    }
}
const rect1: Rect = {
    id: 1234,
    size: {
        width: 20,
        height: 30
    },
    color: '#CCC'
}

const rect2: Rect = {
    id: '12345',
    size: {
        width: 10,
        height: 5
    }
}

rect2.color = 'black'
// rect2.id = 123 // error

const rect3 = {} as Rect //привести к типу Rect
const rect4 = <Rect>{} //привести к типу Rect

//=======================================

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: 12,
    size: {
        width: 22,
        height: 3
    },
    getArea(): number {
        return this.size.height * this.size.width
    }
}
//=================

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

//=======================
interface Styles {
    [key: string]: string
}
const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}