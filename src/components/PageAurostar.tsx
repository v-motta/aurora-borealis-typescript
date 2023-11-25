import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SubscriberCount from "./SubscriberCount";
import { Link, useLocation } from "react-router-dom";

import xLogo from "../assets/imgs/x.webp";
import youtubeLogo from "../assets/imgs/youtube.webp";

import torajoGrayPortrait from "../assets/imgs/torajo-gray.webp"
import torajoColorPortrait from "../assets/imgs/torajo-color.webp"

import jesseGrayPortrait from "../assets/imgs/jesse-gray.webp"
import jesseColorPortrait from "../assets/imgs/jesse-color.webp"

import yukimeGrayPortrait from "../assets/imgs/yukime-gray.webp"
import yukimeColorPortrait from "../assets/imgs/yukime-color.webp"

import carolitaGrayPortrait from "../assets/imgs/carolita-gray.webp"
import carolitaColorPortrait from "../assets/imgs/carolita-color.webp"

import kuroGrayPortrait from "../assets/imgs/kuro-gray.webp"
import kuroColorPortrait from "../assets/imgs/kuro-color.webp"

import meikoGrayPortrait from "../assets/imgs/meiko-gray.webp"
import meikoColorPortrait from "../assets/imgs/meiko-color.webp"

import purpleGrayPortrait from "../assets/imgs/purple-gray.webp"
import purpleColorPortrait from "../assets/imgs/purple-color.webp"

import pardalGrayPortrait from "../assets/imgs/pardal-gray.webp"
import pardalColorPortrait from "../assets/imgs/pardal-color.webp"

import floraGrayPortrait from "../assets/imgs/flora-gray.webp"
import floraColorPortrait from "../assets/imgs/flora-color.webp"

interface PageAurostarProps {
	img: string;
	bgName: string;
	aurostar: string;
	loreStart: string;
	loreEnd: string;
	linkTwitter: string;
	linkYoutube: string;
	gender: string;
	channelId: string;
	followers: string;
	linkLojaAurostar: string;
}

