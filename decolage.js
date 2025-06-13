export const decollage = (buttons = []) => {
    for (const string of buttons.slice(1)){
        const count = buttons.slice(1).filter((element) => element === string).length;
        if (count == 2) return string;
    }
}