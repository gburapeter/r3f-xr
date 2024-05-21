import { Canvas } from "@react-three/fiber";
import { Controllers, Hands, XR, XRButton } from "@react-three/xr";

import "./App.css";
import { Panel } from "./Paneel";

function App() {
	return (
		<>
			<XRButton mode="AR" />
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
