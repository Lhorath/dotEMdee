const editor = document.getElementById("editor");
const preview = document.getElementById("preview");
const snippetToolbar = document.getElementById("snippetToolbar");

const initialContent = `# Welcome to Dot Em Dee

## The Full Service Markdown Editor
Type your Markdown on the left and watch the preview update on the right.

### Quick Start
- Use the snippet toolbar to insert or wrap formatting fast.
- Choose a platform preset (GitHub, Discord, GitLab, Obsidian, Reddit, Slack).
- Write naturally and preview instantly.

> Dot Em Dee is built for clean writing and fast formatting.

\`\`\`js
function helloDotEmDee() {
  console.log("Markdown made easy.");
}
\`\`\`
`;

function updatePreview() {
    preview.innerHTML = marked.parse(editor.value);
}

const coreSnippetGroups = [
    {
        name: "Headings",
        buttons: [
            { id: "heading-h1", label: "H1", title: "Header 1", template: "# {{selection}}", defaultSelection: "Heading 1" },
            { id: "heading-h2", label: "H2", title: "Header 2", template: "## {{selection}}", defaultSelection: "Heading 2" },
            { id: "heading-h3", label: "H3", title: "Header 3", template: "### {{selection}}", defaultSelection: "Heading 3" }
        ]
    },
    {
        name: "Formatting",
        buttons: [
            { id: "format-bold", label: "B", title: "Bold", template: "**{{selection}}**", defaultSelection: "bold text" },
            { id: "format-italic", label: "I", title: "Italic", template: "*{{selection}}*", defaultSelection: "italic text" },
            { id: "format-strike", label: "S", title: "Strikethrough", template: "~~{{selection}}~~", defaultSelection: "strikethrough" },
            { id: "format-link", label: "Link", title: "Link", template: "[{{selection}}](https://example.com)", defaultSelection: "link text" },
            { id: "format-image", label: "Img", title: "Image", template: "![{{selection}}](https://example.com/image.png)", defaultSelection: "alt text" },
            { id: "format-inline-code", label: "</>", title: "Inline code", template: "`{{selection}}`", defaultSelection: "code" }
        ]
    },
    {
        name: "Blocks",
        buttons: [
            { id: "block-quote", label: "Quote", title: "Blockquote", template: "> {{selection}}", defaultSelection: "quoted text" },
            { id: "block-ul", label: "UL", title: "Unordered list", template: "- item 1\n- item 2\n- item 3" },
            { id: "block-ol", label: "OL", title: "Ordered list", template: "1. item 1\n2. item 2\n3. item 3" },
            { id: "block-hr", label: "HR", title: "Horizontal rule", template: "\n---\n" },
            { id: "block-table", label: "Table", title: "Table", template: "| Column A | Column B |\n| --- | --- |\n| Value 1 | Value 2 |" }
        ]
    },
    {
        name: "Code",
        buttons: [
            { id: "code-generic", label: "Code", title: "Generic code block", template: "```\n{{selection}}\n```", defaultSelection: "your code here" },
            { id: "code-js", label: "JS", title: "JavaScript code block", template: "```js\n{{selection}}\n```", defaultSelection: 'console.log("Hello world");' },
            { id: "code-php", label: "PHP", title: "PHP code block", template: '```php\n{{selection}}\n```', defaultSelection: '<?php\necho "Hello world";\n?>' },
            { id: "code-diff", label: "Diff", title: "Diff block", template: "```diff\n- old line\n+ new line\n```" }
        ]
    }
];

const platformCoreSupport = {
    github: new Set([
        "heading-h1", "heading-h2", "heading-h3",
        "format-bold", "format-italic", "format-strike", "format-link", "format-image", "format-inline-code",
        "block-quote", "block-ul", "block-ol", "block-hr", "block-table",
        "code-generic", "code-js", "code-php", "code-diff"
    ]),
    gitlab: new Set([
        "heading-h1", "heading-h2", "heading-h3",
        "format-bold", "format-italic", "format-strike", "format-link", "format-image", "format-inline-code",
        "block-quote", "block-ul", "block-ol", "block-hr", "block-table",
        "code-generic", "code-js", "code-php", "code-diff"
    ]),
    obsidian: new Set([
        "heading-h1", "heading-h2", "heading-h3",
        "format-bold", "format-italic", "format-strike", "format-link", "format-image", "format-inline-code",
        "block-quote", "block-ul", "block-ol", "block-hr", "block-table",
        "code-generic", "code-js", "code-php", "code-diff"
    ]),
    reddit: new Set([
        "heading-h1", "heading-h2", "heading-h3",
        "format-bold", "format-italic", "format-strike", "format-link", "format-inline-code",
        "block-quote", "block-ul", "block-ol", "block-hr",
        "code-generic", "code-js", "code-php", "code-diff"
    ]),
    slack: new Set([
        "format-bold", "format-italic", "format-strike", "format-inline-code",
        "block-quote",
        "code-generic", "code-js", "code-php", "code-diff"
    ]),
    discord: new Set([
        "heading-h1", "heading-h2", "heading-h3",
        "format-bold", "format-italic", "format-strike", "format-link", "format-inline-code",
        "block-quote", "block-ul", "block-ol",
        "code-generic", "code-js", "code-php", "code-diff"
    ])
};

