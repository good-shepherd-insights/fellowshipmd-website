import { useEffect } from "react";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import SiteFooter from "@/components/footer";

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

interface MediaContentCollection {
  [key: string]: MediaContent;
}

const sampleMediaContent: MediaContentCollection = {
  video: {
    src: "/videos/fellowship-intro.mp4",
    poster:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop",
    background:
      "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=1920&auto=format&fit=crop",
    title: "Immersive Video Experience",
    date: "Cosmic Journey",
    scrollToExpand: "Scroll to Expand Demo",
    about: {
      overview:
        "This is a demonstration of the ScrollExpandMedia component with a video. As you scroll, the video expands to fill more of the screen, creating an immersive experience. This component is perfect for showcasing video content in a modern, interactive way.",
      conclusion:
        "The ScrollExpandMedia component provides a unique way to engage users with your content through interactive scrolling. Try switching between video and image modes to see different implementations.",
    },
  },
  image: {
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1280&auto=format&fit=crop",
    background:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=1920&auto=format&fit=crop",
    title: "Dynamic Image Showcase",
    date: "Underwater Adventure",
    scrollToExpand: "Scroll to Expand Demo",
    about: {
      overview:
        "This is a demonstration of the ScrollExpandMedia component with an image. The same smooth expansion effect works beautifully with static images, allowing you to create engaging visual experiences without video content.",
      conclusion:
        "The ScrollExpandMedia component works equally well with images and videos. This flexibility allows you to choose the media type that best suits your content while maintaining the same engaging user experience.",
    },
  },
};

const MediaContent = () => {
  return (
    <>
      <div className="relative left-1/2 w-screen -translate-x-1/2 bg-[hsl(0,0%,96.08%)] py-16 text-center text-black">
      <div className="mx-auto max-w-4xl px-8">
        <h2 className="font-heading text-3xl md:text-4xl mb-8 text-black">
          About Us
        </h2>
        <p className="text-lg mb-10 text-black">
          Here at Fellowship Church, we’re all about helping people meet Jesus
          and experience the life-changing power of His love.
        </p>
        <a
          href="/beliefs"
          className="inline-block rounded-md border border-black px-9 py-4 text-lg font-medium whitespace-nowrap text-black transition hover:bg-black hover:text-white"
        >
          Learn More
        </a>
      </div>
      <div className="mx-auto mt-14 grid max-w-[1356px] grid-cols-1 gap-9 px-11 md:grid-cols-2">
        <a href="/beliefs" className="block">
          <img
            src="/images/cards/new-here.webp"
            alt="New Here? Learn about who we are and what we believe"
            className="aspect-[2500/1648] w-full rounded-3xl object-cover"
          />
        </a>
        <a href="/prayer" className="block">
          <img
            src="/images/cards/prayer.webp"
            alt="Prayer & Care. Need prayer or support? We’re here to help"
            className="aspect-[2500/1648] w-full rounded-3xl object-cover"
          />
        </a>
        <img
          src="/images/cards/serve.webp"
          alt="Serve with Us. Use your gifts to serve those around you"
          className="aspect-[2500/1648] w-full rounded-3xl object-cover"
        />
        <a
          href="https://fellowshipchurchmd.churchcenter.com/calendar?view=month"
          target="_blank"
          rel="noopener"
          className="block"
        >
          <img
            src="/images/cards/upcoming.webp"
            alt="Upcoming Events. Stay connected with groups and activities"
            className="aspect-[2500/1648] w-full rounded-3xl object-cover"
          />
        </a>
        </div>
      </div>
      <div className="relative left-1/2 w-screen -translate-x-1/2 bg-[hsl(0,0%,96.08%)] py-24 text-black">
        <div className="mx-auto grid max-w-[1356px] grid-cols-1 items-center gap-10 px-11 md:grid-cols-2">
          <div className="text-center">
            <img
              src="/images/quotation.webp"
              alt=""
              className="mx-auto mb-10 w-20"
            />
            <blockquote>
              <p className="text-2xl leading-relaxed">
                "Every good gift and every perfect gift is from above, coming
                down from the Father of lights."
              </p>
              <p className="mt-6 text-2xl">James 1:17</p>
            </blockquote>
          </div>
          <div>
            <h4 className="font-heading mb-10 text-center text-3xl">
              The Latest Sermon
            </h4>
            <video
              src="/videos/latest-sermon.mp4"
              poster="/images/sermon-poster.webp"
              controls
              preload="metadata"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="relative left-1/2 w-screen -translate-x-1/2 py-32 text-center">
        <img
          src="/images/stay-loop-bg.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10">
          <h2 className="font-heading mb-24 text-5xl text-[hsl(0,0%,96.08%)] md:text-7xl">
            Stay in the Loop
          </h2>
          <div className="flex items-center justify-center gap-28">
          <a
            href="https://www.facebook.com/fellowshipchurchmd"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
          >
            <img src="/images/facebook.webp" alt="Facebook" className="w-32" />
          </a>
          <a
            href="https://www.youtube.com/channel/UC9l9Gk14Uy1OzuLZJT1hb9A"
            target="_blank"
            rel="noopener"
            aria-label="YouTube"
          >
            <img src="/images/youtube.webp" alt="YouTube" className="w-32" />
          </a>
          <a
            href="https://www.instagram.com/fellowshipchurchmd/"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
          >
            <img
              src="/images/instagram.webp"
              alt="Instagram"
              className="w-32"
            />
          </a>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
};

export const VideoExpansionTextBlend = () => {
  const mediaType = "video";
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent />
      </ScrollExpandMedia>
    </div>
  );
};

export const ImageExpansionTextBlend = () => {
  const mediaType = "image";
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent />
      </ScrollExpandMedia>
    </div>
  );
};

export const VideoExpansion = () => {
  const mediaType = "video";
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent />
      </ScrollExpandMedia>
    </div>
  );
};

export const ImageExpansion = () => {
  const mediaType = "image";
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent />
      </ScrollExpandMedia>
    </div>
  );
};

function Demo() {
  const mediaType = "video";
  const currentMedia = sampleMediaContent[mediaType];

  useEffect(() => {
    window.scrollTo(0, 0);

    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc="/images/hero.webp"
        title="MEET JESUS. BE TRANSFORMED."
        actions={
          <div className="flex items-center gap-5">
            <a
              href="/connect"
              className="rounded-md bg-white px-9 py-4 text-lg font-medium whitespace-nowrap text-black transition hover:opacity-90"
            >
              Join us for Service
            </a>
            <a
              href="https://www.youtube.com/@fellowshipchurchmd/streams"
              target="_blank"
              rel="noopener"
              className="rounded-md border border-white px-9 py-4 text-lg font-medium whitespace-nowrap text-white transition hover:bg-white/10"
            >
              Stream Online
            </a>
          </div>
        }
      >
        <MediaContent />
      </ScrollExpandMedia>
    </div>
  );
}

export default Demo;
