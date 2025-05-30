/* transparency */
html,
body,
nav,
#nav,
.nav,
navbar,
.navbar,
#navbar,
header,
#header,
.header,
app,
#app,
section,
#__next,
#root,
.app,
.app-root, #wrapper,
body[data-theme="dark"], body[data-theme="light"],
#pass-sidebar, .side-bar,
#main, .sidebar,
main,
#content, #cu-identity,
section, .l-root,
#__next, .landing-hero,
#navigation-wrapper,
#global-navbar,
.head.notfixed, .main-container,
#app > div, .btm-nav > a,
body.dark_mode, body.light_mode,
text-div > textarea{
  background-color: transparent !important;
  background: none !important;
  border: none !important;
  box-shadow: none !important;
  transition: background-color 0.5s ease-in-out, background 0.5s ease-in-out, border 0.5s ease-in-out, box-shadow 0.5s ease-in-out !important;
}

d2l-labs-navigation-main-footer.d2l-branding-navigation-background-color.d2l-visible-on-ancestor-target, header nav d2l-labs-navigation, div.d2l-box.d2l-box-h.d2l-twopanelselector-side.d2l-twopanelselector-side-sep.d2l-repsonsive-collapse-layout.d2l-twopanelselector-padding {
  background-color: transparent !important;
  background: transparent !important;
}

button.d2l-button {
  box-shadow:  rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    background-color: transparent !important;
}

#ContentModuleTree .d2l-le-TreeAccordionItem.d2l-le-TreeAccordionItem-Selected > a.d2l-le-TreeAccordionItem-anchor::before, #ContentModuleTree .d2l-le-TreeAccordionItem.d2l-le-TreeAccordionItem-Selected > a.d2l-le-TreeAccordionItem-anchor:link::before, #ContentModuleTree .d2l-le-TreeAccordionItem.d2l-le-TreeAccordionItem-Selected > a.d2l-le-TreeAccordionItem-anchor:visited::before, #ContentModuleTree .d2l-le-TreeAccordionItem.d2l-le-TreeAccordionItem-Selected > a.d2l-le-TreeAccordionItem-anchor:hover::before, #ContentModuleTree .d2l-le-TreeAccordionItem.d2l-le-TreeAccordionItem-Selected > a.d2l-le-TreeAccordionItem-anchor:focus::before {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 20px;
}

d2l-dropdown-wrapper {
  background-color: rgba(0, 0, 0, 0.5);
}

div div d2l-labs-navigation-dropdown-button-icon {
  color: black;
}

:root {
  --d2l-color-ferrite: black;
}

div.d2l-navigation-s-main-wrapper * {
  color: black;
}
.d2l-input {background-color: transparent;}

/* darkreader */
:root{
  --darkreader-background-ffffff: transparent !important;
  --darkreader-text--d2l-color-galena: white;
  --d2l-color-tungsten: white;
}

div.d2l-navigation-s-main-wrapper * {
  color: white;
}

.d2l-search-simple-wc {
  box-shadow:  rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  background-color: transparent !important;
  border-radius: 6px;
}

.d2l-input::placeholder {
  color: white;
}

span.d2l-icon-custom {
  filter: invert(1) grayscale(1) brightness(100); /* might need to be removed, this was tested on a single image */
}