import {Thumbnail} from "../interfaces/thumbnail";

export type ImagePortraitSizes = "portrait_small" | "portrait_medium" | "portrait_xlarge" | "portrait_fantastic" | "portrait_uncanny" | "portrait_incredible"
export type ImageStandardSizes = "standard_small" | "standard_medium" | "standard_large" | "standard_xlarge" | "standard_fantastic" | "standard_amazing"
export type ImageLandscapeSizes = "landscape_small" | "landscape_medium" | "landscape_large" | "landscape_xlarge" | "landscape_amazing" | "landscape_incredible"
export type ImageSizes = ImagePortraitSizes | ImageLandscapeSizes | ImageStandardSizes | "detail" | "full-size";

export const GetImage = ({path, extension}: Thumbnail, size: ImageSizes): string => {
    if (size === "full-size") {
        return `${path}.${extension}`;
    }

    return `${path}/${size}.${extension}`;
}
