# Dot Em Dee

Icon: fa-solid fa-code

Description: Dotemdee - Markdown Editing Tool

Live: https://dotemdee.com/

Demo Site: http://dotemdee.dackdns.ddns.net/

GitHub: https://github.com/Lhorath/dotemdee




**The Full Service Markdown Editor**

Dot Em Dee is a side-by-side Markdown editor with live preview, a modern interface, and a platform-aware snippet toolbar for fast authoring across multiple Markdown ecosystems.

## Live Project Links

- **GitHub:** [https://github.com/Lhorath/dotEMdee](https://github.com/Lhorath/dotEMdee)


## What It Does

- Live Markdown rendering as you type
- Side-by-side editor and preview panes
- Config-driven snippet insertion toolbar
- Cursor/selection-aware formatting insertion
- Platform-specific syntax presets (GitHub, Discord, GitLab, Obsidian, Reddit, Slack)
- Clean, responsive, modern UI

## Recent Major Updates

- Rebranded app title and header to **Dot Em Dee - The Full Service Markdown Editor**
- Refactored inline CSS and JS into dedicated files:
  - `style.css`
  - `dotemdee.js`
- Added dynamic platform selection for snippet presets
- Added syntax-aware toolbar filtering by selected platform
- Added new platform presets:
  - Reddit
  - Slack
- Added footer credits:
  - Copyright line
  - Website design link to [MacWeb.ca](https://macweb.ca)

## Project Structure

- `index.php` - Main page layout and script/style includes
- `style.css` - Full visual design and responsive styling
- `dotemdee.js` - Editor logic, preview rendering, toolbar/snippet system
- `README.md` - Project documentation

## Snippet Toolbar Capabilities

### Core Markdown Snippets

- Headings (`#`, `##`, `###`)
- Bold, italic, strikethrough
- Links, images, inline code
- Blockquotes, unordered/ordered lists, horizontal rules
- Tables
- Fenced code blocks and language blocks (`js`, `php`, `diff`)

### Platform-Specific Snippets

- **GitHub:** task lists, mentions, issue refs, footnotes, callouts
- **Discord:** mentions, channels, spoilers, emojis, multiline quotes, URL formatting
- **GitLab:** task lists, MR/issue refs, mentions, label refs, TOC marker
- **Obsidian:** wikilinks, embeds, callouts, tags, highlight, tasks, block IDs
- **Reddit:** user/subreddit refs, spoilers, NSFW title tag, quote helper
- **Slack:** user/channel tokens, emoji shortcode, formatted links, date token, `@here`

## UX/Behavior Notes

- Snippets insert at the current cursor position
- Selected text is wrapped when snippet templates use `{{selection}}`
- Cursor/selection is preserved intelligently after insertion
- Preview updates immediately after every snippet insertion and input change

## Tech Notes

- Uses [Marked.js](https://marked.js.org/) for Markdown parsing
- No build step required
- Lightweight single-page PHP front end

## Run Locally

1. Place project in your web root (for example: `c:\xampp\htdocs`)
2. Start Apache (XAMPP)
3. Open `http://localhost/` (or your configured project URL)

## Credits

- Website design by [MacWeb.ca](https://macweb.ca)
