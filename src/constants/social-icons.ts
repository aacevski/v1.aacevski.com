import { BsGithub, BsTwitch, BsTwitter, BsYoutube } from "react-icons/bs";

import { SocialLink } from "~types/social-link";

const socialLinks: SocialLink[] = [
    {
        href: 'https://twitter.com/aacevski',
        icon: BsTwitter,
        color: 'twitter.500',
        name: 'Twitter',
    },
    {
        href: 'https://github.com/aacevski',
        icon: BsGithub,
        name: 'Github',
    },
    {
        href: 'https://www.twitch.tv/aacevski',
        icon: BsTwitch,
        color: '#6441a5',
        name: 'Twitch',
    }
];

export default socialLinks;