import React, { useState, useEffect } from 'react';
import { Save, X, Eye, Upload, Plus, Trash2, Calendar, MapPin, Users, Trophy } from 'lucide-react';
import { supabase, Competition, Team, Venue, Fixture } from '../../lib/supabase';

interface EntityFormProps {
  entityType: 'competitions' | 'teams' | 'venues' | 'fixtures';
  entity?: Competition | Team | Venue | Fixture | null;
  onSave: (entity: any) => void;
  onCancel: () => void;
}

const EntityForm: React.FC<EntityFormProps> = ({ entityType, entity, onSave, onCancel }) => {
  const [formData, setFormData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(false);
  const [teams, setTeams] = useState<Team[]>([]);
  const [venues, setVenues] = useState<Venue[]>([]);
  const [competitions, setCompetitions] = useState<Competition[]>([]);

  useEffect(() => {
    if (entity) {
      setFormData(entity);
    } else {
      // Set default values based on entity type
      const defaults = getDefaultValues(entityType);
      setFormData(defaults);
    }

    // Load related entities for fixtures
    if (entityType === 'fixtures') {
      loadRelatedEntities();
    }
  }, [entity, entityType]);

  const loadRelatedEntities = async () => {
    const [teamsRes, venuesRes, competitionsRes] = await Promise.all([
      supabase.from('teams').select('*').order('name'),
      supabase.from('venues').select('*').order('name'),
      supabase.from('competitions').select('*').order('title')
    ]);

    if (teamsRes.data) setTeams(teamsRes.data);
    if (venuesRes.data) setVenues(venuesRes.data);
    if (competitionsRes.data) setCompetitions(competitionsRes.data);
  };

  const getDefaultValues = (type: string) => {
    const baseDefaults = {
      meta_title: '',
      meta_description: '',
      keywords: ''
    };

    switch (type) {
      case 'competitions':
        return {
          ...baseDefaults,
          title: '',
          slug: '',
          short_description: '',
          long_description: '',
          featured_image: '',
          start_date: '',
          end_date: '',
          status: 'upcoming',
          priority: 0
        };
      case 'teams':
        return {
          ...baseDefaults,
          name: '',
          slug: '',
          logo: '',
          country: '',
          region: '',
          squad_info: {},
          statistics: {},
          social_links: {}
        };
      case 'venues':
        return {
          ...baseDefaults,
          name: '',
          slug: '',
          location: '',
          address: '',
          capacity: 0,
          images: [],
          seating_map: '',
          facilities: [],
          transportation: {},
          accessibility: {}
        };
      case 'fixtures':
        return {
          ...baseDefaults,
          title: '',
          slug: '',
          match_date: '',
          home_team_id: '',
          away_team_id: '',
          venue_id: '',
          competition_id: '',
          status: 'scheduled',
          home_score: 0,
          away_score: 0,
          pricing_tiers: [],
          broadcasting: {},
          is_major: false,
          is_hot: false
        };
      default:
        return baseDefaults;
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-') + '-tickets';
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev: any) => {
      const updated = { ...prev, [field]: value };
      
      // Auto-generate slug when title/name changes
      if ((field === 'title' || field === 'name') && value) {
        updated.slug = generateSlug(value);
      }

      // Auto-generate fixture title when teams are selected
      if (entityType === 'fixtures' && (field === 'home_team_id' || field === 'away_team_id')) {
        const homeTeam = teams.find(t => t.id === (field === 'home_team_id' ? value : updated.home_team_id));
        const awayTeam = teams.find(t => t.id === (field === 'away_team_id' ? value : updated.away_team_id));
        
        if (homeTeam && awayTeam) {
          updated.title = `${homeTeam.name} vs ${awayTeam.name} Tickets`;
          updated.slug = generateSlug(`${homeTeam.name} vs ${awayTeam.name}`);
        }
      }

      return updated;
    });
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const dataToSave = { ...formData };
      delete dataToSave.id;
      delete dataToSave.created_at;
      delete dataToSave.updated_at;

      let result;
      if (entity?.id) {
        result = await supabase
          .from(entityType)
          .update(dataToSave)
          .eq('id', entity.id)
          .select()
          .single();
      } else {
        result = await supabase
          .from(entityType)
          .insert(dataToSave)
          .select()
          .single();
      }

      if (result.error) throw result.error;
      onSave(result.data);
    } catch (error) {
      console.error('Error saving entity:', error);
      alert('Error saving entity. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderCompetitionForm = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Competition Title *
          </label>
          <input
            type="text"
            value={formData.title || ''}
            onChange={(e) => handleInputChange('title', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="e.g., FIFA World Cup 2026"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            URL Slug *
          </label>
          <input
            type="text"
            value={formData.slug || ''}
            onChange={(e) => handleInputChange('slug', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="world-cup-2026-tickets"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Short Description (Max 150 characters)
        </label>
        <textarea
          value={formData.short_description || ''}
          onChange={(e) => handleInputChange('short_description', e.target.value)}
          maxLength={150}
          rows={2}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="Brief description for search results and cards"
        />
        <div className="text-sm text-gray-500 mt-1">
          {(formData.short_description || '').length}/150 characters
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Featured Image URL
        </label>
        <input
          type="url"
          value={formData.featured_image || ''}
          onChange={(e) => handleInputChange('featured_image', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Start Date
          </label>
          <input
            type="date"
            value={formData.start_date || ''}
            onChange={(e) => handleInputChange('start_date', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            End Date
          </label>
          <input
            type="date"
            value={formData.end_date || ''}
            onChange={(e) => handleInputChange('end_date', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Status
          </label>
          <select
            value={formData.status || 'upcoming'}
            onChange={(e) => handleInputChange('status', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="upcoming">Upcoming</option>
            <option value="active">Active</option>
            <option value="past">Past</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Long Description / Article Content
        </label>
        <textarea
          value={formData.long_description || ''}
          onChange={(e) => handleInputChange('long_description', e.target.value)}
          rows={8}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="Detailed article content about the competition..."
        />
      </div>
    </div>
  );

  const renderTeamForm = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Team Name *
          </label>
          <input
            type="text"
            value={formData.name || ''}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="e.g., Manchester United"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            URL Slug *
          </label>
          <input
            type="text"
            value={formData.slug || ''}
            onChange={(e) => handleInputChange('slug', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="manchester-united-tickets"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Country
          </label>
          <input
            type="text"
            value={formData.country || ''}
            onChange={(e) => handleInputChange('country', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="e.g., England"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Region
          </label>
          <input
            type="text"
            value={formData.region || ''}
            onChange={(e) => handleInputChange('region', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="e.g., Europe"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Team Logo URL
        </label>
        <input
          type="url"
          value={formData.logo || ''}
          onChange={(e) => handleInputChange('logo', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="https://example.com/logo.png"
        />
      </div>
    </div>
  );

  const renderVenueForm = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Venue Name *
          </label>
          <input
            type="text"
            value={formData.name || ''}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="e.g., Old Trafford"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            URL Slug *
          </label>
          <input
            type="text"
            value={formData.slug || ''}
            onChange={(e) => handleInputChange('slug', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="old-trafford-tickets"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <input
            type="text"
            value={formData.location || ''}
            onChange={(e) => handleInputChange('location', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="e.g., Manchester, England"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Capacity
          </label>
          <input
            type="number"
            value={formData.capacity || ''}
            onChange={(e) => handleInputChange('capacity', parseInt(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="e.g., 74310"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Full Address
        </label>
        <textarea
          value={formData.address || ''}
          onChange={(e) => handleInputChange('address', e.target.value)}
          rows={2}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          placeholder="Complete address with postal code"
        />
      </div>
    </div>
  );

  const renderFixtureForm = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fixture Title *
          </label>
          <input
            type="text"
            value={formData.title || ''}
            onChange={(e) => handleInputChange('title', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Auto-generated when teams selected"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            URL Slug *
          </label>
          <input
            type="text"
            value={formData.slug || ''}
            onChange={(e) => handleInputChange('slug', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Auto-generated when teams selected"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Home Team *
          </label>
          <select
            value={formData.home_team_id || ''}
            onChange={(e) => handleInputChange('home_team_id', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">Select Home Team</option>
            {teams.map(team => (
              <option key={team.id} value={team.id}>{team.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Away Team *
          </label>
          <select
            value={formData.away_team_id || ''}
            onChange={(e) => handleInputChange('away_team_id', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">Select Away Team</option>
            {teams.map(team => (
              <option key={team.id} value={team.id}>{team.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Venue
          </label>
          <select
            value={formData.venue_id || ''}
            onChange={(e) => handleInputChange('venue_id', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">Select Venue</option>
            {venues.map(venue => (
              <option key={venue.id} value={venue.id}>{venue.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Competition
          </label>
          <select
            value={formData.competition_id || ''}
            onChange={(e) => handleInputChange('competition_id', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">Select Competition</option>
            {competitions.map(competition => (
              <option key={competition.id} value={competition.id}>{competition.title}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Match Date & Time *
          </label>
          <input
            type="datetime-local"
            value={formData.match_date || ''}
            onChange={(e) => handleInputChange('match_date', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Status
          </label>
          <select
            value={formData.status || 'scheduled'}
            onChange={(e) => handleInputChange('status', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="scheduled">Scheduled</option>
            <option value="live">Live</option>
            <option value="finished">Finished</option>
            <option value="postponed">Postponed</option>
          </select>
        </div>
        <div className="flex items-center space-x-4 pt-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.is_major || false}
              onChange={(e) => handleInputChange('is_major', e.target.checked)}
              className="mr-2"
            />
            Major Fixture
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={formData.is_hot || false}
              onChange={(e) => handleInputChange('is_hot', e.target.checked)}
              className="mr-2"
            />
            Hot Fixture
          </label>
        </div>
      </div>
    </div>
  );

  const renderSEOSection = () => (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Trophy className="w-5 h-5 mr-2" />
        SEO Optimization
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Meta Title
          </label>
          <input
            type="text"
            value={formData.meta_title || ''}
            onChange={(e) => handleInputChange('meta_title', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="SEO optimized title (50-60 characters)"
            maxLength={60}
          />
          <div className="text-sm text-gray-500 mt-1">
            {(formData.meta_title || '').length}/60 characters
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Meta Description
          </label>
          <textarea
            value={formData.meta_description || ''}
            onChange={(e) => handleInputChange('meta_description', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="SEO optimized description (150-160 characters)"
            maxLength={160}
          />
          <div className="text-sm text-gray-500 mt-1">
            {(formData.meta_description || '').length}/160 characters
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Keywords (comma separated)
          </label>
          <input
            type="text"
            value={formData.keywords || ''}
            onChange={(e) => handleInputChange('keywords', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="keyword1, keyword2, keyword3"
          />
        </div>
      </div>
    </div>
  );

  const renderForm = () => {
    switch (entityType) {
      case 'competitions':
        return renderCompetitionForm();
      case 'teams':
        return renderTeamForm();
      case 'venues':
        return renderVenueForm();
      case 'fixtures':
        return renderFixtureForm();
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">
            {entity ? 'Edit' : 'Create'} {entityType.slice(0, -1).charAt(0).toUpperCase() + entityType.slice(1, -1)}
          </h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setPreview(!preview)}
              className="flex items-center px-3 py-2 text-sm bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Eye className="w-4 h-4 mr-2" />
              {preview ? 'Edit' : 'Preview'}
            </button>
            <button
              onClick={onCancel}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {preview ? (
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Preview</h3>
              <div className="bg-white rounded-lg p-4 border">
                <h4 className="text-xl font-bold mb-2">{formData.title || formData.name}</h4>
                <p className="text-gray-600 mb-4">{formData.short_description}</p>
                {formData.featured_image && (
                  <img src={formData.featured_image} alt="Preview" className="w-full h-48 object-cover rounded-lg mb-4" />
                )}
                <div className="text-sm text-gray-500">
                  Slug: /{formData.slug}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {renderForm()}
              {renderSEOSection()}
            </div>
          )}
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex items-center justify-end space-x-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={loading}
            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
          >
            <Save className="w-4 h-4 mr-2" />
            {loading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EntityForm;