import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";

import { OrbitControls } from "@react-three/drei";
import "./App.css";
import { Panel } from "./Paneel";

function App() {
	return (
		<>
			<ARButton />

			<Canvas camera={{ position: [3, 3, 6] }}>
				<XR>
					<ambientLight />
					{/* <Panel /> */}
					<mesh>
						<boxGeometry />
						<meshBasicMaterial color="blue" />
					</mesh>
					<OrbitControls />
				</XR>
			</Canvas>
		</>
	);
}

export default App;
