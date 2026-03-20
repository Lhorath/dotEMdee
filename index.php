<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Dot Em Dee is the full service Markdown editor with live preview, side-by-side editing, and platform-aware snippet shortcuts for GitHub, Discord, GitLab, Obsidian, Reddit, and Slack.">
    <meta name="keywords" content="markdown editor, live markdown preview, markdown snippets, github markdown, discord markdown, gitlab markdown, obsidian markdown, reddit markdown, slack mrkdwn">
    <meta name="author" content="Dot Em Dee">
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="theme-color" content="#0b1020">
    <meta name="application-name" content="Dot Em Dee">
    <meta name="format-detection" content="telephone=no">
    <link rel="canonical" href="https://dotemdee.com/">
    <link rel="sitemap" type="application/xml" title="Sitemap" href="https://dotemdee.com/sitemap.xml">

    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Dot Em Dee">
    <meta property="og:title" content="Dot Em Dee | The Full Service Markdown Editor">
    <meta property="og:description" content="Write Markdown faster with live preview, platform-aware snippets, and a clean side-by-side editor experience.">
    <meta property="og:url" content="https://dotemdee.com/">
    <meta property="og:image" content="https://dotemdee.com/og-image.svg">
    <meta property="og:image:alt" content="Dot Em Dee - The Full Service Markdown Editor">
    <meta property="og:locale" content="en_CA">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Dot Em Dee | The Full Service Markdown Editor">
    <meta name="twitter:description" content="Live Markdown editor with side-by-side preview and platform-specific snippet shortcuts.">
    <meta name="twitter:image" content="https://dotemdee.com/og-image.svg">
    <meta name="twitter:image:alt" content="Dot Em Dee - The Full Service Markdown Editor">
    <title>Dot Em Dee | The Full Service Markdown Editor</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Dot Em Dee",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Web",
            "url": "https://dotemdee.com/",
            "description": "The full service Markdown editor with live preview and platform-specific snippet tools.",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
            }
        }
    </script>
</head>
<body>
    <div class="app-shell">
        <header class="site-header">
            <div class="brand-wrap">
                <p class="eyebrow">Dot Em Dee</p>
                <h1>The Full Service Markdown Editor</h1>
            </div>
        </header>

        <main class="site-main">
            <div class="toolbar" id="snippetToolbar" aria-label="Markdown snippets toolbar"></div>

            <div class="editor-container">
                <textarea id="editor" aria-label="Markdown editor"></textarea>
                <div id="preview" aria-label="Live markdown preview"></div>
            </div>
        </main>

        <footer class="site-footer">
            <p>&copy; <?php echo date('Y'); ?> Dot Em Dee. All rights reserved.</p>
            <p>Website design by <a href="https://macweb.ca" target="_blank" rel="noopener noreferrer">MacWeb.ca</a></p>
        </footer>
    </div>

    <script src="dotemdee.js"></script>
</body>
</html>
