module.exports = {
    // JIT (just-in-time) ビルド高速化
    // content ビルド生成時の未使用のスタイルを除外しパフォーマンス最適化
    mode: 'jit',
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            // that is animation class
            animation: {
                fadeIn: 'fadeIn 0.3s linear',
            },
            // that is actual animation
            keyframes: () => ({
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
            }),
        },
    },
    plugins: [],
}
