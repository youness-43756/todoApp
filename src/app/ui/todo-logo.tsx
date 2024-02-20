import { comfortaa } from "./font";

export default function TodoLogo() {
    return (
        <div
            className={`flex flex-row items-center leading-none text-white`}
        >
            <p className={`${comfortaa.className} text-2xl md:text-3xl`}>Todo App</p>
        </div>
    );
}
