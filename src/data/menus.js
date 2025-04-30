export const menuMain = [
    {
        name: "Home",
        url: "/",
        highlighted: false,
    },
    {
        name: "Menu",
        url: "#",
        highlighted: false,
        submenu: [
            {
                name: "Leyton Menu", // Name of the first location
                url: "/Leyton-menu", // URL for the first location page
            },
            {
                name: "tooting bec Menu", // Name of the second location
                url: "/tooting-menu", // URL for the second location page
            },
            // You can add more location objects here if needed in the future
        ]
    },
    {
        name: "About Us",
        url: "/about-us",
        highlighted: false,
    },
    {
        name: "Gallery",
        url: "/gallery",
        highlighted: false,
    },
    {
        // Parent item for the submenu
        name: "Locations",
        url: "#", // Link to an overview page (optional)
        highlighted: false,
        // Add the 'submenu' array
        submenu: [
            {
                name: "Leyton", // Name of the first location
                url: "/Leyton", // URL for the first location page
            },
            {
                name: "tooting bec", // Name of the second location
                url: "/tooting-bec", // URL for the second location page
            },
            // You can add more location objects here if needed in the future
        ]
    },
    {
        name: "Order",
        // Make sure this booking link is appropriate for all locations or a general booking portal
        url: "https://www.just-eat.co.uk/restaurants-branche-london-leyton/menu?utm_source=google&utm_medium=organic&utm_campaign=orderaction",
        highlighted: true,
    },
];

// --- Footer structures ---
// Consider adding the specific locations to the footer navigation as well for accessibility/SEO

export const footerPrimary = [
    {
        title: "Navigation",
        items: [
            { name: "Home", url: "/" },
            { name: "Menu", url: "/menu" },
            { name: "About Us", url: "/about-us" },
            { name: "Gallery", url: "/gallery" },
            { name: "Locations", url: "/locations" }, // Overview link
            { name: "Leyton", url: "/Leyton" }, // Specific link
            { name: "Location 2", url: "/location2" }, // Specific link
        ],
    },
];

export const footerSecondary = [
    {
        title: "Support",
        items: [
            { name: "Pricing", url: "/pricing" },
        ],
    },
];

export const footerTertiary = [
    {
        title: "Links",
        items: [
            { name: "Privacy Policy", url: '/privacy-policy' },
            { name: "API Status", url: "/api-status" },
        ],
    },
];