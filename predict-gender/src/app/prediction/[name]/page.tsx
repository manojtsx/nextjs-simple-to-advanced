import Link from "next/link";

const getPredictedAge = async (name: string) => {
    const res = await fetch(`https://api.agify.io/?name=${name}`);
    return res.json();
}
const getPredictedGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    return res.json();
}
const getPredictedCountry = async (name: string) => {
    const res = await fetch(`https://api.nationalize.io/?name=${name}`);
    return res.json();
}
interface Params {
    params: { name: string }
}
export default async function Page({ params }: Params) {
    const ageData = getPredictedAge(params.name);
    const genderData = getPredictedGender(params.name);
    const countryData = getPredictedCountry(params.name);

    const [age, gender, country] = await Promise.all([ageData, genderData, countryData]);
    return (
        <div className="flex flex-col h-screen dark:bg-black justify-center items-center gap-5">
            <div className="bg-blue-500 rounded-lg text-white px-4 py-8">
                <h1 className="text-2xl">{params.name}</h1>
                <p>Age: {age.age}</p>
                <p>Gender : {gender.gender}</p>
                <p className="mb-2">Countries : {country.country.map((data: any) => { return data.country_id + " , " })}</p>
                <Link href="/" className="bg-white text-blue-500 px-4 py-2">Go Back</Link>
            </div>
        </div>
    )
}