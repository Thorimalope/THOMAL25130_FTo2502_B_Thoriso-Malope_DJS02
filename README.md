# 🎧 Podcast Preview Web Component

This project includes a custom HTML element called `<podcast-preview>` that displays a podcast preview card. It shows the podcast’s image, title, number of seasons, genres, and when it was last updated. When a user clicks the card, a modal with more details can be opened.

---

## ✅ What It Does

- Renders podcast information in a styled card
- Uses Shadow DOM to keep the styles and layout separate from the rest of the page
- Accepts podcast data dynamically using JavaScript
- Opens a modal when the card is clicked

---

## 📦 How to Use It

### 1. Import and Register the Component

In your HTML or JavaScript, import the file:

```html
<script type="module" src="./previewComponent.js"></script>

## Podcast preview in js

const preview = document.createElement("podcast-preview");
preview.data = podcast;
container.appendChild(preview);

The "podcast-preview" is being dynamically rendered in createGrid.js like the code snippet above
