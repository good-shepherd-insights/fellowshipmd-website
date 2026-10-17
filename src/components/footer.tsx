export default function SiteFooter() {
  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 bg-[rgb(234,230,225)] px-6 pb-16 pt-16 text-black md:px-[43px] md:pb-[69px] md:pt-[175px]">
      <div className="mx-auto grid max-w-[1354px] grid-cols-1 gap-10 md:grid-cols-[671px_216px_387px] md:gap-x-[12px]">
        <div>
          <h3 className="mb-[31px] text-[26.368px] leading-none font-bold italic">Fellowship Church</h3>
          <p className="text-[14.272px] leading-[21.5px]">Son of David Congregation</p>
          <p className="text-[14.272px] leading-[21.5px]">19100 Muncaster Rd, Derwood, MD 20855</p>
        </div>
        <div>
          <h3 className="mb-[31px] text-[26.368px] leading-none font-bold italic">Info</h3>
          <ul className="space-y-0 text-base leading-6">
            <li>
              <a href="/contact" className="underline decoration-1 underline-offset-2" style={{ color: "rgb(174,30,50)" }}>
                Contact
              </a>
            </li>
            <li>
              <a href="/beliefs" className="underline decoration-1 underline-offset-2" style={{ color: "rgb(174,30,50)" }}>
                About
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/fellowshipchurchmd/"
                target="_blank"
                rel="noopener"
                className="underline decoration-1 underline-offset-2"
                style={{ color: "rgb(174,30,50)" }}
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div className="md:pl-[56px]">
          <h3 className="mb-[31px] text-[26.368px] leading-none font-bold italic">Programs</h3>
          <p className="text-base leading-6">COMING SOON</p>
        </div>
      </div>
    </div>
  );
}
