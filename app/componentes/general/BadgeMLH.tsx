'use client'

const BadgeMLH = () => {
    return (
        <div>
            {/* Badge de MLH */}
            <a id="mlh-trust-badge"
                className="fixed top-0 right-0 md:right-8 lg:right-12 z-[10000] w-12 sm:w-14 md:w-16 lg:w-20 max-w-[100px] min-w-[48px]"
                href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
                target="_blank">
                <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
                alt="Major League Hacking 2026 Hackathon Season"
                className="w-full h-auto" />
            </a>
        </div>
    )
}

export default BadgeMLH;