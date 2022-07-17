import {BsHouse, BsCompass, BsController, BsFilm, BsClockHistory, BsCollectionPlay, BsHandThumbsUp, BsLightbulb, BsTrophy, BsGraphUp, BsMusicPlayer, BsGear} from 'react-icons/bs';
export const Items = [
    {
        name: 'Home',
        icon: <BsHouse size={25} />,
    },
    {
        name: 'Explore',
        icon: <BsCompass size={25} />,
    },
    {
        name: "Trending",
        icon: <BsGraphUp size={25} />
    },
    {
        name: "Subscriptions",
        icon: <BsCollectionPlay size={25} />
    },
    {
        name: "Gaming",
        icon: <BsController size={25} />
    },
    {
        name: "Films",
        icon: <BsFilm size={25} />
    },
    {
        name: "History",
        icon: <BsClockHistory size={25} />
    },
    {
        name:"Likes",
        icon: <BsHandThumbsUp size={25}  />
    },
    {
        name: "Learning",
        icon: <BsLightbulb size={25} />
    },
    {
        name: "Sports",
        icon: <BsTrophy size={25} />
    },
    {
        name:"Music",
        icon: <BsMusicPlayer size={25} />
    },
    {
        name: "Settings",
        icon: <BsGear size={25} />
    }
]