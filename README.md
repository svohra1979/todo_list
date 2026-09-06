# Todo List

A lightweight browser-based todo list for adding, completing, deleting, and clearing tasks. Todos and the selected theme are saved locally in the browser.

## Features

- Add tasks from the input field
- Mark tasks as completed
- Delete tasks with confirmation
- Clear all completed tasks
- Toggle between light and dark mode
- Persist todos and theme preferences with `localStorage`
- Responsive white-and-blue interface

## Project Structure

- `index.html` - Application markup
- `style.css` - Layout, colors, and responsive styling
- `script.js` - Todo behavior, persistence, and theme toggle

## Usage

Open `index.html` in a modern web browser. No build tools or dependencies are required.

## Data Storage

The application uses browser `localStorage` under the following keys:

- `todos` - Saved todo items
- `darkMode` - Selected theme preference
