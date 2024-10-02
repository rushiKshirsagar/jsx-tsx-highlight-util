## `Jsx Tsx Highlight Util`

#### 📝 `Description`

jsx-tsx-highlight-util is a lightweight utility designed to dynamically highlight specific text within a DOM element by its className in React applications. It provides flexibility to highlight text as a single string or as separate words, with support for custom inline styles. The utility efficiently updates highlighted text based on user input and integrates smoothly with React's lifecycle methods such as useEffect.

This library is still in beta and hasn't been thoroughly tested with all Js frameworks/libraries. If you would like to contribute, writing tests, documentation, handling scenarios, please don't hesitate to raise PRs. ` >1.0.5 is stable.`

#### 🔑 `Key Features:`

- Dynamic Text Highlighting: Automatically updates the highlighted text in elements with a specified class based on user input.
- Highlight as Single String or Words: Choose to highlight a full string or break it into words and highlight each separately.
- Custom Styling: Easily apply custom styles to highlighted text through inline style objects.
- Minimal Setup: Works with minimal setup in your React components; simply call it within useEffect to apply highlighting.
- Efficient Cleanup: Old highlights are removed automatically before applying new ones to avoid overlapping or duplicate highlights.

#### ⛯ `Sample Usage`

```
import React, { useState } from "react";
import { highlightText } from "jsx-tsx-highlight-util";

const App = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    const inputText = e.target.value;
    setSearchText(inputText);

    highlightText(inputText, "searchable", false);
  };

  const sampleArr = ["abc", "pqr", 1, 2, 3, 4];

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={handleSearch}
        placeholder="Search..."
      />
      <div className="searchable">
        This is a sample text for highlighting in your React application.
      </div>
      <div className="searchable">
        {sampleArr.map((item, index) => (
          <ul key={index}>
            <li>{item}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default App;
```

#### 🎬 `Installing`

```
npm i jsx-tsx-highlight-util
```

#### 🗒️ `API Reference:`

highlightText(searchText: string, className: string, highlightAsSingleString: boolean = true, highlightStyle: object = null)

- searchText: The text you want to highlight.
- className: The class of the DOM elements where the text should be highlighted.
- highlightAsSingleString (optional): If true, highlights the entire string as one match. If false, highlights each word separately. Default is true.

Example:

```
highlightText("sample text", "highlight-container", false);
```

#### separateWords:false

![D7E39C07-4E85-4E33-94C6-7506E43054D8](https://github.com/user-attachments/assets/335bc5c9-fbe8-4eb4-9b99-acad55c5831b)

#### separateWords:true

![DF661D58-0DAA-4368-B68E-697AB9051A08](https://github.com/user-attachments/assets/6942f379-7234-4b34-952d-93a160a92ad5)

#### 🔮 `Feature Roadmap:`

- Custom Styles as a prop
- Navigation between Highlights: Ability to navigate between highlighted words using next/previous buttons.
- Partial Word Matching: Add support for partial word matches or regex-based highlighting.
- Persistent Highlights: Option to save and persist highlights across page reloads.
