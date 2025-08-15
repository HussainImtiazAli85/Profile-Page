import React, { useState } from 'react';
import { User, Mail, Globe, Languages, FileText, Camera, Save, CheckCircle } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  country: string;
  language: string;
  bio: string;
  profileImage: File | null;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  country?: string;
  language?: string;
  bio?: string;
}

const ProfileForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    country: '',
    language: '',
    bio: '',
    profileImage: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>('');

  const countries = [
    'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 
    'Oman', 'Jordan', 'Lebanon', 'Egypt', 'Morocco', 'Other'
  ];

  const languages = [
    'Arabic', 'English', 'French', 'Spanish', 'Hindi', 'Urdu', 'Other'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.country) {
      newErrors.country = 'Country is required';
    }

    if (!formData.language) {
      newErrors.language = 'Preferred language is required';
    }

    if (!formData.bio.trim()) {
      newErrors.bio = 'Bio is required';
    } else if (formData.bio.length < 20) {
      newErrors.bio = 'Bio must be at least 20 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        profileImage: file
      }));
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      setTimeout(() => {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 4000);
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dubai Design State</h1>
              <p className="text-gray-600">Employee Profile Management</p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 animate-fade-in">
          <CheckCircle className="w-5 h-5" />
          <span>Profile updated successfully!</span>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8">
            <h2 className="text-2xl font-bold text-white mb-2">Profile Information</h2>
            <p className="text-blue-100">Update your personal and work details</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-8">
            {/* Profile Image Upload */}
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-lg">
                  {imagePreview ? (
                    <img src={imagePreview} alt="Profile preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="w-12 h-12 text-gray-400" />
                    </div>
                  )}
                </div>
                <label
                  htmlFor="profileImage"
                  className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full cursor-pointer transition-colors duration-200 shadow-lg"
                >
                  <Camera className="w-4 h-4" />
                </label>
                <input
                  type="file"
                  id="profileImage"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
              <p className="text-sm text-gray-600">Click the camera icon to upload your profile photo</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                  <User className="inline w-4 h-4 mr-1" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                    errors.fullName ? 'border-red-300 bg-red-50' : 'border-gray-300 focus:border-blue-500'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  <Mail className="inline w-4 h-4 mr-1" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                    errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300 focus:border-blue-500'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              {/* Country */}
              <div>
                <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                  <Globe className="inline w-4 h-4 mr-1" />
                  Country of Residence *
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={`webkit-appear-none w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                    errors.country ? 'border-red-300 bg-red-50' : 'border-gray-300 focus:border-blue-500'
                  }`}
                >
                  <option value="">Select your country</option>
                  {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
                {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
              </div>

              {/* Language */}
              <div>
                <label htmlFor="language" className="block text-sm font-semibold text-gray-700 mb-2">
                  <Languages className="inline w-4 h-4 mr-1" />
                  Preferred Language *
                </label>
                <select
                  id="language"
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  className={`webkit-appear-none w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 ${
                    errors.language ? 'border-red-300 bg-red-50' : 'border-gray-300 focus:border-blue-500'
                  }`}
                >
                  <option value="">Select your preferred language</option>
                  {languages.map(language => (
                    <option key={language} value={language}>{language}</option>
                  ))}
                </select>
                {errors.language && <p className="mt-1 text-sm text-red-600">{errors.language}</p>}
              </div>
            </div>

            {/* Bio */}
            <div>
              <label htmlFor="bio" className="block text-sm font-semibold text-gray-700 mb-2">
                <FileText className="inline w-4 h-4 mr-1" />
                Short Bio *
              </label>
              <textarea
                id="bio"
                name="bio"
                rows={4}
                value={formData.bio}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 resize-none ${
                  errors.bio ? 'border-red-300 bg-red-50' : 'border-gray-300 focus:border-blue-500'
                }`}
                placeholder="Tell us about yourself and your role at Dubai Design State (minimum 20 characters)"
              />
              <div className="flex justify-between items-center mt-1">
                {errors.bio && <p className="text-sm text-red-600">{errors.bio}</p>}
                <p className="text-sm text-gray-500 ml-auto">{formData.bio.length}/200</p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-6 border-t border-gray-200">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg flex items-center space-x-2 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Save className="w-5 h-5" />
                <span>Update Profile</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;