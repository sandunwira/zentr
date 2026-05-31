import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import HomePage from "./pages/Home";

function App() {
	return (
		<Router>
			<div className="fixed top-0 left-0 h-dvh w-dvw">
				<Routes>
					<Route path="/" element={<Navigate to="/home" />} />
					<Route path="/home" element={<HomePage />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;