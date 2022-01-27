import React, { useEffect, useState, useRef } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AlertListCard from "../components/AlertListCard";
import AlertList from "../components/AlertList";
import styles from "../styles/Home.module.css";
// Adapter testing
import {
	getActiveAlerts,
	getActiveAlertsByEvent,
	getAlertTypes,
} from "../adapters/national-weather-service";
import { createUniqueAlertArraysObject } from "../adapters/national-weather-service/helpers/createUniqueObjectMapFromArray";

const Home: NextPage = () => {
	const [alertArraysObj, setAlertArraysObj] = useState({});
	// let alertCardsList: any[] = [];

	useEffect(() => {
		const getAlerts = async () => {
			// console.clear();

			const activeAlerts = await getActiveAlerts();
			const alertArraysObj = await createUniqueAlertArraysObject(activeAlerts);
			setAlertArraysObj(alertArraysObj);

			console.log("UNIQUE ARRAY OBJECT >> \n", alertArraysObj);

			for (const [key, value] of Object.entries(alertArraysObj)) {
				// return (
				//   <a key={key} href='https://nextjs.org/docs' className={styles.card}>
				//     <p>{key}</p>
				//     {/* <p>{value}</p> */}
				//   </a>
				// )
				// console.log(`${key}: ${value}`);
			}
		};

		getAlerts();
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>Tornado Action</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<h1 className={styles.title}>Tornado Action</h1>
			<main className={styles.main}>
				{Object.keys(alertArraysObj).map(alertType => (
					<AlertListCard
						key={alertType}
						alertType={alertType}
						alertList={alertArraysObj[`${alertType}`]}
					/>
				))}
			</main>

			<footer className={styles.footer}>
				&copy; {new Date().getFullYear()} | Tornado Action
			</footer>
		</div>
	);
};

export default Home;
