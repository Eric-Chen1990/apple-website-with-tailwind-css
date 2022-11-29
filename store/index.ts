import create from "zustand";

interface ColorState {
	color: string;
	text: string;
	rgbColor: string;
}
interface AppState {
	loading: boolean;
}

const useColorStore = create<ColorState>((set) => ({
	color: "#9BB5CE",
	text: "Sierra Blue",
	rgbColor: "155, 181, 206",
}));

const useAppStore = create<AppState>((set) => ({
	loading: true,
}));

export { useColorStore, useAppStore };
