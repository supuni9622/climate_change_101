import React, { useState, useEffect } from 'react';
import { collection, addDoc, updateDoc, doc, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { Module, QuizQuestion } from '../utils/types';
import { PlusCircle, Edit, Trash, Save } from 'lucide-react';

const AdminPage: React.FC = () => {
  const [modules, setModules] = useState<Module[]>([]);
  const [selectedModule, setSelectedModule] = useState<Module | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadModules();
  }, []);

  const loadModules = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'modules'));
      const modulesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Module[];
      setModules(modulesData);
    } catch (error) {
      console.error('Error loading modules:', error);
    }
  };

  const handleSaveModule = async (module: Partial<Module>) => {
    try {
      setLoading(true);
      if (module.id) {
        await updateDoc(doc(db, 'modules', module.id), module);
      } else {
        await addDoc(collection(db, 'modules'), module);
      }
      await loadModules();
      setSelectedModule(null);
    } catch (error) {
      console.error('Error saving module:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteModule = async (moduleId: string) => {
    if (!confirm('Are you sure you want to delete this module?')) return;
    
    try {
      setLoading(true);
      await deleteDoc(doc(db, 'modules', moduleId));
      await loadModules();
    } catch (error) {
      console.error('Error deleting module:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-background pt-20 pb-16">
      <div className="container-custom">
        <div className="bg-white rounded-xl shadow-soft p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            <button
              onClick={() => setSelectedModule({})}
              className="btn-primary flex items-center"
            >
              <PlusCircle size={20} className="mr-2" />
              Add New Module
            </button>
          </div>

          {/* Module List */}
          <div className="grid gap-6">
            {modules.map(module => (
              <div
                key={module.id}
                className="border border-gray-200 rounded-lg p-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold">{module.title}</h3>
                  <p className="text-sm text-gray-600">{module.description}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedModule(module)}
                    className="btn bg-gray-100 hover:bg-gray-200 text-gray-700"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => handleDeleteModule(module.id)}
                    className="btn bg-error-50 hover:bg-error-100 text-error"
                  >
                    <Trash size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Module Editor Modal */}
          {selectedModule && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
                <h2 className="text-xl font-semibold mb-6">
                  {selectedModule.id ? 'Edit Module' : 'Add New Module'}
                </h2>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      value={selectedModule.title || ''}
                      onChange={e => setSelectedModule({...selectedModule, title: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      value={selectedModule.description || ''}
                      onChange={e => setSelectedModule({...selectedModule, description: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Level
                    </label>
                    <select
                      value={selectedModule.level || 'Beginner'}
                      onChange={e => setSelectedModule({...selectedModule, level: e.target.value as Module['level']})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    >
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Content (Markdown)
                    </label>
                    <textarea
                      value={selectedModule.content || ''}
                      onChange={e => setSelectedModule({...selectedModule, content: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg font-mono"
                      rows={10}
                    />
                  </div>

                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setSelectedModule(null)}
                      className="btn bg-gray-100 hover:bg-gray-200 text-gray-700"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSaveModule(selectedModule)}
                      disabled={loading}
                      className="btn-primary flex items-center"
                    >
                      <Save size={18} className="mr-2" />
                      {loading ? 'Saving...' : 'Save Module'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;