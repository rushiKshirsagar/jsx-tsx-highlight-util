## `Jsx Tsx Highlight Util`

#### 📝 `Description`

jsx-tsx-highlight-util is a lightweight utility designed to dynamically highlight specific text within a DOM element by its className in React applications. It provides flexibility in highlighting text sequences or separate words, with support for case sensitivity, custom styling, and efficient cleanup of previous highlights. Ideal for search or text filtering use cases, this utility seamlessly integrates into React's lifecycle methods such as useEffect for minimal setup.

#### 🔑 `Key Features:`
- Separate Word Search: Highlight individual words in a string, even if they appear out of sequence in the DOM element.
- Case Sensitivity: Toggle case-sensitive or case-insensitive text matching.
- Dynamic Text Highlighting: Automatically updates the highlighted text based on user input, with efficient cleanup of old highlights.
- Customizable: Optionally style highlighted text using custom inline styles or pass custom classes for advanced CSS control.
- Simple API: Works with minimal setup in your React components; simply call it within useEffect and watch the magic happen.

#### ⛯ `Sample Usage`

```
import { useState, useEffect } from "react";
import { highlightText } from "jsx-tsx-highlight-util";

function App() {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    highlightText("highlight-container", searchText, {
      separateWords: true, // Search for each word independently
      caseSensitive: false, // Default is case-insensitive
    });
  }, [searchText]);

  return (
    <>
      <input value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      <div className="highlight-container">
        This is a sample text to demonstrate text highlighting.
      </div>
    </>
  );
}

export default App;
```

#### 🎬 `Installing`

```
npm i jsx-tsx-highlight-util
```

#### 🗒️ `API Reference:`

highlightText(className: string, textToHighlight: string, options: object)
- className: The class of the DOM element to search for and highlight text.
- textToHighlight: The string or word(s) you want to highlight.

Options:
- separateWords (boolean): If true, highlights each word in the string independently. Default is false.
- caseSensitive (boolean): If true, enables case-sensitive search. Default is false.
- customStyle (object): Pass inline styles to customize the appearance of highlighted text.

Example:
```
highlightText('highlight-container', 'sample text', {
  separateWords: true,  // Highlights 'sample' and 'text' independently
  caseSensitive: false, // Case insensitive search (default)
  customStyle: { backgroundColor: 'lightblue', color: 'black' } // Custom styles
});
```


#### separateWords:false

![D7E39C07-4E85-4E33-94C6-7506E43054D8](https://github.com/user-attachments/assets/335bc5c9-fbe8-4eb4-9b99-acad55c5831b)

#### separateWords:true

![DF661D58-0DAA-4368-B68E-697AB9051A08](https://github.com/user-attachments/assets/6942f379-7234-4b34-952d-93a160a92ad5)

#### 🔮 `Feature Roadmap:`
- Navigation between Highlights: Jump between highlighted words using next/previous functionality.
- Partial Word Matching: Support for partial word matches or regex-based highlighting.
- Persistent Highlights: Option to save and persist highlights across page reloads.

