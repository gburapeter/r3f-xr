import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

export function Panel(props) {
	const { nodes, materials } = useGLTF("/paneel.glb");
	const material = new MeshStandardMaterial({ color: "blue" });
	return (
		<group scale={3} {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.frame_left.geometry}
				material={material}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.glass.geometry}
				material={material}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.frame_right.geometry}
				material={material}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.frame_top.geometry}
				material={material}
				scale={[1.003, 1, 1]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.frame_bottom.geometry}
				material={material}
				scale={[1.002, 1, 1]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.misc_0.geometry}
				material={material}
				scale={[1.046, 1.144, 1]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.beam.geometry}
				material={material}
				position={[0, 1.669, 0]}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.misc_1.geometry}
				material={material}
				scale={[1.047, 1.144, 1]}
			/>
		</group>
	);
}

useGLTF.preload("/paneel.glb");
