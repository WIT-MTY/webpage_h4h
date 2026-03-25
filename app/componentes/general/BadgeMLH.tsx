'use client'

const BadgeMLH = () => {
    return (
        <div>
            {/* Badge de MLH */}
            <a id="mlh-trust-badge"
                style={{
                    display: "block",
                    maxWidth: "110px",
                    minWidth: "70px",
                    position: "fixed",
                    right: "50px",
                    top: "0",
                    width: "9%",
                    zIndex: "10000"
                }}
                href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
                target="_blank">
                <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
                alt="Major League Hacking 2026 Hackathon Season"
                style={{width:"100%"}} />
            </a>
        </div>
    )
}

export default BadgeMLH;