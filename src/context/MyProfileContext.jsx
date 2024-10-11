import { createContext, useEffect, useState } from 'react'

const endpoint = 'https://striveschool-api.herokuapp.com/api/profile/me'
const endpointUsers = 'https://striveschool-api.herokuapp.com/api/profile'
const antoApiKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzA2YzQ0ZGI3MzZmYjAwMTU4ZjAwZjUiLCJpYXQiOjE3Mjg0OTkwNzMsImV4cCI6MTcyOTcwODY3M30._O5UH9bS5xD9YASILty-hi_N34QeO7R8OMvXcgD_uaw'

export const MyProfileContext = createContext()

export const MyProfileProvider = ({ children }) => {
    const [myProfile, setMyProfile] = useState(null)
    const [myProfileError, setMyProfileError] = useState(false)
    const [myProfileLoading, setMyProfileLoading] = useState(false)
    const [posts, setPosts] = useState([])

    const getMyProfileFromApi = async () => {
        try {
            setMyProfileLoading(true)
            const response = await fetch(endpoint, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${antoApiKey}`,
                    'Content-Type': 'application/json',
                },
            })

            const data = await response.json()
            setMyProfile(data)
        } catch (error) {
            console.log(error)
            setMyProfileError(error.message)
        } finally {
            setMyProfileLoading(false)
        }
    }

    const getComplete = async () => {
        let merged = []

        const profilesResponse = await fetch(endpointUsers, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${antoApiKey}`,
                'Content-Type': 'application/json',
            },
        })

        const postsResponse = await fetch('https://dummyjson.com/posts')

        const [profilesData, postsData] = await Promise.all([
            profilesResponse,
            postsResponse,
        ])

        const profiles = await profilesData.json()
        const postsFetched = await postsData.json()

        postsFetched.posts.map((post, i) => {
            merged.push({
                user: profiles[i],
                post: post,
            })
        })

        setPosts(merged)
    }

    useEffect(() => {
        getMyProfileFromApi()
        getComplete()
    }, [])

    return (
        <MyProfileContext.Provider
            value={{
                myProfile,
                myProfileError,
                setMyProfileError,
                myProfileLoading,
                setMyProfileLoading,
                posts,
            }}
        >
            {children}
        </MyProfileContext.Provider>
    )
}
