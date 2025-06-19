const data = {
    effects: {
        reset: "\x1b[0m",
        bright: "\x1b[1m",
        dim: "\x1b[2m",
        italic: "\x1b[3m",
        underscore: "\x1b[4m",
        blink: "\x1b[5m",
        reverse: "\x1b[7m",
        hidden: "\x1b[8m",
        strikethrough: "\x1b[9m",
    },
    txt: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
        default: "\x1b[39m"
    },
    bg: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
        default: "\x1b[49m",
    }
}

export function txt(text, textColor) {
    const txtColor = data.txt[textColor] || data.txt.default;
    return `${txtColor}${text}${data.effects.reset}`
}
export function bg(text, bgColor) {
    const bgrColor = data.bg[bgColor] || data.bg.default;
    return `${bgrColor}${text}${data.effects.reset}`
}
export function effect(text, effect) {
    const txtEffect = data.effects[effect] || data.effects.bright
    return `${txtEffect}${text}${data.effects.reset}`

}
export function list(thing) {
    const lst = data[thing]
    for (const things in data[thing]) {
        console.log(`${things} ${lst[things]} Hello World!${data.effects.reset}`);
    }
}

