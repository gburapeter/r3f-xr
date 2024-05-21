import { Canvas } from "@react-three/fiber";
import { ARButton, Controllers, Hands, XR } from "@react-three/xr";

import "./App.css";
import { Panel } from "./Paneel";

function App() {
	return (
		<>
			<ARButton />
			<Canvas>
				<ambientLight intensity={5} color={"blue"} />
				<XR>
					<Controllers />
					<Hands />
					<Panel />
				</XR>
			</Canvas>
		</>
	);
}

export default App;
