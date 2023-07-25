import Image from "next/image"
type User = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
} | undefined

type Props = {
    user: User,
    pagetype: string,
}

export default function Card({ user, pagetype }: Props) {
    console.log(user)
    const greeting = user?.name ? (
        <div className="flex flex-col items-center p-6 m-6 bg-white rounded-lg font-bold text-black text-5xl" >
            Hello! {user?.name}
        </div>
    ) : null

    const emailDisplay = user?.email ? (
        <div className="flex flex-col items-center p-6 bg-white rounded-lg font-bold text-5xl text-black">
            {user?.email}
        </div>
    ) : null
    const userImage = user?.image ? (
        <Image
            className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
            src={user?.image}
            width={200}
            height={200}
            alt={user?.name ?? "Profile Pic"}
            priority={true}
        />
    ) : null

    return (
        <section>
            {greeting}
            {emailDisplay}
            {userImage}
            <p>{pagetype} Page!</p>
        </section>
    )

}