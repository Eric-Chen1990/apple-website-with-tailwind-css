import create from "zustand";

interface ColorState {
	color: string;
	text: string;
	rgbColor: string;
}

const useColorStore = create<ColorState>((set) => ({
	color: "#9BB5CE",
	text: "Sierra Blue",
	rgbColor: "155, 181, 206",
}));

export { useColorStore };
