import React, { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

type Props = {};

const ScrollTrigger = (props: Props) => {
	const { camera, scene } = useThree();
	useEffect(() => {
		camera.position.y = 2;

		let mm = gsap.matchMedia();

		mm.add(
			{
				// set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
				isDesktop: `(min-width: 48em)`,
				isMobile: `(max-width:48em)`,
			},
			(context) => {
				// context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
				let { isDesktop, isMobile }: any = context.conditions;
				let t1 = gsap.timeline({
					scrollTrigger: {
						trigger: "#phone-model",
						start: "top+=200 top",
						endTrigger: "#battery-section",
						end: "top top",
						scrub: 1,
						// markers: true,
					},
				});

				t1.fromTo(camera.position, { y: 2 }, { y: 0 })
					.to(scene.rotation, { y: 0.8 })
					.to(scene.rotation, { y: 3 })
					.to(scene.rotation, { z: 1.58 }, "key1")
					.to(camera.position, { z: 4 }, "key1")
					.to(scene.rotation, { y: 0, z: 0 }, "key2")
					.to(camera.position, { z: 6, x: isDesktop ? -1 : 0 }, "key2")
					.to(scene.rotation, { z: 0, y: 6.3 }, "key3")
					.to(camera.position, { x: isDesktop ? 0.8 : 0, y: 0 }, "key3");
			}
		);
	}, []);
	return null;
};

export default ScrollTrigger;
