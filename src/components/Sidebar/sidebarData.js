import React from "react";
import {
    FaFacebook,
    FaLinkedin,
    FaTwitter,
    FaSlackHash,
    FaGuitar,
} from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { BsMusicNoteBeamed } from "react-icons/bs";
//import { TiHome } from "react-icons/ti";
import { ReactComponent as Chord } from "../../svg/chord.svg";

export const links = [
    /* {
        id: 1,
        url: "/",
        text: "home",
        icon: <TiHome />,
        isLocked: false,
    }, */
    {
        id: 1,
        url: "/tutorial",
        text: "tutorial",
        icon: <CgFileDocument />,
        isLocked: false,
    },

    {
        id: 2,
        url: "/",
        text: "melodic",
        icon: <BsMusicNoteBeamed />,
        isLocked: false,
    },
    {
        id: 3,
        url: "/harmonic",
        text: "harmonic",
        icon: <Chord className="custom-svg" />,
        isLocked: true,
    },
    {
        id: 4,
        url: "/key",
        text: "identify key",
        icon: <FaSlackHash />,
        isLocked: true,
    },
    {
        id: 5,
        url: "/accompaniment",
        text: "accompaniment",
        icon: <FaGuitar />,
        isLocked: true,
    },
];

export const social = [
    {
        id: 1,
        url: "https://www.facebook.com/",
        icon: <FaFacebook />,
    },
    {
        id: 2,
        url: "https://www.twitter.com",
        icon: <FaTwitter />,
    },
    {
        id: 3,
        url: "https://www.linkedin.com",
        icon: <FaLinkedin />,
    },
];
