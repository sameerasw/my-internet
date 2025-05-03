# my-internet

Custom CSS for websites to make the internet beautiful. Transparency being the main feature, these themes also include removal of distractions and further useful features for each website.

![Screenshot](https://github.com/user-attachments/assets/a938e6b8-b120-4ba9-bc39-0ec932856dda)

## [How to get transparency in Zen](https://www.sameerasw.com/zen)
[![web-preview-zen](https://github.com/user-attachments/assets/dae63448-0fa8-44a7-a294-e18561de9389)](https://www.sameerasw.com/zen)

## Contributing styles
> ### Please make sure you go through all the provided instructions before submittinga new theme with a PR.

1. You can use the [example.com.css](https://github.com/sameerasw/my-internet/raw/refs/heads/main/websites/example.com.css) as a starter for most websites to grab the stylesheet format.
2. Make sure the file is named in the correct format [website domain].css (google.com.css and docs.google.com.css are 2 styles which are not merged unless you do 9.)
3. Please respect auto theming for day and night themes. If the website does not have a dark theme, account for dark reader.
4. Do not use wildcards such as applying transparency for all div elements since that is handled with force theming in the addon.
5. Every property should include `!important` to make sure it gets applied.
6. Do NOT leave commented out code.
7. Don't include `www` in the stylesheet file name.
8. Add propper comments for each section of a feature at the beginning with a clear but compact description.
9. For theming similar domains like app.arduino.cc , login.arduino.cc ..... similar urls with `prefixes`, you can add a general style with a leading `+` symbol when creating the stylesheet. ( `+arduino.cc.css` ) [example](https://github.com/sameerasw/my-internet/blob/main/websites/%2Bnixos.org.css)
10. Similarly, for theming websites with a shared domain but with different `suffixes` (like google.com, google.lk...), you can add the `-` symbol to the start of the stylesheet file name so it will replace the provided domain of the file name's domain. (`-google.com.css`). [example](https://github.com/sameerasw/my-internet/blob/main/websites/-ebay.com.css)
11. [optional] Each comment of the same file should have a unique domain specific identified prefix (yt- ytm- gh- ...) which will help the browser to separately apply themes.
  
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

12. Always make sure the first feature is `transparency` and also use the exact feature name without a difference allowing the global transparency toggle to work. Prefixes with `-` are acceptable. 
13. Once comitted to the repository, github actions will parse the css file and update/ generate the [styles.js](https://github.com/sameerasw/my-internet/blob/main/styles.json) and then will be deployed to the github pages allowing the add-on to fetch from it.
> ### Thank you <3

<br>

<a href="https://star-history.com/#sameerasw/my-internet&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=sameerasw/my-internet&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=sameerasw/my-internet&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=sameerasw/my-internet&type=Date" />
 </picture>
</a>

[Browse the repository](https://github.com/sameerasw/my-internet)

[Visit my website](https://www.sameerasw.com)
