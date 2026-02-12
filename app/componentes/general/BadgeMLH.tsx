'use client'

const BadgeMLH = () => {
    return (
        <div>
            {/* Badge de MLH */}
            <a id="mlh-trust-badge"
                className="fixed top-0 right-6 max-w-[100px] min-w-[60px] w-[10%] z-50"
                href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=white" 
                target="_blank"
                rel="noopener noreferrer">
                <img src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg" 
                alt="Major League Hacking 2025 Hackathon Season" 
                style={{width:"100%"}} />
            </a>
        </div>
    )
}

export default BadgeMLH;