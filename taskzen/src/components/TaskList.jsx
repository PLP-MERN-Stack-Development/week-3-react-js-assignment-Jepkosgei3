import { useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function TaskList({ tasks, setTasks }) {
  const [expandedTask, setExpandedTask] = useState(null);

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-200">
      <div className="mb-4" style={{ color: '#e0e7f3' }}>
        <h2 className="text-xl font-semibold">Your Tasks ({tasks.length})</h2>
      </div>
      <div className="space-y-6">
        {tasks.length === 0 ? (
          <div className="text-center py-8" style={{ color: '#e0e7f3' }}>
            <Sparkles className="mx-auto h-10 w-10 text-[#f4a261] mb-2 animate-spin-slow" />
            <h2 className="text-3xl font-bold text-[#e0e7f3]">No tasks yet.</h2>
            <p className="text-lg text-[#e0e7f3]">Add your first task to get started!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {tasks.map((task) => (
              <div 
                key={task.id}
                className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
              >
                <div className="flex justify-between items-start gap-3">
                  <button
                    onClick={() => toggleComplete(task.id)}
                    className="h-8 w-8 p-0 rounded-full hover:bg-gray-100 transition-colors"
                    style={{ border: 'none', cursor: 'pointer' }}
                  >
                    {task.completed ? (
                      <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
                        <span role="img" aria-label="check" style={{ fontSize: '12px' }}>✓</span>
                      </div>
                    ) : (
                      <div className="h-4 w-4 rounded border border-gray-300" />
                    )}
                  </button>
                  
                  <div className="flex-1 min-w-0">
                    <div 
                      className="cursor-pointer"
                      onClick={() => setExpandedTask(expandedTask === task.id ? null : task.id)}
                    >
                      <div className={`font-medium ${task.completed ? 'line-through' : ''}`} style={{ color: task.completed ? '#a3bffa' : '#f4a261' }}>
                        {task.title}
                      </div>
                      {(expandedTask === task.id || task.description) && (
                        <p className={`text-sm mt-1 ${task.completed ? 'line-through' : ''}`} style={{ color: task.completed ? '#a3bffa' : '#ffffff' }}>
                          {task.description || 'No description provided'}
                        </p>
                      )}
                    </div>
                    <div className="mt-2">
                      <div className={`flex items-center py-1 px-2 rounded-full ${task.priority === 'low' ? 'bg-[#bbf7d0]' : task.priority === 'medium' ? 'bg-[#fefcbf]' : 'bg-[#fecaca]'}`} style={{ color: '#1e40af' }}>
                        <span className="mr-2" style={{ fontSize: '12px' }}>🏴</span>
                        <span className="mr-4">{task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}</span>
                        <span>
                          {new Date(task.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="h-8 w-8 text-gray-500 hover:text-red-500 transition-colors"
                    style={{ border: 'none', cursor: 'pointer' }}
                  >
                    <span role="img" aria-label="trash" style={{ fontSize: '16px' }}>🗑️</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}