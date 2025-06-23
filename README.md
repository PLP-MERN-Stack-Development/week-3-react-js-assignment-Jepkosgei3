
# TaskElegance

TaskElegance is a stylish and intuitive task management application built with React. It allows users to add, edit, delete, and track tasks with priorities (low, medium, high) and a sleek user interface featuring a theme toggle, task filtering, and elegant card-based design. The app is designed with a navy-and-orange color scheme, ensuring a visually appealing experience.

## Features

- **Add Tasks**: Create tasks with titles, descriptions, and priority levels.
- **Task Management**: Mark tasks as completed, delete them, or expand for details.
- **Priority Levels**: Categorize tasks as low, medium, or high with color-coded indicators.
- **Filtering**: View all, pending, or completed tasks with tab navigation.
- **Theme Toggle**: Switch between light and dark modes.
- **Responsive Design**: Optimized for desktop and mobile views.
- **Real-Time Updates**: Tasks update instantly with a success notification.

## Technologies Used

- **React**: For building the user interface and managing state.
- **Tailwind CSS**: For styling with utility-first classes.
- **Lucide React**: For icons (e.g., Sparkles animation).
- **Vite**: For fast development and bundling.

## Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PLP-MERN-Stack-Development/week-3-react-js-assignment-Jepkosgei3
   cd taskzen
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173/` to view the app.

## Usage

- **Add a Task**: Enter a title, optional description, and select a priority. Click "Add Task" to save.
- **Manage Tasks**: Click the checkmark to toggle completion, the trash icon to delete, or the task text to expand details.
- **Filter Tasks**: Use the "All," "Pending," or "Completed" tabs to filter the task list.
- **Toggle Theme**: Click the sun/moon icon in the header to switch themes.

## File Structure

- `src/App.jsx`: Main component with task state and UI layout.
- `src/components/TaskList.jsx`: Component for rendering and managing the task list.
- `src/components/ThemeToggle.jsx`: Component for theme switching.
- `index.css`: Custom Tailwind and CSS styles.
- `package.json`: Project dependencies and scripts.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes and commit: `git commit -m "Description of changes"`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.


## Acknowledgments

- Inspired by modern task management apps with a focus on elegance.
- Thanks to the open-source communities behind React, Tailwind CSS, and Lucide React.
