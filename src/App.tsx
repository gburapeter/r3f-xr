import { Canvas } from "@react-three/fiber";
import { ARButton, Controllers, Hands, XR } from "@react-three/xr";

import "./App.css";

function App() {
	return (
		<>
			<ARButton />
			<Canvas>
				<ambientLight />
				<XR>
					<Controllers />
					<Hands />
				</XR>
			</Canvas>
		</>
	);
}

export default App;
