import { Container } from "@/components";
import classes from "./Home.module.scss";
import VideoPlayer from "@/pages/Home/components/VideoPlayer.tsx";

const Home = () => {

	const videoJsOptions:any = {
		controls: true,
		responsive: true,
		fluid: true,
		sources: [
			{
				src: 'https://www.w3schools.com/html/mov_bbb.mp4', // Replace with your video file
				type: 'video/mp4',
			},
		],
		tracks: [
			{
				src: 'https://bitdash-a.akamaihd.net/content/sintel/subtitles/subtitles_en.vtt', // English subtitles
				kind: 'subtitles',
				srclang: 'en',
				label: 'English',
				default: true,
			},
			{
				src: 'https://bitdash-a.akamaihd.net/content/sintel/subtitles/subtitles_de.vtt', // German subtitles
				kind: 'subtitles',
				srclang: 'de',
				label: 'German',
			},
		],
	};


	return (
		<div className={classes.main}>
			<Container>
				<h1>Video.js with React and Vite</h1>
				<VideoPlayer options={videoJsOptions} />
			</Container>
		</div>
	);
};

export default Home;
