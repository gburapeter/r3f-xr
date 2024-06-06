import { Canvas } from "@react-three/fiber";
import { Controllers, Hands, XR, XRButton } from "@react-three/xr";

import "./App.css";
import { Panel } from "./Paneel";
import { OrbitControls } from "@react-three/drei";

function App() {
	return (
		<>
			<XRButton mode="AR" />
			<Canvas camera={{ position: [3, 3, 6] }}>
				<XR referenceSpace="local-floor">
					<ambientLight intensity={5} color={"blue"} />
					<Controllers />
					<Hands />
					<ambientLight />
					<Panel />
					<OrbitControls />
				</XR>
			</Canvas>
		</>
	);
}

export default App;
