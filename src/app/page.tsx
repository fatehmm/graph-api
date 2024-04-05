"use client";
import { useRouter } from "next/navigation";
import { Button } from "../components/ui/button";

export default async function Home() {
	const router = useRouter();

	return (
		<div className="py-10">
			<Button
				className="px-20 py-12 text-3xl"
				onClick={async () => {
					const res = await fetch("http://localhost:3000/login");
					const data = await res.text();
					router.push(data);
				}}
			>
				Login!
			</Button>
			{/* <LoginForm /> */}
		</div>
	);
}
