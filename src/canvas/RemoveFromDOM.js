export default function (canvas) {

    if (canvas.parentNode)
    {
        canvas.parentNode.removeChild(canvas);
    }

}
