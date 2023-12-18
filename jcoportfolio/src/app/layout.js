import { Inter } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "@/context/theme-context";
import { ActiveSectionContextProvider } from "@/context/active-section-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       className={`${inter.className} bg-gray-50 text-gray-950 relative`}>
        <div className="bg-[#fbe2e3] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75] "
        ></div>
        <div className="bg-[#dbd7fb] -z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        ></div>
        <ThemeContextProvider>
        <ActiveSectionContextProvider>

        {children}
        </ActiveSectionContextProvider>
        </ThemeContextProvider>

       
      </body>
    </html>
  );
}
