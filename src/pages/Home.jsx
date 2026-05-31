import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import Sidebar from "../components/Sidebar";

function HomePage() {
	const [now, setNow] = useState(() => new Date());
	const [recentEntries, setRecentEntries] = useState([
		{
			name: "Kodi",
			icon: "/images/apps/kodi.png"
		},
		{
			name: "YouTube Music",
			icon: "/images/apps/youtube-music.png"
		},
		{
			name: "Netflix",
			icon: "/images/apps/netflix.png"
		},
		{
			name: "Spotify",
			icon: "/images/apps/spotify.png"
		},
		{
			name: "Disney+",
			icon: "/images/apps/disney-plus.png"
		},
		{
			name: "YouTube",
			icon: "/images/apps/youtube.png"
		},
		{
			name: "Crunchyroll",
			icon: "/images/apps/crunchyroll.png"
		},
		{
			name: "Prime Video",
			icon: "/images/apps/prime-video.png"
		},
		{
			name: "Apple TV+",
			icon: "/images/apps/apple-tv-plus.png"
		}
	]);

	useEffect(() => {
		const timer = setInterval(() => {
			setNow(new Date());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<div className="flex flex-row h-full w-full">
			<Sidebar />

			<div className="flex-1 p-12 space-y-16 max-w-[calc(100vw-300px)]">
				{/* Background gradient overlay */}
				<div className="absolute top-0 left-0 w-full h-full bg-linear-to-tl from-blue-900/20 to-transparent pointer-events-none" />

				<div className="flex flex-row items-center justify-between w-full">
					<div className="flex flex-col items-start gap-2">
						<h1 className="text-4xl font-semibold uppercase text-gray-300">
							Good Morning!
						</h1>
						<p className="text-sm text-gray-400">
							Today is a great day to customize your settings and make Zentr truly yours.
						</p>
					</div>
					<div className="flex flex-col items-end gap-2">
						<h1 className="text-4xl font-semibold uppercase text-gray-300">
							{now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
						</h1>
						<p className="text-sm text-gray-400">
							{now.toLocaleDateString([], {
								weekday: "long",
								year: "numeric",
								month: "long",
								day: "numeric"
							})}
						</p>
					</div>
				</div>

				<div className="flex flex-row items-center justify-between w-full">
					<div className="w-full flex flex-col gap-4">
						<div className="flex flex-row items-center gap-2">
							<h1 className="text-2xl font-semibold uppercase text-gray-300">
								Now Playing
							</h1>
							<div className="h-6 max-h-6 w-6 max-w-6 text-zinc-400">
								<svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
									viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
									<rect x="20" y="20" width="16" height="40" fill="currentColor">
										<animateTransform attributeType="xml"
											attributeName="transform" type="translate"
											values="0 0; 0 20; 0 0"
											begin="0" dur="1.2s" repeatCount="indefinite" />
									</rect>
									<rect x="45" y="20" width="16" height="40" fill="currentColor">
										<animateTransform attributeType="xml"
											attributeName="transform" type="translate"
											values="0 0; 0 20; 0 0"
											begin="0.2s" dur="1.2s" repeatCount="indefinite" />
									</rect>
									<rect x="70" y="20" width="16" height="40" fill="currentColor">
										<animateTransform attributeType="xml"
											attributeName="transform" type="translate"
											values="0 0; 0 20; 0 0"
											begin="0.4s" dur="1.2s" repeatCount="indefinite" />
									</rect>
								</svg>
							</div>
						</div>
						<div className="flex flex-row items-center justify-between gap-6 max-h-40 p-6 bg-zinc-800/80 focus:bg-gray-900/80 text-zinc-100 focus:text-blue-300 rounded-lg focus:outline-none border-2 border-transparent focus:border-blue-400 transition-colors duration-200">
							<div className="flex flex-row items-center gap-4">
								<img src="/images/apps/spotify.png" alt="Spotify" className="w-16 h-16 rounded-md object-contain" />
								<div className="flex flex-col items-start gap-1">
									<p className="text-sm text-zinc-300">Spotify</p>
									<p className="text-lg font-medium">Blinding Lights</p>
									<p className="text-sm text-gray-400">The Weeknd</p>
								</div>
							</div>
							<div className="flex flex-row items-center gap-4">
								<button className="p-3 bg-transparent focus:bg-zinc-400/60 disabled:bg-transparent text-zinc-100 disabled:text-zinc-100/30 focus:outline-none transition-colors duration-200 rounded-full" disabled>
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-player-skip-back">
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M19.496 4.136l-12 7a1 1 0 0 0 0 1.728l12 7a1 1 0 0 0 1.504 -.864v-14a1 1 0 0 0 -1.504 -.864z" />
										<path d="M4 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z" />
									</svg>
								</button>
								<button className="p-3 bg-transparent focus:bg-zinc-400/60 disabled:bg-transparent text-zinc-100 disabled:text-zinc-100/30 focus:outline-none transition-colors duration-200 rounded-full">
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-player-pause">
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" />
										<path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" />
									</svg>
								</button>
								<button className="p-3 bg-transparent focus:bg-zinc-400/60 disabled:bg-transparent text-zinc-100 disabled:text-zinc-100/30 focus:outline-none transition-colors duration-200 rounded-full">
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-player-skip-forward">
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M3 5v14a1 1 0 0 0 1.504 .864l12 -7a1 1 0 0 0 0 -1.728l-12 -7a1 1 0 0 0 -1.504 .864z" />
										<path d="M20 4a1 1 0 0 1 .993 .883l.007 .117v14a1 1 0 0 1 -1.993 .117l-.007 -.117v-14a1 1 0 0 1 1 -1z" />
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-row items-center justify-between w-full">
					<div className="flex flex-col gap-4">
						<h1 className="text-2xl font-semibold uppercase text-gray-300">
							Recents
						</h1>
						<div className="flex flex-row max-w-[calc(100vw-396px)] overflow-x-auto scrollbar-hide gap-4">
							{recentEntries.map((entry, index) => (
								<button key={index} className="flex flex-col items-center justify-center gap-4 min-w-40 max-w-40 min-h-40 max-h-40 py-6 bg-zinc-800/80 focus:bg-gray-900/80 text-zinc-100 focus:text-blue-300 rounded-lg focus:outline-none border-2 border-transparent focus:border-blue-400 transition-colors duration-200">
									<img src={entry.icon} alt={entry.name} className="w-16 h-16 rounded-md object-contain" />
									<p className="text-sm text-zinc-300 whitespace-nowrap truncate">{entry.name}</p>
								</button>
							))}
						</div>
					</div>
				</div>

				{/* <div className="flex flex-row items-center justify-between w-full">
					<div className="flex flex-col gap-4">
						<h1 className="text-2xl font-semibold uppercase text-gray-300">
							Welcome to Zentr
						</h1>
						<p className="text-sm text-gray-400">
							Your centralized hub for all your settings and preferences.
						</p>
					</div>
				</div> */}
			</div>
		</div>
	);
}

export default HomePage;