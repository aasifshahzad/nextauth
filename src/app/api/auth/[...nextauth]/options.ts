import type { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string

        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "UserName"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "Password"
                },
            },
            async authorize(Credentials) {
                // this is where you would retrive the user data from a database
                // and verify it with credentials
                // Docs: https://next-auth.js.org/confugration/providers/credentials
                const user = { id: "42", name: "Dave", password: "nextauth" }

                if (Credentials?.username === user.name && Credentials.password === user.password) {
                    return user
                }
                else {
                    return null
                }
            },
        },
        )
    ],
}

