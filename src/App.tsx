import { Canvas } from "@react-three/fiber";
import { Controllers, Hands, XR, XRButton } from "@react-three/xr";

import "./App.css";

function App() {
	return (
		<>
			<XRButton mode="AR" />
			<Canvas>
				<ambientLight intensity={5} color={"blue"} />
				<XR>
					<Controllers />
					<Hands />
					<mesh>
						<boxGeometry />
						<meshBasicMaterial color="blue" />
					</mesh>
				</XR>
			</Canvas>
		</>
	);
}

export default App;
