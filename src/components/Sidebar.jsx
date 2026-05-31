import { useState } from "react";

function Sidebar() {
	const [menuEntries, setMenuEntries] = useState([
		{
			name: "Home",
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-home-2">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-10a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.793 8.707h-3a1.5 1.5 0 0 0 -1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5 -1.5v-3a1.5 1.5 0 0 0 -1.5 -1.5" />
				</svg>
			)
		},
		{
			name: "Applications",
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-apps">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M4 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" />
					<path d="M4 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" />
					<path d="M14 15a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" />
					<path d="M14 7l6 0" />
					<path d="M17 4l0 6" />
				</svg>
			)
		},
		{
			name: "Settings",
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-settings">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065" />
					<path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
				</svg>
			)
		},
		{
			name: "Themes",
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-palette">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
					<path d="M7.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
					<path d="M11.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
					<path d="M15.5 10.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
				</svg>
			)
		},
		{
			name: "System",
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-desktop">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10" />
					<path d="M7 20h10" />
					<path d="M9 16v4" />
					<path d="M15 16v4" />
				</svg>
			)
		},
		{
			name: "Power",
			icon: (
				<svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-power">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M7 6a7.75 7.75 0 1 0 10 0" />
					<path d="M12 4l0 8" />
				</svg>
			)
		},
	]);

	return (
		<div className="bg-zinc-950 border-r border-zinc-800 flex flex-col h-full w-75 px-8 py-12 gap-8">
			<h1 className="text-5xl text-center font-medium uppercase tracking-tighter text-blue-300 drop-shadow-[0_0_80px_rgba(59,130,246,0.9)]">
				Zentr
			</h1>

			<div className="flex flex-col">
				{menuEntries.map((entry, index) => (
					<button key={index} className="flex flex-row items-center justify-start gap-4 focus:bg-gray-900/80 text-zinc-100 focus:text-blue-300 rounded-lg focus:outline-none border-2 border-transparent focus:border-blue-400 py-3 px-6 transition-colors duration-200">
						{entry.icon}
						<h2 className="text-md">{entry.name}</h2>
					</button>
				))}
			</div>
		</div>
	);
}

export default Sidebar;