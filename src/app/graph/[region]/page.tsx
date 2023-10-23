type Result = {
   message: string
}
export const generateStaticParams = async () => {
   return [{region: "jpn"}, {region: "usa"}, {region: "chn"}]
}

const Page = async ({params}: {params: { region: string}}) => {
    const url = "https://script.google.com/macros/s/AKfycbwguBAZ4fzqUf6IL2scVe278cWJ4nTYoQdzi6n3WFeA9Srt0NHVXHbhBu9Av1wD3ws0Fw/exec"
    const parameter = `?region=${params.region}`
    const response = await fetch(url + parameter);
    const res = await response.json()

    return (
        <>
            <h2>This is graph page of {params.region}</h2>
            <h3>{res.message}</h3>
        </>
    )
}

export default Page