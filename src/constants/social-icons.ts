import { BsGithub, BsTwitter, BsYoutube } from "react-icons/bs";

import { SocialLink } from "~types/social-link";

const socialLinks: SocialLink[] = [
    {
        href: 'https://twitter.com/aacevski',
        icon: BsTwitter,
        color: 'twitter.500',
    },
    {
        href: 'https://github.com/aacevski',
        icon: BsGithub,
    },
    {
        href: 'https://www.youtube.com/channel/UC_d5a-Bz_GENXkDUbIGqwxg',
        icon: BsYoutube,
        color: 'red.500'
    }
];

export default socialLinks;