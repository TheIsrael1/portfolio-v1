import { sectionInterface } from "./folio-config.types";
import pk1 from '@/assets/pilkings-1.png'
import pk2 from '@/assets/pilkings-2.png'
import pk3 from '@/assets/pilkings-3.png'
import pk4 from '@/assets/pilkings-4.png'
import mag1 from '@/assets/magazine-1.png'
import mag2 from '@/assets/magazine-2.png'
import mag3 from '@/assets/magazine-3.png'
import hyd1 from '@/assets/hydrogen1.png'
import hyd2 from '@/assets/hydrogen-2.png'
import hyd3 from '@/assets/hydrogen-3.png'
import jack1 from '@/assets/punk-jackals-1.png'
import jack2 from '@/assets/punk-jackals-2.png'
import jack3 from '@/assets/punk-jackals-3.png'
import tac1 from '@/assets/tacsfon-1.png'
import tac2 from '@/assets/tacsfon-2.png'
import tac3 from '@/assets/tacsfon-3.png'
import nolly1 from '@/assets/nollywood-1.png'
import nolly2 from '@/assets/nollywood-2.png'
import nolly3 from '@/assets/nollywood-3.png'


export const sections: sectionInterface[] = [
{   image: pk1,
    title: 'Pilkings',
    slug: 'pilkings',
    description: 'An immersive video trivia game platform, with a clean ui and great ux',
    collaborators: ['Ehindero Israel (Me)', 'Delight Fela-steve (backend)'],
    liveLink: 'https://pilkings.com/app/guest?flow=onboarding',
    sections: [
        {
            title: 'Technical Insight',
            description: `In this project I was able to implement some impressive functionalities including
             an efficient football video streaming and video manipulation, also a robust real-time websocket implementation
            `,
            footLinkLabel: 'Website',
            footLink: 'https://pilkings.com/app/guest?flow=onboarding',
            footnote: 'Technologies used includes Typescript, React, socket io, video js',
            images: [pk2, pk3, pk4]
        },
    ],
    things_i_did: ['Implemented the ui', 'Implemented complete functionality of the platform', 'Implemented a friends games'],
},
{   image: mag1,
    slug: 'inawo-magazine',
    title: 'Inawo Magazine',
    description: 'An elegant online wedding magazine built for Inawo.com a platform for all things wedding',
    collaborators: ['Ehindero Israel (Me)', 'Inawo design team'],
    liveLink: 'https://dev.inawomagazine.com/',
    sections: [
        {
            title: 'Technical Insight',
            description: `In this project I implemented a pixel perfect ui and built a sanity cms backend to manage the website and then integrated with the website
            `,
            footLinkLabel: 'Website',
            footLink: 'https://dev.inawomagazine.com/',
            footnote: 'Technologies used includes Typescript, Next, Sanity CMS',
            images: [mag1, mag2, mag3]
        },
    ],
    things_i_did: ['Implemented the ui', 'Implemented a sanity backend cms', 'Optimized for seo via next js seo configs'],
},
{   image: nolly1,
    slug: 'nollwood-filmmaker',
    title: 'Nollywood Filmmaker',
    description: 'An online social platform for stakeholders in the nollywood film industry',
    collaborators: ['Ehindero Israel (Me)', 'EZEKIEL, Dorcas Oluwayanmi (designer)'],
    liveLink: 'https://nfm.timbu.cloud',
    sections: [
        {
            title: 'Technical Insight',
            description: `I implemented a clean and elegant platform with extensive plan and access models based on user subscription`,
            footLinkLabel: 'Website',
            footLink: 'https://nfm.timbu.cloud',
            footnote: 'Technologies used includes Typescript, React (Vite), Shad cn, tailwind',
            images: [nolly1, nolly2, nolly3]
        },
    ],
    things_i_did: ['Implemented a clean ui', 'optimized image loading', 'extensive plan and subscription models', 'Markdown content formatting'],
},
{   image: hyd1,
    slug: 'hydrogen',
    title: 'Hydrogen HR',
    description: 'An online platform for human resource and payroll managment',
    collaborators: ['Ehindero Israel (Me)', 'Hydrogen Frontend Team'],
    liveLink: 'https://www.hydrogenhr.com/',
    sections: [
        {
            title: 'Technical Insight',
            description: `I Implemented ui's and extensive frontend features and ux around payroll, hr, and employee managment`,
            footLinkLabel: 'Website',
            footLink: 'https://www.hydrogenhr.com/',
            footnote: 'Technologies used includes Typescript, React (CRA), scss',
            images: [hyd1, hyd2, hyd3]
        },
    ],
    things_i_did: ['Implemented elaborate frontend functionalities in app', 'implemented external pages', 'implemented a reusable table and sheets architecture'],
},
{   image: jack1,
    slug: 'punk-jackals',
    title: 'Punk Jackals',
    description: 'An ambitious blockchain community powered by impressively designed NFTs',
    collaborators: ['Ehindero Israel (Me)', 'Collins (founder/artist)'],
    liveLink: 'https://punk-jackals.netlify.app/',
    sections: [
        {
            title: 'Technical Insight',
            description: `I designed and implemented the website concept, drawing design inspiration from the artworks.`,
            footLinkLabel: 'Website',
            footLink: 'https://punk-jackals.netlify.app/',
            footnote: 'Technologies used includes Typescript, React (CRA), css modules',
            images: [jack1, jack2, jack3]
        },
    ],
    things_i_did: ['Designed the ui concept', 'Implemented the ui', 'integrated the nft art into the plaform'],
},
{   image: tac1,
    slug: 'tacsfon',
    title: 'Tacsfon',
    description: 'A website built for my school fellowship',
    collaborators: ['Ehindero Israel (Me)'],
    liveLink: 'https://tacsfonui.netlify.app/',
    sections: [
        {
            title: 'Technical Insight',
            description: `I designed and implemented the website concept, initially powered by a php backend, now diconnected.`,
            footLinkLabel: 'Website',
            footLink: 'https://tacsfonui.netlify.app/',
            footnote: 'Technologies used includes Javascript, React (CRA), css',
            images: [tac1, tac2, tac3]
        },
    ],
    things_i_did: ['Designed the ui concept', 'Implemented the ui'],
},
]