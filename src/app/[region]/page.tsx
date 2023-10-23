import Link from "next/link";
import {Suspense} from "react";

const Page = ({params}: {params: {region: string}})=> {
    return (
        <>
            <Link href={"/jpn"} className={params.region === "jpn" ? "bg-red-300" : ""}>JPN </Link>
            <Link href={"/usa"} className={params.region === "usa" ? "bg-red-300" : ""}>USA </Link>
            <Link href={"/chn"} className={params.region === "chn" ? "bg-red-300" : ""}>CHN</Link>
            <iframe src={`/graph/${params.region}`} />
        </>
    )
}

export default Page


