import { StaticImageData } from "next/image"

export interface sectionInterface{
    image: string | StaticImageData
    title: string
    slug: string
    description: string
    liveLink: string
    things_i_did: string[]
    collaborators: string[]
    sections: {
        title: string
        description: string
        images: string[] | StaticImageData[]
        footnote: string
        footLinkLabel: string
        footLink: string
    }[]
}