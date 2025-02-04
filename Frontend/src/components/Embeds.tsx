import { useEffect, useState } from "react";

function checkLink(link: string | undefined, type: string): string | undefined {
    if (type === "video" && link) {
        const match = link.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/);
        if (match) {
            return `https://www.youtube.com/embed/${match[1]}`;
        } else {
            return "1"
        }

    }
    else if (type === "insta" && link) {
        const cleanLink = link.split('?')[0];
        const match = cleanLink.match(/instagram\.com\/(?:p|reel)\/([^\/?]+)/);
        if (match) {
            return `https://www.instagram.com/p/${match[1]}/embed`;

        } else {
            return "1"
        }


    }
    else if (type === "music" && link) {
        if (link.includes("music.youtube.com") || link.includes("youtube.com")) {
            const match = link.match(/[?&]v=([^&]+)/);
            if (match) {
                return `https://www.youtube.com/embed/${match[1]}`;
            } else {
                return "1"
            }


        }

        else if (link.includes("open.spotify.com")) {
            const match = link.match(/spotify\.com\/(track|playlist|album)\/([^/?]+)/);
            if (match) {
                return `https://open.spotify.com/embed/${match[1]}/${match[2]}`;
            } else {
                return "1"
            }




        }

        else if (link.includes("apple.com")) {
            if (link.includes("/embed")) {
                return link;
            } else if (link.includes("//music.")) {
                return link.replace("//music.", "//embed.music.");
            } else {
                return "1"
            }

        }



    }
    else if (type === "tweets" && link) {
        const match = link.match(/x\.com\/(?:.*\/status\/)(\d+)/);
        if (match) {
            return match[1];
        } else {
            return "1"
        }


    }
    else if (type === "document" && link) {
        return link;
    }
    else if (type === "links" && link) {
        return link;
    }

    return undefined;
}




function YoutubeEmbed({ inputUrl }: { inputUrl: string }) {
    return (
        <>
            {inputUrl && (
                <div className="video-container">
                    <iframe
                        src={inputUrl}
                        allowFullScreen
                        className="w-full h-full border-none rounded-[5px]"
                    ></iframe>
                </div>
            )}
        </>
    );
}
function InstagramEmbed({ inputUrl }: { inputUrl: string }) {
    return (
        <>
            {inputUrl && (
                <div className="video-container">
                    <iframe
                        src={inputUrl}
                        allowFullScreen
                        className="w-full h-full border-none"
                    ></iframe>
                </div>
            )}
        </>
    );
}
function MusicEmbed({ inputUrl }: { inputUrl: string }) {
    return (
        <>
            {inputUrl && (
                <div className="video-container">
                    <iframe
                        src={inputUrl}
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        allowFullScreen
                        className="w-full h-[160px] border-none"
                    ></iframe>


                </div>
            )}
        </>
    );
}
function TweetsEmbed({ inputUrl }: { inputUrl: string }) {
    useEffect(() => {
        // Dynamically load the Twitter embed script
        const script = document.createElement("script");
        script.src = `https://platform.twitter.com/widgets.js`;
        script.async = true;
        
        document.body.appendChild(script);
    }, []);
    return (
        <>
            {inputUrl && (

                <div className="video-container">
                    <blockquote className="twitter-tweet w-full h-[150px] border-none text-[10px]">
                        <a href={`https://twitter.com/user/status/${inputUrl}`}></a>
                    </blockquote>
                </div>


            )}
        </>
    );
}
export { checkLink, YoutubeEmbed, InstagramEmbed, MusicEmbed, TweetsEmbed };
