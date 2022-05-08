export default text => {

    let canvas = document.createElement('canvas')
    let height = 16
    let width = text.content.length * height

    // 根据文字设置画布大小
    canvas.width = width
    canvas.height = height

    let painter = canvas.getContext("2d")

    painter.font = height*0.9 + "px sans-serif"
    painter.textBaseline = 'middle'
    painter.textAlign = 'center'
    painter.fillStyle = text.color

    painter.clearRect(0, 0, width, height)
    painter.fillText(text.content, width * 0.5, height * 0.5)

    return {
        data: canvas,
        width,
        height
    }
}
