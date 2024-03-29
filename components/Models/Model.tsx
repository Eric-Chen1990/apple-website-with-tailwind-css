import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

import React, { useLayoutEffect } from "react";

import { useColorStore } from "store";

type GLTFResult = GLTF & {
	nodes: {
		Body_Mic_0: THREE.Mesh;
		Body_Bezel_0: THREE.Mesh;
		Body_Body_0: THREE.Mesh;
		Body_Wallpaper_0: THREE.Mesh;
		Body_Camera_Glass_0: THREE.Mesh;
		Body_Lens_0: THREE.Mesh;
		Body_Material_0: THREE.Mesh;
		Camera_Body_0: THREE.Mesh;
		Camera_Glass_0: THREE.Mesh;
		Camera_Camera_Frame001_0: THREE.Mesh;
		Camera_Mic_0: THREE.Mesh;
		Body001_Screen_Glass_0: THREE.Mesh;
		Button_Frame_0: THREE.Mesh;
		Circle003_Frame_0: THREE.Mesh;
		Apple_Logo_Logo_0: THREE.Mesh;
		Camera001_Body_0: THREE.Mesh;
		Camera001_Gray_Glass_0: THREE.Mesh;
		Camera001_Flash_0: THREE.Mesh;
		Camera001_Port_0: THREE.Mesh;
		Camera001_Camera_Frame_0: THREE.Mesh;
		Camera001_Camera_Glass_0: THREE.Mesh;
		Camera001_Lens_0: THREE.Mesh;
		Camera001_Black_Glass_0: THREE.Mesh;
		Camera003_Material002_0: THREE.Mesh;
		Frame_Frame_0: THREE.Mesh;
		Frame_Frame2_0: THREE.Mesh;
		Frame_Port_0: THREE.Mesh;
		Frame_Antenna_0: THREE.Mesh;
		Frame_Mic_0: THREE.Mesh;
	};
	materials: {
		material: THREE.MeshStandardMaterial;
		Bezel: THREE.MeshStandardMaterial;
		Body: THREE.MeshStandardMaterial;
		Wallpaper: THREE.MeshStandardMaterial;
		Camera_Glass: THREE.MeshStandardMaterial;
		Lens: THREE.MeshStandardMaterial;
		Material: THREE.MeshStandardMaterial;
		Glass: THREE.MeshStandardMaterial;
		["Camera_Frame.001"]: THREE.MeshStandardMaterial;
		Screen_Glass: THREE.MeshStandardMaterial;
		Frame: THREE.MeshStandardMaterial;
		Logo: THREE.MeshStandardMaterial;
		Gray_Glass: THREE.MeshStandardMaterial;
		Flash: THREE.MeshStandardMaterial;
		Port: THREE.MeshStandardMaterial;
		Camera_Frame: THREE.MeshStandardMaterial;
		Black_Glass: THREE.MeshStandardMaterial;
		Frame2: THREE.MeshStandardMaterial;
		Antenna: THREE.MeshStandardMaterial;
	};
};

export function Model(props: JSX.IntrinsicElements["group"]) {
	const color = useColorStore((state) => state.color);
	const { nodes, materials } = useGLTF(
		"/3D-Model/scene-transformed.glb",
		"/draco-gltf/"
	) as unknown as GLTFResult;

	useLayoutEffect(() => {
		materials.Body.color.set(color);
	}, [color]);

	return (
		<group {...props} dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 0]}>
				<group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
					<group scale={100}>
						<mesh
							geometry={nodes.Body_Mic_0.geometry}
							material={materials.material}
						/>
						<mesh
							geometry={nodes.Body_Bezel_0.geometry}
							material={materials.Bezel}
						/>
						<mesh
							geometry={nodes.Body_Body_0.geometry}
							material={materials.Body}
						/>
						<mesh
							geometry={nodes.Body_Wallpaper_0.geometry}
							material={materials.Wallpaper}
						/>
						<mesh
							geometry={nodes.Body_Camera_Glass_0.geometry}
							material={materials.Camera_Glass}
						/>
						<mesh
							geometry={nodes.Body_Lens_0.geometry}
							material={materials.Lens}
						/>
						<mesh
							geometry={nodes.Body_Material_0.geometry}
							material={materials.Material}
						/>
						<mesh
							geometry={nodes.Camera_Body_0.geometry}
							material={materials.Body}
						/>
						<mesh
							geometry={nodes.Camera_Glass_0.geometry}
							material={materials.Glass}
						/>
						<mesh
							geometry={nodes.Camera_Camera_Frame001_0.geometry}
							material={materials["Camera_Frame.001"]}
						/>
						<mesh
							geometry={nodes.Camera_Mic_0.geometry}
							material={materials.material}
						/>
						<mesh
							geometry={nodes.Body001_Screen_Glass_0.geometry}
							material={materials.Screen_Glass}
						/>
						<mesh
							geometry={nodes.Button_Frame_0.geometry}
							material={materials.Frame}
						/>
						<mesh
							geometry={nodes.Circle003_Frame_0.geometry}
							material={materials.Frame}
						/>
						<mesh
							geometry={nodes.Apple_Logo_Logo_0.geometry}
							material={materials.Logo}
						/>
						<mesh
							geometry={nodes.Camera001_Body_0.geometry}
							material={materials.Body}
						/>
						<mesh
							geometry={nodes.Camera001_Gray_Glass_0.geometry}
							material={materials.Gray_Glass}
						/>
						<mesh
							geometry={nodes.Camera001_Flash_0.geometry}
							material={materials.Flash}
						/>
						<mesh
							geometry={nodes.Camera001_Port_0.geometry}
							material={materials.Port}
						/>
						<mesh
							geometry={nodes.Camera001_Camera_Frame_0.geometry}
							material={materials.Camera_Frame}
						/>
						<mesh
							geometry={nodes.Camera001_Camera_Glass_0.geometry}
							material={materials.Camera_Glass}
						/>
						<mesh
							geometry={nodes.Camera001_Lens_0.geometry}
							material={materials.Lens}
						/>
						<mesh
							geometry={nodes.Camera001_Black_Glass_0.geometry}
							material={materials.Black_Glass}
						/>
						<mesh
							geometry={nodes.Camera003_Material002_0.geometry}
							material={materials.Black_Glass}
						/>
						<mesh
							geometry={nodes.Frame_Frame_0.geometry}
							material={materials.Frame}
						/>
						<mesh
							geometry={nodes.Frame_Frame2_0.geometry}
							material={materials.Frame2}
						/>
						<mesh
							geometry={nodes.Frame_Port_0.geometry}
							material={materials.Port}
						/>
						<mesh
							geometry={nodes.Frame_Antenna_0.geometry}
							material={materials.Antenna}
						/>
						<mesh
							geometry={nodes.Frame_Mic_0.geometry}
							material={materials.material}
						/>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/3D-Model/scene-transformed.glb", "/draco-gltf/");
