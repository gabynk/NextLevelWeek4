import React from "react";

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Perfile";
import { CompletedChallenges } from "../components/CompletedChallenges";

import Head from 'next/head';

import styles from '../styles/pages/Home.module.css';
import { Countdown } from "../components/Countdown";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Inicio | move.it</title>
			</Head>
			
			<ExperienceBar />

			<section>
				<div>
					<Profile />
					<CompletedChallenges />
					<Countdown />
				</div>
				<div>
				</div>
			</section>
		</div>
	)
}
