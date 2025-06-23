import { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import TaskList from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', priority: 'medium' });
  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const addTask = () => {
    if (!newTask.title.trim()) {
      setError('Task title is required');
      return;
    }

    const taskToAdd = {
      ...newTask,
      id: Date.now().toString(),
      completed: false,
      createdAt: new Date().toISOString()
    };

    setTasks(prev => [...prev, taskToAdd]);
    setNewTask({ title: '', description: '', priority: 'medium' });
    setError('');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
    console.log('Task added:', taskToAdd); // Debug log
  };

  const filteredTasks = tasks.filter(task => {
    if (activeTab === 'completed') return task.completed;
    if (activeTab === 'pending') return !task.completed;
    return true;
  });

  useEffect(() => {
    document.documentElement.classList.add('transition-colors', 'duration-300');
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="min-h-screen p-6 bg-[#1a2a44]" style={{ fontFamily: 'Arial, sans-serif' }}>
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Elegant Header */}
        <header className="flex justify-between items-center p-4 bg-gradient-to-r from-[#f4a261] to-[#f6c090] text-white rounded-lg shadow-lg">
          <div className="flex items-center gap-2">
            <span role="img" aria-label="gem" style={{ fontSize: '24px' }}>💎</span>
            <h1 className="text-2xl font-bold">TaskElegance</h1>
          </div>
          <ThemeToggle />
        </header>

        {/* Success Notification */}
        {showSuccess && (
          <div className="fixed top-6 right-6 bg-[#f4a261] text-white px-4 py-2 rounded-lg shadow-md animate-pulse">
            <div className="flex items-center gap-2">
              <span role="img" aria-label="sparkles" style={{ fontSize: '20px' }}>✨</span>
              <span>Task added with flair!</span>
            </div>
          </div>
        )}

        {/* Add Task Card */}
        <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-200">
          <div className="mb-4" style={{ color: '#e0e7f3' }}>
            <h2 className="text-xl font-semibold">Add New Task</h2>
          </div>
          <div className="space-y-4">
            {error && (
              <div className="bg-red-500 text-white p-2 rounded-md">{error}</div>
            )}

            <div className="space-y-2" style={{ color: '#e0e7f3' }}>
              <label htmlFor="task-title" className="block">Title</label>
              <input
                id="task-title"
                placeholder="Task title"
                value={newTask.title}
                onChange={e => setNewTask({ ...newTask, title: e.target.value })}
                className="w-full max-w-md border-gray-300 bg-white text-black placeholder-gray-500 rounded-lg p-3"
                style={{ boxSizing: 'border-box' }}
              />
            </div>

            <div className="space-y-2" style={{ color: '#e0e7f3' }}>
              <label htmlFor="task-desc" className="block">Description</label>
              <textarea
                id="task-desc"
                placeholder="Details..."
                value={newTask.description}
                onChange={e => setNewTask({ ...newTask, description: e.target.value })}
                className="w-full max-w-md border-gray-300 bg-white text-black placeholder-gray-500 rounded-lg p-3 min-h-[120px]"
                style={{ boxSizing: 'border-box' }}
              />
            </div>

            <div className="space-y-2" style={{ color: '#e0e7f3' }}>
              <label className="block">Priority</label>
              <div className="flex gap-4">
                {['low', 'medium', 'high'].map((priority) => (
                  <button
                    key={priority}
                    onClick={() => setNewTask({ ...newTask, priority })}
                    className={`bg-[#f4a261] hover:bg-[#e07a5f] rounded-full px-4 py-2 ${newTask.priority === priority ? 'ring-2 ring-[#e07a5f]' : ''}`}
                    style={{ border: 'none', cursor: 'pointer', transition: 'all 0.3s', color: '#e0e7f3' }}
                  >
                    {priority.charAt(0).toUpperCase() + priority.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              onClick={addTask}
              className="bg-[#f4a261] hover:bg-[#e07a5f] text-white rounded-lg px-6 py-3 transition-all duration-300 transform hover:scale-105"
              style={{ border: 'none', cursor: 'pointer' }}
            >
              <span role="img" aria-label="plus" style={{ fontSize: '20px' }}>➕</span>
              <span className="ml-2">Add Task</span>
            </button>
          </div>
        </div>

        {/* Task Tabs */}
        <div className="w-full">
          <div className="flex justify-around bg-[#1a2a44] rounded-lg shadow-md p-1" style={{ color: '#e0e7f3' }}>
            {['all', 'pending', 'completed'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 text-center p-2 rounded-md ${activeTab === tab ? 'bg-[#f4a261] text-white' : 'bg-[#1a2a44] text-[#e0e7f3]'} transition-colors`}
                style={{ border: 'none', cursor: 'pointer' }}
              >
                {tab === 'all' ? 'All Tasks' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <TaskList tasks={filteredTasks} setTasks={setTasks} />
      </div>
    </div>
  );
}