export function getImageSrc(filename: string): string {
    if (process.env.NODE_ENV === 'production') {
        return `https://flewyui.github.io/portfolio/images/${filename}`
    } else {
        return `/images/${filename}`
    }
}
