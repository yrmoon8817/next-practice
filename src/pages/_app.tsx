import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const onClickButton=()=>{
    // replace, back, push
    router.push("/test");
  }
  // 한번만 실행하는 조건으로 프리패칭을 명시해주기
  useEffect(()=>{
    router.prefetch("/test")
  },[])
  return <>
    <header>
      <Link href="/">index</Link><br/>
      <Link href="/search" prefetch={false}>Search</Link><br/>
      <Link href="/book/1">Book/1</Link><br/>
      <div>
        <button onClick={onClickButton}>/test 페이지로 이동</button>
      </div>
    </header>
    <Component {...pageProps} />
  </>
}
