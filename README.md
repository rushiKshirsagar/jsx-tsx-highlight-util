## Jsx Tsx Highlight Util

[Play around in Sandbox](https://codesandbox.io/p/sandbox/highlight-util-sample-n5zy89)

## What's New (v2.0.0)

- Breaking Change: highlightText function now accepts an options object instead of individual parameters. This provides more flexibility and makes the function easier to extend in the future.

- Previous Usage (v1.x.x)

```
highlightText("searchText", "searchable", true, { backgroundColor: "yellow" });
```

- New Usage (v2.0.0+)

```
highlightText({
  searchText: "searchText",
  element: "searchable",
  highlightAsSingleString: true,
  highlightStyle: { backgroundColor: "yellow" },
});
```

- Custom styling now works as a prop.

Default styling if highlightStyle prop is missing:

```
background: yellow;
color: black
```

## 📝 Description

jsx-tsx-highlight-util is a lightweight utility designed to dynamically highlight specific text within a DOM element by its className in React applications. It provides flexibility to highlight text as a single string or as separate words, with support for custom inline styles. The utility efficiently updates highlighted text based on user input and integrates smoothly with React's lifecycle methods such as useEffect.

## 🔑 Key Features:

- Performance Friendly: Lightweight and fast, with no leftover elements affecting performance.
- Reverts to Original State: Restores your DOM to its exact original form after removing highlights. Applies and removes highlights without bloating or disrupting your HTML structure.
- Dynamic Text Highlighting: Automatically updates the highlighted text in elements with a specified class based on user input.
- Highlight as Single String or Words: Choose to highlight a full string or break it into words and highlight each separately.
- Custom Styling: Easily apply custom styles to highlighted text through inline style objects.
- Minimal Setup: Works with minimal setup in your React components; simply call it within useEffect to apply highlighting.
- Efficient Cleanup: Old highlights are removed automatically before applying new ones to avoid overlapping or duplicate highlights, keeping your DOM clutter-free.

## ⛯ Sample Usage

```
import React, { useState } from "react";
import { highlightText } from "jsx-tsx-highlight-util";
import "./App.css";
const App = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const inputText = e.target.value;
    setSearch(inputText);
    highlightText({
      searchText: inputText,
      element: "searchable",
      highlightAsSingleString: false,
      highlightStyle: {
        color: "red",
        borderBottom: "2px solid red",
      },
    });
  };

  const sampleArr = ["sample", "text", "to", "search", 1, 2, 3];

  return (
    <div className="searchable">
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search..."
      />
      <div>
        This is a sample text for highlighting in your React application.
      </div>
      <div>
        {sampleArr.map((item, index) => {
          return (
            <ul key={index}>
              <li>{item}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default App;
```

## 🎬 Installing

```
npm i jsx-tsx-highlight-util
```

## 🗒️ API Reference:

highlightText(searchText: string, element: string, highlightAsSingleString: boolean = true, highlightStyle: object = null)

- searchText: The text you want to highlight.
- element: The class of the DOM elements where the text should be highlighted.
- highlightAsSingleString (optional): If true, highlights the entire string as one match. If false, highlights each word separately. Default is true.
- highlightStyle (optional): Object with styling details for highlighting

## separateWords:false

![D7E39C07-4E85-4E33-94C6-7506E43054D8](https://github.com/user-attachments/assets/335bc5c9-fbe8-4eb4-9b99-acad55c5831b)

## separateWords:true

![DF661D58-0DAA-4368-B68E-697AB9051A08](https://github.com/user-attachments/assets/6942f379-7234-4b34-952d-93a160a92ad5)

## 🔮 Feature Roadmap:

- Custom Styles as a prop ✅ (v2.0.1)
- Navigation between Highlights: Ability to navigate between highlighted words using next/previous buttons.
- Partial Word Matching: Add support for partial word matches or regex-based highlighting.
- Persistent Highlights: Option to save and persist highlights across page reloads.
