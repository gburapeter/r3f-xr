import { XRButton, XR, Controllers, Hands, ARButton } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";

import "./App.css";
import { Panel } from "./Panel";

function App() {
	return (
		<>
			<ARButton />
			<Canvas>
				<ambientLight />
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
