export function xy (rect, x, y) {

    if (rect.width <= 0 || rect.height <= 0 ||rect.empty)
    {
        return false;
    }

    return (x >= rect.x && x < rect.right && y >= rect.y && y < rect.bottom);
    
}

export function vec2 (rect, vec2) {

    return this.xy(rect, vec2.x, vec2.y);

}

