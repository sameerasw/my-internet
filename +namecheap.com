/* namecheap-transparency */
html, body, #header, nav, #header .top-hat, #apnav li, th, td, .gb-header, .gb-top-block, .uiexpiringsoon .nav-tabs, .tab-list, li.tab{
  background-color: transparent !important;
  background: none !important;
  border: none !important;
  box-shadow: none !important;
}

/* namecheap-darkreader */
:root{
  --darkreader-background-ffffff: transparent !important;
}

/* namecheap-no footer */
footer, layout-livechat{
  display: none !important;
}

/* namecheap-no borders */
[data-toggle="tab"], hr{
  border: none !important;
}
