import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {Link} from "expo-router";
import {icons} from "@/constants/icons";

const MovieCard = ({id , poster_path,title , backdrop_path , vote_average,release_date}:Movie) => {
    // Convert vote_average (0-10) → stars (0-5)
    const stars = Math.round(vote_average / 2);
    const totalStars = 5;

    return (

        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity className="w-[30%]">
                <Image

                    source={{
                        uri: poster_path?`https://image.tmdb.org/t/p/w500${poster_path}`:
                            'https://placehold.co/600᙮400/1a1a1a/ffffff.png'

                    }}
                    className="w-full h-52 rounded-lg"
                    resizeMode="cover"
                />
                <Text className="text-sm font-bold text-white mt-2" numberOfLines={1}>{title}</Text>
                {/* ⭐ Star rating */}
                <View className="flex-row items-center mt-1">
                    {Array.from({ length: totalStars }).map((_, index) => (
                        <Image
                            key={index}
                            source={icons.star}
                            className={`size-4 ${index < stars ? "" : "opacity-30"}`} // faded star if not filled
                            resizeMode="contain"
                        />
                    ))}
                </View>
                <View className="flex-row items-center justify-between">
                    <Text className="text-sx text-light-300 font-medium mt-1">{release_date?.split('-')[0]}</Text>
                    {/*<Text className="text-xs font-medium text-light-300 uppercase">Movie</Text>*/}
                </View>
            </TouchableOpacity>

        </Link>

    )
}
export default MovieCard
const styles = StyleSheet.create({})
