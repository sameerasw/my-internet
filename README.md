![web-preview-zen](https://github.com/user-attachments/assets/dae63448-0fa8-44a7-a294-e18561de9389)# my-internet

Custom CSS for websites to make the internet beautiful. Transparency being the main feature, these themes also include removal of distractions and further useful features for each website.

![Screenshot](https://github.com/user-attachments/assets/a938e6b8-b120-4ba9-bc39-0ec932856dda)

## [How to get transparency in Zen](https://www.sameerasw.com/zen)


## Contributing styles
- You can use the [example.com.css](https://github.com/sameerasw/my-internet/raw/refs/heads/main/websites/example.com.css) as a starter for most websites.
- Make sure the file is named in the correct format [website domain].css (google.com.css and docs.google.com.css are 2 styles which are not merged)
- Please respect auto theming for day and night themes. If the website does not have a dark theme, account for dark reader.
- Do not use wildcards such as applying transparency for all div elements since that is handled with force theming in the addon.
- Every property should include `!important` to make sure it gets applied.
- Do NOT leave commented out code.
- Add propper comments for each section of a feature at the beginning with a clear but compact description.
- For theming similar domains like app.arduino.cc , login.arduino.cc ..... similar urls with prefixes, you can add a general style with a leading + symbol when creating the stylesheet. ( `+arduino.cc.css` ) [example](https://github.com/sameerasw/my-internet/blob/main/websites/%2Bnixos.org.css)
- Each comment of the same file should have a unique domain specific identified prefix (yt- ytm- gh- ...) which will help the browser to separately apply themes.
  
  ```
    /* yt-transparency */
    :root{
      --colorBgApp: transparent !important;
    }

    /*  yt-no footer */
    footer.app-footer {
      display: none !important;
    }
  ```
  
- Once comitted to the repository, github actions will parse the css file and update/ generate the [styles.js](https://github.com/sameerasw/my-internet/blob/main/styles.json) and then will be deployed to the github pages allowing the add-on to fetch from it.
- Thank you <3

<a href="https://star-history.com/#sameerasw/my-internet&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=sameerasw/my-internet&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=sameerasw/my-internet&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=sameerasw/my-internet&type=Date" />
 </picture>
</a>

[Browse the repository](https://github.com/sameerasw/my-internet)

[Visit my website](https://www.sameerasw.com)
