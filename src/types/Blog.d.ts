
export interface PostApi {
    title: string;
    description: string | null;
    image_url: string | null;
    link: string;
}


export interface Post {
    title: string;
    id: string;
    description: string | null;
    urlToImage: string | null;
    url: string;
}