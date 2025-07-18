import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search, Filter, Eye, Calendar, MapPin, Users, Trophy } from 'lucide-react';
import { supabase, Competition, Team, Venue, Fixture } from '../../lib/supabase';

interface EntityListProps {
  entityType: 'competitions' | 'teams' | 'venues' | 'fixtures';
  onEdit: (entity: any) => void;
  onAdd: () => void;
}

const EntityList: React.FC<EntityListProps> = ({ entityType, onEdit, onAdd }) => {
  const [entities, setEntities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('created_at');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  useEffect(() => {
    loadEntities();
  }, [entityType, sortBy, sortOrder]);

  const loadEntities = async () => {
    setLoading(true);
    try {
      let query = supabase.from(entityType).select('*');

      // Add joins for fixtures to get related data
      if (entityType === 'fixtures') {
        query = supabase
          .from(entityType)
          .select(`
            *,
            home_team:teams!fixtures_home_team_id_fkey(name),
            away_team:teams!fixtures_away_team_id_fkey(name),
            venue:venues(name),
            competition:competitions(title)
          `);
      }

      query = query.order(sortBy, { ascending: sortOrder === 'asc' });

      const { data, error } = await query;
      if (error) throw error;
      setEntities(data || []);
    } catch (error) {
      console.error('Error loading entities:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    try {
      const { error } = await supabase.from(entityType).delete().eq('id', id);
      if (error) throw error;
      loadEntities();
    } catch (error) {
      console.error('Error deleting entity:', error);
      alert('Error deleting item. Please try again.');
    }
  };

  const filteredEntities = entities.filter(entity => {
    const matchesSearch = 
      (entity.title || entity.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (entity.slug || '').toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || entity.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getEntityIcon = () => {
    switch (entityType) {
      case 'competitions': return Trophy;
      case 'teams': return Users;
      case 'venues': return MapPin;
      case 'fixtures': return Calendar;
      default: return Trophy;
    }
  };

  const getStatusBadge = (status: string) => {
    const colors = {
      active: 'bg-green-100 text-green-800',
      upcoming: 'bg-blue-100 text-blue-800',
      past: 'bg-gray-100 text-gray-800',
      scheduled: 'bg-blue-100 text-blue-800',
      live: 'bg-red-100 text-red-800',
      finished: 'bg-gray-100 text-gray-800',
      postponed: 'bg-yellow-100 text-yellow-800'
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800'}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const renderEntityRow = (entity: any) => {
    const Icon = getEntityIcon();
    
    return (
      <tr key={entity.id} className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
                <Icon className="h-5 w-5 text-green-600" />
              </div>
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                {entity.title || entity.name}
              </div>
              <div className="text-sm text-gray-500">
                /{entity.slug}
              </div>
            </div>
          </div>
        </td>
        
        {entityType === 'fixtures' && (
          <>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {entity.home_team?.name} vs {entity.away_team?.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {entity.venue?.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {new Date(entity.match_date).toLocaleDateString()}
            </td>
          </>
        )}
        
        {entityType === 'teams' && (
          <>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {entity.country}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {entity.region}
            </td>
          </>
        )}
        
        {entityType === 'venues' && (
          <>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {entity.location}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {entity.capacity?.toLocaleString()}
            </td>
          </>
        )}
        
        {entityType === 'competitions' && (
          <>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {entity.start_date ? new Date(entity.start_date).toLocaleDateString() : '-'}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {entity.priority}
            </td>
          </>
        )}
        
        <td className="px-6 py-4 whitespace-nowrap">
          {getStatusBadge(entity.status)}
        </td>
        
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {new Date(entity.created_at).toLocaleDateString()}
        </td>
        
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onEdit(entity)}
              className="text-blue-600 hover:text-blue-900 p-1"
              title="Edit"
            >
              <Edit className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleDelete(entity.id)}
              className="text-red-600 hover:text-red-900 p-1"
              title="Delete"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </td>
      </tr>
    );
  };

  const getTableHeaders = () => {
    const baseHeaders = ['Name', 'Status', 'Created', 'Actions'];
    
    switch (entityType) {
      case 'fixtures':
        return ['Name', 'Teams', 'Venue', 'Date', ...baseHeaders.slice(1)];
      case 'teams':
        return ['Name', 'Country', 'Region', ...baseHeaders.slice(1)];
      case 'venues':
        return ['Name', 'Location', 'Capacity', ...baseHeaders.slice(1)];
      case 'competitions':
        return ['Name', 'Start Date', 'Priority', ...baseHeaders.slice(1)];
      default:
        return baseHeaders;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 capitalize">
          {entityType} Management
        </h2>
        <button
          onClick={onAdd}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add {entityType.slice(0, -1)}
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder={`Search ${entityType}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          <option value="all">All Status</option>
          {entityType === 'fixtures' ? (
            <>
              <option value="scheduled">Scheduled</option>
              <option value="live">Live</option>
              <option value="finished">Finished</option>
              <option value="postponed">Postponed</option>
            </>
          ) : (
            <>
              <option value="active">Active</option>
              <option value="upcoming">Upcoming</option>
              <option value="past">Past</option>
            </>
          )}
        </select>
        
        <select
          value={`${sortBy}-${sortOrder}`}
          onChange={(e) => {
            const [field, order] = e.target.value.split('-');
            setSortBy(field);
            setSortOrder(order as 'asc' | 'desc');
          }}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        >
          <option value="created_at-desc">Newest First</option>
          <option value="created_at-asc">Oldest First</option>
          <option value={`${entityType === 'teams' ? 'name' : 'title'}-asc`}>Name A-Z</option>
          <option value={`${entityType === 'teams' ? 'name' : 'title'}-desc`}>Name Z-A</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {getTableHeaders().map((header) => (
                  <th
                    key={header}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredEntities.length > 0 ? (
                filteredEntities.map(renderEntityRow)
              ) : (
                <tr>
                  <td colSpan={getTableHeaders().length} className="px-6 py-12 text-center text-gray-500">
                    No {entityType} found. {searchTerm && 'Try adjusting your search terms.'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>
            Showing {filteredEntities.length} of {entities.length} {entityType}
          </span>
          <span>
            Last updated: {new Date().toLocaleTimeString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EntityList;