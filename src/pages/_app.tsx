import '../styles/globals.css'
import 'antd/dist/antd.css'
import 'swiper/css';

import type {AppProps} from 'next/app'
import MainLayout from "../layouts/MainLayout";
import {ThemeProvider} from "next-themes";
import {Provider} from "react-redux";
import {store} from "../store";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <ThemeProvider enableSystem={true} attribute="class">
                    <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout>
            </ThemeProvider>
        </Provider>
    )
}

export default MyApp;