import { games } from "./store.js";
let c = 0;
export function loggerWork() {
    setInterval(() => {
        c++;
        console.log("log count : " + c);
        console.log(games);
    }, 5000);
}
// loggerWork();
//# sourceMappingURL=logger.js.map