const PageAurostar = ({ img, bgName, aurostar, loreStart, loreEnd, linkTwitter, linkYoutube, gender, channelId, followers, linkLojaAurostar }: PageAurostarProps) => {
	const [torajoPortrait, setTorajoPortrait] = useState(torajoGrayPortrait);
	const [jessePortrait, setJessePortrait] = useState(jesseGrayPortrait);
	const [yukimePortrait, setYukimePortrait] = useState(yukimeGrayPortrait);
	const [carolitaPortrait, setCarolitaPortrait] = useState(carolitaGrayPortrait);
	const [kuroPortrait, setKuroPortrait] = useState(kuroGrayPortrait);
	const [meikoPortrait, setMeikoPortrait] = useState(meikoGrayPortrait);
	const [purplePortrait, setPurplePortrait] = useState(purpleGrayPortrait);
	const [pardalPortrait, setPardalPortrait] = useState(pardalGrayPortrait);
	const [floraPortrait, setFloraPortrait] = useState(floraGrayPortrait);
	const location = useLocation();

	useEffect(() => {
		if (location.pathname === "/yukime") {
			setYukimePortrait(yukimeColorPortrait);
		} else if (location.pathname === "/carolita") {
			setCarolitaPortrait(carolitaColorPortrait);
		} else if (location.pathname === "/kuro") {
			setKuroPortrait(kuroColorPortrait);
		} else if (location.pathname === "/meiko") {
			setMeikoPortrait(meikoColorPortrait);
		} else if (location.pathname === "/purple") {
			setPurplePortrait(purpleColorPortrait);
		} else if (location.pathname === "/pardal") {
			setPardalPortrait(pardalColorPortrait);
		} else if (location.pathname === "/flora") {
			setFloraPortrait(floraColorPortrait);
		} else if (location.pathname === "/torajo") {
			setTorajoPortrait(torajoColorPortrait);
		} else if (location.pathname === "/jesse") {
			setJessePortrait(jesseColorPortrait);
		}
	}, [location]);

	return (
		<>
			<Navbar />
			<div className={`bg-screen-${bgName} container-fluid w-100 p-5 position-relative`}>
				<div className="aurostars-portrait d-flex flex-column justify-content-end align-items-center position-absolute top-0 end-0 mt-3">
					<div className="d-flex flex-column flex-sm-row">
						<Link to="/torajo">
							<img src={torajoPortrait} width={50} alt="torajo" loading="lazy" style={{ borderRadius: "50px" }} />
						</Link>
						<Link to="/jesse">
							<img src={jessePortrait} width={50} alt="jesse" loading="lazy" style={{ borderRadius: "50px" }} />
						</Link>
						<Link to="/yukime">
							<img src={yukimePortrait} width={50} alt="yukime" loading="lazy" style={{ borderRadius: "50px" }} />
						</Link>
						<Link to="/carolita">
							<img src={carolitaPortrait} width={50} alt="carolita" loading="lazy" style={{ borderRadius: "50px" }} />
						</Link>
						<Link to="/kuro">
							<img src={kuroPortrait} width={50} alt="kuro" loading="lazy" style={{ borderRadius: "50px" }} />
						</Link>
						<Link to="/meiko">
							<img src={meikoPortrait} width={50} alt="meiko" loading="lazy" style={{ borderRadius: "50px" }} />
						</Link>
						<Link to="/purple">
							<img src={purplePortrait} width={50} alt="purple" loading="lazy" style={{ borderRadius: "50px" }} />
						</Link>
						<Link to="/pardal">
							<img src={pardalPortrait} width={50} alt="pardal" loading="lazy" style={{ borderRadius: "50px" }} />
						</Link>
						<Link to="/flora">
							<img src={floraPortrait} width={50} alt="flora" loading="lazy" style={{ borderRadius: "50px" }} />
						</Link>
					</div>
					<div className="d-none d-sm-flex">
						<p className="text-white mt-2">Navegue entre as estrelas</p>
					</div>
				</div>
				<div className="row flex-column flex-lg-row justify-content-center align-items-center w-100 m-0">
					<div className="col-12 col-lg-5">
						<img src={img} alt={aurostar} className="w-100" loading="lazy" />
					</div>
					<div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
						<h1 className="text-center fw-bold text-white mt-3 mt-lg-0 mb-2 mb-lg-5">{aurostar}</h1>
						<p className="text-center text-white mb-2 mb-lg-5">
							{loreStart}
							<br />
							{loreEnd}
						</p>
						<h2 className="text-center fw-bold text-white fs-5 mt-3 mb-4">
							Acompanhe {gender === "male" ? "o" : "a"} {aurostar} nas redes sociais!
						</h2>
						<div className="d-flex justify-content-center w-100 mb-0 mb-sm-5">
							<div className="d-flex flex-column align-items-center">
								<a href={`${linkTwitter}`} className="mx-4" target="_blank" rel="noreferrer">
									<img src={xLogo} alt="twitter logo" width={80} loading="lazy" />
								</a>
								<div className="d-flex flex-column align-items-center">
									<p className="text-white fw-bold fs-5 m-0">{followers}</p>
									<p className="text-white fw-bold fs-5 m-0">seguidores</p>
								</div>
							</div>
							<div className="d-flex flex-column align-items-center">
								<a href={linkYoutube} className="mx-4" target="_blank" rel="noreferrer">
									<img src={youtubeLogo} alt="youtube logo" width={80} loading="lazy" />
								</a>
								<SubscriberCount channelId={channelId} />
							</div>
						</div>
					</div>
				</div>
				<div className="position-absolute bottom-0 d-none d-sm-flex end-0 mt-3">
					<a href={linkLojaAurostar} className="btn btn-dark p-3 px-4 mb-3 me-4" target="_blank" rel="noreferrer">Conheça os produtos {aurostar} <i className="bi bi-bag-fill ms-3"></i></a>
				</div>
				<div className="d-flex d-sm-none justify-content-center mt-3">
					<a href={linkLojaAurostar} className="btn btn-dark p-3 px-4" target="_blank" rel="noreferrer">Conheça os produtos <br></br> {aurostar} <i className="bi bi-bag-fill ms-3"></i></a>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default PageAurostar;
