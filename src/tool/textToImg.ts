export default text => {

    let canvas = document.createElement('canvas')
    let width = text.content.length * 16
    let height = 16

    // 根据文字设置画布大小
    canvas.width = width
    canvas.height = height

    let painter = canvas.getContext("2d")

    painter.font = "14px sans-serif"
    painter.textBaseline = 'middle'
    painter.textAlign = 'center'
    painter.fillStyle = text.color

    painter.fillText(text.content, width * 0.5, height * 0.5)

    return {
        data: painter.getImageData(0, 0, width, height),
        width,
        height
    }
}