const platformSnippetSets = {
    github: {
        label: "GitHub",
        buttons: [
            { label: "Task [ ]", title: "GitHub task list item unchecked", template: "- [ ] {{selection}}", defaultSelection: "todo item" },
            { label: "Task [x]", title: "GitHub task list item checked", template: "- [x] {{selection}}", defaultSelection: "done item" },
            { label: "@mention", title: "GitHub user mention", template: "@username" },
            { label: "#Issue", title: "GitHub issue reference", template: "#123" },
            { label: "Footnote", title: "GitHub footnote", template: "{{selection}}[^1]\n\n[^1]: Footnote text", defaultSelection: "Reference text" },
            { label: "Callout", title: "GitHub note callout", template: "> [!NOTE]\n> {{selection}}", defaultSelection: "Important note" }
        ]
    },
    discord: {
        label: "Discord",
        buttons: [
            { label: "@user", title: "Discord mention placeholder", template: "@user" },
            { label: "#channel", title: "Discord channel placeholder", template: "#channel" },
            { label: "Spoiler", title: "Discord spoiler", template: "||{{selection}}||", defaultSelection: "spoiler text" },
            { label: ":smile:", title: "Discord emoji shortcode", template: ":smile:" },
            { label: ">>>", title: "Discord multiline blockquote", template: ">>> {{selection}}", defaultSelection: "multi-line quoted text" },
            { label: "<URL>", title: "Disable automatic URL linking", template: "<{{selection}}>", defaultSelection: "https://example.com" },
            { label: "JS Block", title: "Discord JavaScript block", template: "```js\n{{selection}}\n```", defaultSelection: 'console.log("Discord snippet");' }
        ]
    },
    reddit: {
        label: "Reddit",
        buttons: [
            { label: "/u/user", title: "Reddit user mention", template: "/u/username" },
            { label: "/r/sub", title: "Subreddit reference", template: "/r/subreddit" },
            { label: "Spoiler", title: "Reddit spoiler", template: ">!{{selection}}!<", defaultSelection: "spoiler text" },
            { label: "NSFW", title: "NSFW tag", template: "[NSFW] {{selection}}", defaultSelection: "Post title" },
            { label: "Quote >>", title: "Nested quote style", template: "> {{selection}}", defaultSelection: "quoted text" }
        ]
    },
    gitlab: {
        label: "GitLab",
        buttons: [
            { label: "Task [ ]", title: "GitLab task list item unchecked", template: "- [ ] {{selection}}", defaultSelection: "todo item" },
            { label: "Task [x]", title: "GitLab task list item checked", template: "- [x] {{selection}}", defaultSelection: "done item" },
            { label: "!123", title: "GitLab merge request reference", template: "!123" },
            { label: "#123", title: "GitLab issue reference", template: "#123" },
            { label: "@user", title: "GitLab mention", template: "@username" },
            { label: "~label", title: "GitLab label reference", template: '~"backend"' },
            { label: "TOC", title: "GitLab table of contents marker", template: "[[_TOC_]]" }
        ]
    },
    obsidian: {
        label: "Obsidian",
        buttons: [
            { label: "[[Link]]", title: "Obsidian wiki link", template: "[[{{selection}}]]", defaultSelection: "Note Name" },
            { label: "[[A|B]]", title: "Obsidian wiki link with alias", template: "[[{{selection}}|Alias]]", defaultSelection: "Note Name" },
            { label: "![[Embed]]", title: "Obsidian embed", template: "![[{{selection}}]]", defaultSelection: "Note Name" },
            { label: "Callout", title: "Obsidian callout block", template: "> [!note]\n> {{selection}}", defaultSelection: "Callout content" },
            { label: "#tag", title: "Obsidian tag", template: "#tag" },
            { label: "==HL==", title: "Obsidian highlight", template: "=={{selection}}==", defaultSelection: "highlighted text" },
            { label: "Task [ ]", title: "Obsidian task list item unchecked", template: "- [ ] {{selection}}", defaultSelection: "todo item" },
            { label: "Task [x]", title: "Obsidian task list item checked", template: "- [x] {{selection}}", defaultSelection: "done item" },
            { label: "^block", title: "Obsidian block ID", template: "^block-id" }
        ]
    },
    slack: {
        label: "Slack",
        buttons: [
            { label: "@user", title: "Slack mention placeholder", template: "<@U12345678>" },
            { label: "#channel", title: "Slack channel placeholder", template: "<#C12345678|general>" },
            { label: ":emoji:", title: "Slack emoji shortcode", template: ":smile:" },
            { label: "Link", title: "Slack formatted link", template: "<https://example.com|{{selection}}>", defaultSelection: "link text" },
            { label: "Date", title: "Slack date formatting token", template: "<!date^1672531200^{date_short} at {time}|Jan 1, 2023 at 12:00 PM>" },
            { label: "@here", title: "Slack special mention", template: "<!here>" }
        ]
    }
};

