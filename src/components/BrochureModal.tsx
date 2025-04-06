import { useState } from 'react';
import { X, Download, FileText } from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  category?: string; // Add category prop to determine which brochures to show
}

const BrochureModal = ({ isOpen, onClose, category = 'default' }: BrochureModalProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedBrochure, setSelectedBrochure] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Global Finance Education brochures
  const globalFinanceBrochures = [
    {
      id: 'global-finance-overview',
      title: 'Global Finance Education Overview',
      fileSize: '3.2 MB',
      path: '/brochures/global-finance-overview.pdf',
      available: true
    },
    {
      id: 'finance-degree-programs',
      title: 'Finance Degree Programs',
      fileSize: '2.8 MB',
      path: '/brochures/finance-degree-programs.pdf',
      available: true
    },
    {
      id: 'international-finance-courses',
      title: 'International Finance Courses',
      fileSize: '1.9 MB',
      path: '/brochures/international-finance-courses.pdf',
      available: true
    }
  ];

  // Financial Services brochures
  const financialServicesBrochures = [
    {
      id: 'financial-services-overview',
      title: 'MAHASAMVIT Financial Services Overview',
      fileSize: '2.6 MB',
      path: '/brochures/financial-services-overview.pdf',
      available: true
    },
    {
      id: 'portfolio-management-guide',
      title: 'Portfolio Management Guide',
      fileSize: '1.8 MB',
      path: '/brochures/portfolio-management-guide.pdf',
      available: true
    },
    {
      id: 'wealth-creation-strategies',
      title: 'Wealth Creation Strategies',
      fileSize: '2.2 MB',
      path: '/brochures/wealth-creation-strategies.pdf',
      available: true
    }
  ];

  // Money Research brochures
  const moneyResearchBrochures = [
    {
      id: 'money-research-methodologies',
      title: 'Money Research Methodologies',
      fileSize: '2.1 MB',
      path: '/brochures/money-research-methodologies.pdf',
      available: true
    },
    {
      id: 'investment-analysis-tools',
      title: 'Investment Analysis Tools',
      fileSize: '1.7 MB',
      path: '/brochures/investment-analysis-tools.pdf',
      available: true
    },
    {
      id: 'market-trends-report',
      title: 'Market Trends Report 2025',
      fileSize: '3.5 MB',
      path: '/brochures/market-trends-report.pdf',
      available: true
    }
  ];

  // Financial Research brochures
  const financialResearchBrochures = [
    {
      id: 'financial-research-services',
      title: 'Financial Research Services Guide',
      fileSize: '2.3 MB',
      path: '/brochures/financial-research-services.pdf',
      available: true
    },
    {
      id: 'equity-research-handbook',
      title: 'Equity Research Handbook',
      fileSize: '2.8 MB',
      path: '/brochures/equity-research-handbook.pdf',
      available: true
    },
    {
      id: 'economic-analysis-framework',
      title: 'Economic Analysis Framework',
      fileSize: '1.9 MB',
      path: '/brochures/economic-analysis-framework.pdf',
      available: true
    }
  ];

  // Business Consultancy brochures
  const businessConsultancyBrochures = [
    {
      id: 'business-consulting-services',
      title: 'Business Consulting Services',
      fileSize: '2.4 MB',
      path: '/brochures/business-consulting-services.pdf',
      available: true
    },
    {
      id: 'startup-growth-guide',
      title: 'Startup Growth Guide',
      fileSize: '1.8 MB',
      path: '/brochures/startup-growth-guide.pdf',
      available: true
    },
    {
      id: 'business-transformation-strategies',
      title: 'Business Transformation Strategies',
      fileSize: '2.1 MB',
      path: '/brochures/business-transformation-strategies.pdf',
      available: true
    }
  ];

  // Job Consultancy brochures
  const jobConsultancyBrochures = [
    {
      id: 'career-development-guide',
      title: 'Career Development Guide',
      fileSize: '1.9 MB',
      path: '/brochures/career-development-guide.pdf',
      available: true
    },
    {
      id: 'job-market-analysis',
      title: 'Job Market Analysis 2025',
      fileSize: '2.5 MB',
      path: '/brochures/job-market-analysis.pdf',
      available: true
    },
    {
      id: 'resume-interview-handbook',
      title: 'Resume & Interview Handbook',
      fileSize: '1.6 MB',
      path: '/brochures/resume-interview-handbook.pdf',
      available: true
    }
  ];

  // Agro Projects brochures
  const agroProjectsBrochures = [
    {
      id: 'agricultural-investment-opportunities',
      title: 'Agricultural Investment Opportunities',
      fileSize: '2.7 MB',
      path: '/brochures/agricultural-investment-opportunities.pdf',
      available: true
    },
    {
      id: 'sustainable-farming-guide',
      title: 'Sustainable Farming Guide',
      fileSize: '3.1 MB',
      path: '/brochures/sustainable-farming-guide.pdf',
      available: true
    },
    {
      id: 'agro-business-models',
      title: 'Agro-Business Models',
      fileSize: '2.2 MB',
      path: '/brochures/agro-business-models.pdf',
      available: true
    }
  ];

  // Media & Entertainment brochures
  const mediaEntertainmentBrochures = [
    {
      id: 'media-entertainment-investments',
      title: 'Media & Entertainment Investments',
      fileSize: '2.5 MB',
      path: '/brochures/media-entertainment-investments.pdf',
      available: true
    },
    {
      id: 'digital-media-trends',
      title: 'Digital Media Trends 2025',
      fileSize: '2.9 MB',
      path: '/brochures/digital-media-trends.pdf',
      available: true
    },
    {
      id: 'entertainment-industry-analysis',
      title: 'Entertainment Industry Analysis',
      fileSize: '3.2 MB',
      path: '/brochures/entertainment-industry-analysis.pdf',
      available: true
    }
  ];

  // Default brochures (original set)
  const defaultBrochures = [
    {
      id: 'dual-degree-professionals',
      title: 'Dual Degree for Highly Skilled Professionals',
      fileSize: '56.4 KB',
      path: '/brochures/dual-degree-professionals.pdf',
      available: true
    },
    {
      id: 'finance-courses',
      title: 'Finance Courses Brochure',
      fileSize: '2.3 MB',
      path: '#', // Would be replaced with actual path when available
      available: false
    },
    {
      id: 'accounting-programs',
      title: 'Accounting Programs Brochure',
      fileSize: '1.8 MB',
      path: '#',
      available: false
    },
    {
      id: 'banking-courses',
      title: 'Banking and Insurance Programs',
      fileSize: '3.2 MB',
      path: '#',
      available: false
    },
    {
      id: 'phd-programs',
      title: 'PhD and Research Programs',
      fileSize: '2.5 MB',
      path: '#',
      available: false
    }
  ];

  // Select which brochures to display based on category
  const getBrochuresByCategory = () => {
    switch (category) {
      case 'global-finance':
        return globalFinanceBrochures;
      case 'financial-services':
        return financialServicesBrochures;
      case 'money-research':
        return moneyResearchBrochures;
      case 'financial-research':
        return financialResearchBrochures;
      case 'business-consultancy':
        return businessConsultancyBrochures;
      case 'job-consultancy':
        return jobConsultancyBrochures;
      case 'agro-projects':
        return agroProjectsBrochures;
      case 'media-entertainment':
        return mediaEntertainmentBrochures;
      default:
        return defaultBrochures;
    }
  };

  const brochures = getBrochuresByCategory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Find the selected brochure
    const brochure = brochures.find(b => b.id === selectedBrochure);

    if (brochure && brochure.available) {
      // Simulate a download delay
      setTimeout(() => {
        // Create a download link
        const link = document.createElement('a');
        link.href = brochure.path;
        link.download = `${brochure.title}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Show success message
        setShowSuccessMessage(true);

        // Reset form after 2 seconds
        setTimeout(() => {
          setName('');
          setEmail('');
          setSelectedBrochure('');
          setIsSubmitting(false);
          setShowSuccessMessage(false);
          onClose();
        }, 2000);
      }, 1000);
    } else {
      // If the brochure is not available, just show a message
      alert(`Thank you ${name}! The selected brochure will be emailed to you shortly.`);
      setName('');
      setEmail('');
      setSelectedBrochure('');
      setIsSubmitting(false);
      onClose();
    }
  };

  if (!isOpen) return null;

  if (showSuccessMessage) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-4">Your brochure is downloading now.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-orange-900">Download Brochure</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="john@example.com"
              required
            />
          </div>

          <div className="mb-6">
            <p className="block text-sm font-medium text-gray-700 mb-3">
              Select a Brochure
            </p>
            <div className="space-y-3">
              {brochures.map((brochure) => (
                <div
                  key={brochure.id}
                  className={`p-3 border rounded-lg cursor-pointer flex items-center ${
                    selectedBrochure === brochure.id
                      ? 'border-orange-500 bg-orange-50'
                      : brochure.available
                        ? 'border-gray-200 hover:bg-gray-50'
                        : 'border-gray-200 opacity-75'
                  }`}
                  onClick={() => brochure.available && setSelectedBrochure(brochure.id)}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    selectedBrochure === brochure.id
                      ? 'bg-orange-100 text-orange-600'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="font-medium text-gray-800">{brochure.title}</p>
                    <p className="text-sm text-gray-500">
                      PDF • {brochure.fileSize}
                      {!brochure.available && <span className="text-orange-500 ml-2">(Coming Soon)</span>}
                    </p>
                  </div>
                  {selectedBrochure === brochure.id && (
                    <div className="w-5 h-5 bg-orange-500 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={!name || !email || !selectedBrochure || isSubmitting}
            className={`w-full py-3 px-4 rounded-lg flex items-center justify-center ${
              !name || !email || !selectedBrochure || isSubmitting
              ? 'bg-gray-300 cursor-not-allowed text-gray-500'
              : 'bg-orange-600 hover:bg-orange-700 text-white'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              <>
                <Download className="w-5 h-5 mr-2" />
                Download Brochure
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BrochureModal;
