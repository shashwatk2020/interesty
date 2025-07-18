import React, { useState } from 'react';
import { BarChart3, Users, Calendar, MapPin, Settings, Globe, Link, TrendingUp, Shield, Database, Plus, Activity } from 'lucide-react';
import EntityList from '../components/admin/EntityList';
import EntityForm from '../components/admin/EntityForm';

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showForm, setShowForm] = useState(false);
  const [editingEntity, setEditingEntity] = useState<any>(null);
  const [currentEntityType, setCurrentEntityType] = useState<'competitions' | 'teams' | 'venues' | 'fixtures'>('competitions');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'competitions', label: 'Competitions', icon: Calendar },
    { id: 'teams', label: 'Teams', icon: Users },
    { id: 'fixtures', label: 'Fixtures', icon: Calendar },
    { id: 'venues', label: 'Venues', icon: MapPin },
    { id: 'partners', label: 'Partners', icon: Link },
    { id: 'languages', label: 'Languages', icon: Globe },
    { id: 'seo', label: 'SEO', icon: TrendingUp },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'activity', label: 'Activity Logs', icon: Activity },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const handleEdit = (entity: any) => {
    setEditingEntity(entity);
    setShowForm(true);
  };

  const handleAdd = () => {
    setEditingEntity(null);
    setShowForm(true);
  };

  const handleSave = (entity: any) => {
    setShowForm(false);
    setEditingEntity(null);
    // Refresh the list by switching tabs
    const currentTab = activeTab;
    setActiveTab('dashboard');
    setTimeout(() => setActiveTab(currentTab), 100);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingEntity(null);
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Competitions</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
              <p className="text-xs text-green-600 mt-1">+3 this month</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Teams</p>
              <p className="text-2xl font-bold text-gray-900">156</p>
              <p className="text-xs text-blue-600 mt-1">+12 this month</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Fixtures</p>
              <p className="text-2xl font-bold text-gray-900">89</p>
              <p className="text-xs text-orange-600 mt-1">+7 this week</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <Calendar className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Venues</p>
              <p className="text-2xl font-bold text-gray-900">45</p>
              <p className="text-xs text-purple-600 mt-1">+2 this month</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            onClick={() => {
              setCurrentEntityType('competitions');
              setActiveTab('competitions');
              handleAdd();
            }}
            className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
          >
            <Plus className="w-5 h-5 text-green-600 mr-3" />
            <span className="text-green-800 font-medium">Add Competition</span>
          </button>
          
          <button
            onClick={() => {
              setCurrentEntityType('teams');
              setActiveTab('teams');
              handleAdd();
            }}
            className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <Plus className="w-5 h-5 text-blue-600 mr-3" />
            <span className="text-blue-800 font-medium">Add Team</span>
          </button>
          
          <button
            onClick={() => {
              setCurrentEntityType('fixtures');
              setActiveTab('fixtures');
              handleAdd();
            }}
            className="flex items-center p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
          >
            <Plus className="w-5 h-5 text-orange-600 mr-3" />
            <span className="text-orange-800 font-medium">Add Fixture</span>
          </button>
          
          <button
            onClick={() => {
              setCurrentEntityType('venues');
              setActiveTab('venues');
              handleAdd();
            }}
            className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
          >
            <Plus className="w-5 h-5 text-purple-600 mr-3" />
            <span className="text-purple-800 font-medium">Add Venue</span>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Added new fixture: Real Madrid vs Barcelona</span>
              <span className="text-xs text-gray-400">2 hours ago</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Updated team: Manchester United</span>
              <span className="text-xs text-gray-400">4 hours ago</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Created competition: Champions League 2025</span>
              <span className="text-xs text-gray-400">1 day ago</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Added venue: Wembley Stadium</span>
              <span className="text-xs text-gray-400">2 days ago</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">System Status</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Database</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Healthy</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Search Index</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Updated</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Image CDN</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Online</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Partner APIs</span>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">Syncing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEntityManagement = (entityType: 'competitions' | 'teams' | 'venues' | 'fixtures') => {
    setCurrentEntityType(entityType);
    return (
      <EntityList
        entityType={entityType}
        onEdit={handleEdit}
        onAdd={handleAdd}
      />
    );
  };

  const renderPlaceholder = (title: string, description: string, icon: React.ComponentType<any>) => {
    const Icon = icon;
    return (
      <div className="text-center py-12">
        <Icon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'competitions':
        return renderEntityManagement('competitions');
      case 'teams':
        return renderEntityManagement('teams');
      case 'fixtures':
        return renderEntityManagement('fixtures');
      case 'venues':
        return renderEntityManagement('venues');
      case 'partners':
        return renderPlaceholder('Partner Management', 'Configure API integrations and commission rates', Link);
      case 'languages':
        return renderPlaceholder('Language Management', 'Manage translations and multilingual content', Globe);
      case 'seo':
        return renderPlaceholder('SEO Management', 'Optimize meta tags, sitemaps, and search rankings', TrendingUp);
      case 'analytics':
        return renderPlaceholder('Analytics Dashboard', 'Track performance metrics and user behavior', BarChart3);
      case 'activity':
        return renderPlaceholder('Activity Logs', 'View system activity and user actions', Activity);
      case 'settings':
        return renderPlaceholder('System Settings', 'Configure system preferences and security', Settings);
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg min-h-screen">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">⚽</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Admin Panel</h1>
                <p className="text-sm text-gray-600">TicketsFootball.net</p>
              </div>
            </div>
          </div>
          
          <nav className="mt-6">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                    activeTab === item.id ? 'bg-green-50 text-green-700 border-r-2 border-green-600' : 'text-gray-700'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {renderContent()}
        </div>
      </div>

      {/* Entity Form Modal */}
      {showForm && (
        <EntityForm
          entityType={currentEntityType}
          entity={editingEntity}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default AdminPanel;