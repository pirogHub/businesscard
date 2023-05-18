import "@/styles/globals.css"
import type {AppProps} from "next/app"
import {ToastContainer} from "react-toastify"
import NextNProgress from "nextjs-progressbar"
import "react-toastify/dist/ReactToastify.css"

export default function App({Component, pageProps}: AppProps) {
	return (
		<>
			<NextNProgress />
			<Component {...pageProps} />

			<ToastContainer
				position="bottom-right"
				hideProgressBar={false}
				closeOnClick
				rtl={false}
				theme="light"
			/>
		</>
	)
}
