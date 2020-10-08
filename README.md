# cupcake
A lightweight theme for hugo.

# Tips
  - **no pagination**
  - all articles are displayed on the homepage **(Only one page)** 
  - articles with **only text or few pictures** is recommended

# Example Site Config
```toml
baseURL = "http://example.org/"
languageCode = "en-us"
title = "site title"
theme = "cupcake"

# Highlight options.
# @See https://gohugo.io/content-management/syntax-highlighting/
PygmentsCodeFences = true # Enable syntax highlighting with GitHub flavoured code fences
PygmentsUseClasses = true # Use CSS classes to format highlighted code
PygmentsCodefencesGuessSyntax = true
PygmentsOptions = "linenos=table"

[params]
  # The date format to use; for a list of valid formats
  # @see https://gohugo.io/functions/format/
  dateFormatToUse = "2006年1月2号"

[params.social]
    a-email = "mailto:yourname@example.com"
    g-github = "https://github.com/yourname"
```