let selectedPlatform = "github";

function applySnippet(snippet) {
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const currentValue = editor.value;
    const selectedText = currentValue.slice(start, end);
    const selectionText = selectedText || snippet.defaultSelection || "";

    let insertedText = snippet.template.replace("{{selection}}", selectionText);
    const cursorTag = "{{cursor}}";
    const cursorOffset = insertedText.indexOf(cursorTag);

    if (cursorOffset >= 0) {
        insertedText = insertedText.replace(cursorTag, "");
    }

    const before = currentValue.slice(0, start);
    const after = currentValue.slice(end);
    editor.value = before + insertedText + after;

    if (!selectedText && snippet.defaultSelection) {
        const selectionStart = start + insertedText.indexOf(selectionText);
        editor.setSelectionRange(selectionStart, selectionStart + selectionText.length);
    } else if (cursorOffset >= 0) {
        const caret = start + cursorOffset;
        editor.setSelectionRange(caret, caret);
    } else {
        const caret = start + insertedText.length;
        editor.setSelectionRange(caret, caret);
    }

    editor.focus();
    updatePreview();
}

function createGroupElement(groupName, buttons) {
    const groupEl = document.createElement("div");
    groupEl.className = "toolbar-group";
    groupEl.setAttribute("role", "group");
    groupEl.setAttribute("aria-label", groupName);

    buttons.forEach((snippet) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "toolbar-button";
        button.textContent = snippet.label;
        button.title = snippet.title;
        button.addEventListener("click", () => applySnippet(snippet));
        groupEl.appendChild(button);
    });

    return groupEl;
}

function createPlatformSelector() {
    const control = document.createElement("div");
    control.className = "toolbar-control";

    const label = document.createElement("label");
    label.textContent = "Select Platform";
    label.setAttribute("for", "platformSelect");

    const select = document.createElement("select");
    select.id = "platformSelect";
    select.className = "toolbar-select";

    Object.keys(platformSnippetSets).forEach((platformKey) => {
        const option = document.createElement("option");
        option.value = platformKey;
        option.textContent = platformSnippetSets[platformKey].label;
        option.selected = platformKey === selectedPlatform;
        select.appendChild(option);
    });

    select.addEventListener("change", (event) => {
        selectedPlatform = event.target.value;
        renderToolbar();
    });

    control.appendChild(label);
    control.appendChild(select);
    return control;
}

function renderToolbar() {
    snippetToolbar.innerHTML = "";
    snippetToolbar.appendChild(createPlatformSelector());

    const supportedCore = platformCoreSupport[selectedPlatform];
    const visibleCoreGroups = coreSnippetGroups
        .map((group) => {
            if (!supportedCore) {
                return group;
            }
            return {
                name: group.name,
                buttons: group.buttons.filter((snippet) => supportedCore.has(snippet.id))
            };
        })
        .filter((group) => group.buttons.length > 0);

    visibleCoreGroups.forEach((group) => {
        snippetToolbar.appendChild(createGroupElement(group.name, group.buttons));
    });

    const activePlatform = platformSnippetSets[selectedPlatform];
    snippetToolbar.appendChild(createGroupElement(activePlatform.label, activePlatform.buttons));
}

editor.addEventListener("input", updatePreview);
editor.value = initialContent;
renderToolbar();
updatePreview();
