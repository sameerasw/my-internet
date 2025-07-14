/* Transparency */

/* @Nav Bar */
.z-header,
/* @Sale Banner */
.mb-0 a,
/* @Featured Banned */
.bg-black,
/* @Staff Picks */
.mb-14,
.py-12,
/* @Search Button */
atomic-search-box::part(submit-button),
/* @Profile Dropdown */
#profile-option,
#profile-option div,
#profile-option button,
/* @Search for my assets */
._1BtTD, ._2lmnc,
/* @Profile Settings Sidebar */
._3o6eV, ._2sesk,
/* @Profile */
.bg-grey-100 {
    background: none !important;
    border: none !important;
    box-shadow: none !important;
}

/* @Staff Picks Items */
.h-full article,
/* @Search Box */
atomic-search-box::part(wrapper),
/* @My Assets Input Field */
#auto-complete-input {
    background: #00000030 !important;
    border: 2px solid #FFFFFF80 !important;
    border-radius: 20px !important;
    box-shadow: none !important;
}

/* @Search Box Dropdown */
atomic-search-box::part(suggestions-wrapper) {
    background: #000000F0 !important;
    border: 2px solid #FFFFFF80 !important;
    border-radius: 20px !important;
    box-shadow: none !important;
    overflow: hidden !important;
}

/* @Active Search Box Item */
atomic-search-box::part(active-suggestion) {
    background: #FFFFFF20 !important;
    border-radius: 0 !important;
}

/* @Login */
.py-14 img {
    display: none !important;
}

/* @Asset Page */

/* @Nav Bar */
._14LIz, ._1RD5, ._272DD, ._3Gzr1,
/* @Page */
._17DJ_, ._2e1KM,
/* @Categories */
._19tk1,
/* @Player */
.zYbh4,
/* @You might also like */
div[data-darkreader-inline-bgcolor],
/* @Quality assets | Trusted | Community support */
._3Q5ld,
/* @Unity */
._1F2cu, ._3RgsN,
/* @Asset Preview Selection Items */
._2l9mV, ._2_W2p,
/* @OneTrust Footer */
.ot-pc-footer, .ot-pc-footer-logo, .ot-btn-container,
/* @Cart Body */
._2hhoI,
/* @Cart Footer */
._28Q3X {
    background: none !important;
    border: none !important;
    box-shadow: none !important;
}

/* @Player */
._3hIWG {
    overflow: hidden !important;
    background: none !important;
    border-radius: 10px !important;
}

/* @Buy Button */
._3UE3J,
/* @Comments */
._1DjCC,
/* @Frequently Bought Together */
.a51Pv,
/* @Related Keywords */
.Eh1GG,
/* @Get Asset Store News */
.Lt-Qx input,
.Lt-Qx button,
._1pHWh,
/* @See More Buttons */
._3ra4I,
/* @Search for assets */
.DkwVu,
/* @Asset Preview Selector */
.XnbFH,
/* @Asset Preview Selected Item */
._1Yd1Z,
/* @Rating Slider Background */
._1pH5r,
/* @Page Buttons */
.size-10, atomic-popover::part(popover-button), atomic-breadbox::part(breadcrumb-button) {
    background: #00000050 !important;
    border: none !important;
    box-shadow: none !important;
}

/* @You might also like See More Button */
._3w0DH ._3ra4I {
    padding: 10px !important;
    border-radius: 5px !important;
}

/* @Asset Preview Selector */
.XnbFH {
    padding: 10px !important;
    border-radius: 5px !important;
    height: fit-content;
}

/* @Asset Summary Top Bar */
._4D1j6,
/* @Get Asset Store News Language Dropdown */
.GB-qX {
    background: #00000080 !important;
    border: none !important;
    box-shadow: none !important;
}

/* @Buttons */
._3UE3J {
    padding: 5px !important;
}

/* @Rating Slider */
.fmCxD {
    background: #FFFFFF !important;
}

/* @Sort Reviews Buttons */
._32EEm button {
    background: #00000050 !important;
    border: none !important;
    box-shadow: none !important;
}

/* @Review Buttons */
._2Y06J button {
    background: #00000030 !important;
    border: none !important;
    box-shadow: none !important;
    border-radius: 5px !important;
    padding: 5px !important;
    width: fit-content !important;
    height: fit-content !important;
}

/* @Quick Look */
._30TTm,
#onetrust-consent-sdk div[role="dialog"],
/* @Cart Dropdown */
._16O5w,
/* @Profile Dropdown */
._3MCKW, .z-modal {
    background: #000000C8 !important;
    border: none !important;
    box-shadow: none !important;
    border-radius: 20px !important;
    overflow: hidden !important;
}

/* @Quick Look Buttons */
#quick-look-add-to-cart-button-v2 button,
._3om09 a {
    background: #FFFFFF20 !important;
    border-radius: 5px !important;
}

/* @OneTrust Banner */
.ot-optout-signal {
    background: #00FF0050 !important;
    border: 2px solid #00FF0050 !important;
}

/* @OneTrust Menu Button */
.category-menu-switch-handler {
    border: none !important;
}

/* @OneTrust Active Menu Button */
.ot-active-menu {
    background: none !important;
    border: none !important;
    border-left: 5px solid #FFFFFF50 !important;
}


/* @OneTrust Borders */
.ot-pc-header {
    border: none !important;
}

/* @OneTrust Buttons */
.ot-btn-container button {
    background: #FFFFFF20 !important;
    border-radius: 5px !important;
    padding: 10px !important;
    width: 150px !important;
    height: 50px !important;
}

/* @OneTrust Button Containers */
.ot-btn-container,
.ot-btn-container div {
    background: none !important;
    width: fit-content !important;
    height: fit-content !important;
}

/* @Cart Dropdown Buttons */
.Y1yB6,
._3UE3J {
    background: #FFFFFF20 !important;
    border: none !important;
    border-radius: 5px !important;
    padding: 10px !important;
}

/* @Cart Page */
._3tbMl, ._1xqdh, ._1ynzS, .s4fvR,
/* @Header */
._2N-D5,
/* @You might also like */
._3NQQk {
    background: none !important;
    border: none !important;
    box-shadow: none !important;
}

/* @Toggle Buttons */
.dV1j7 {
    background: #00000050 !important;
    border: 2px solid #FFFFFF80 !important;
    border-radius: 5px !important;
    box-shadow: none !important;
    padding: 2px !important;
}

/* @Saved Assets Page */
._3XMKz, ._1ar_y, ._2XqM5 {
    background: none !important;
    border: none !important;
    box-shadow: none !important;
}

/* DarkReader */
:root {
    --darkreader-background-ffffff: transparent !important;
    --darkreader-background-181a1b: transparent !important;
}
